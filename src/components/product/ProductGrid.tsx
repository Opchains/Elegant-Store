import { useEffect, useState } from "react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";

interface ProductGridProps {
  title?: string;
  limit?: number;
  query?: string;
}

export function ProductGrid({ title, limit = 12, query }: ProductGridProps) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts(limit, query);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [limit, query]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
              {title}
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] rounded-sm" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-5 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
              {title}
            </h2>
          )}
          <div className="text-center py-16">
            <PackageOpen className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h3 className="font-display text-2xl font-medium mb-3">No products found</h3>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              We're adding new products soon. Tell us what you'd like to see by describing your product in the chat!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
