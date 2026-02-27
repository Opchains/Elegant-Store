import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">
              Crafting Timeless Elegance
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
              Since our founding, we've been dedicated to creating luxury fashion that celebrates individuality, craftsmanship, and sustainable practices.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-3xl font-semibold mb-6">
                  Our Philosophy
                </h2>
                <div className="space-y-4 text-muted-foreground font-body">
                  <p>
                    At Maison, we believe that true luxury is not about excess, but about intention. Every piece in our collection is thoughtfully designed to become a cherished part of your wardrobe for years to come.
                  </p>
                  <p>
                    We work with the finest materials, sourced responsibly from artisan suppliers around the world. Our commitment to quality means that each garment is crafted to stand the test of time.
                  </p>
                  <p>
                    Style should be an expression of self, not a fleeting trend. Our designs blend classic silhouettes with contemporary details, creating pieces that feel both timeless and fresh.
                  </p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-sm" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-semibold text-center mb-16">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {[
                {
                  title: "Quality",
                  description: "We never compromise on materials or craftsmanship. Each piece is made to last."
                },
                {
                  title: "Sustainability",
                  description: "We're committed to ethical practices and reducing our environmental impact."
                },
                {
                  title: "Timelessness",
                  description: "We design for longevity, creating pieces that transcend seasonal trends."
                }
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-display text-xl font-medium mb-4">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70 font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
