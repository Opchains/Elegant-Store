import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-primary-foreground/60 mb-6">
            Our Philosophy
          </p>
          
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-8">
            Where Craftsmanship Meets Modern Luxury
          </h2>
          
          <p className="text-lg text-primary-foreground/80 font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            At Maison, we believe that true luxury lies in the details. Each piece in our collection 
            is thoughtfully designed and crafted with the finest materials, creating timeless fashion 
            that transcends seasons and trends.
          </p>
          
          <Button asChild variant="secondary" size="lg">
            <Link to="/about">
              Discover Our Story
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
