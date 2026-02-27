import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/product/ProductGrid";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const collection = searchParams.get("collection");

  const getTitle = () => {
    if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    if (collection) {
      if (collection === "new") return "New Arrivals";
      if (collection === "sale") return "Sale";
      if (collection === "bestsellers") return "Best Sellers";
      return collection.charAt(0).toUpperCase() + collection.slice(1);
    }
    return "All Products";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              {getTitle()}
            </h1>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              Discover our curated selection of luxury fashion pieces
            </p>
          </div>
        </section>

        <ProductGrid limit={24} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
