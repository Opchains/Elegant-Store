import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const imageUrl = node.images.edges[0]?.node.url;
  const imageAlt = node.images.edges[0]?.node.altText || node.title;
  const price = parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2);
  const currencyCode = node.priceRange.minVariantPrice.currencyCode;
  
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error("This product is not available");
      return;
    }

    if (!firstVariant.availableForSale) {
      toast.error("This product is out of stock");
      return;
    }

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions,
    });

    toast.success("Added to bag", {
      description: node.title,
      position: "top-center",
    });
  };

  return (
    <Link 
      to={`/product/${node.handle}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            disabled={!firstVariant?.availableForSale}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            {firstVariant?.availableForSale ? "Add to Bag" : "Out of Stock"}
          </Button>
        </div>

        {/* Out of Stock Badge */}
        {firstVariant && !firstVariant.availableForSale && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-sm font-body uppercase tracking-wider">
            Sold Out
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="font-display text-lg font-medium group-hover:text-accent transition-colors line-clamp-1">
          {node.title}
        </h3>
        <p className="text-muted-foreground font-body text-sm line-clamp-2">
          {node.description || "No description available"}
        </p>
        <p className="font-display text-lg font-semibold">
          ${price} <span className="text-sm font-normal text-muted-foreground">{currencyCode}</span>
        </p>
      </div>
    </Link>
  );
}
