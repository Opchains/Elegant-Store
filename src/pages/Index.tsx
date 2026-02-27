import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { BrandStory } from "@/components/home/BrandStory";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <ProductGrid title="New Arrivals" limit={8} />
        <FeaturedCategories />
        <BrandStory />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
