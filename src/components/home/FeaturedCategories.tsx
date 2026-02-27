import { Link } from "react-router-dom";

const categories = [
  {
    title: "Women",
    description: "Elegant pieces for her",
    href: "/shop?category=women",
    gradient: "from-rose-100 to-amber-50",
  },
  {
    title: "Men",
    description: "Sophisticated styles for him",
    href: "/shop?category=men",
    gradient: "from-slate-100 to-stone-50",
  },
  {
    title: "Accessories",
    description: "Complete your look",
    href: "/shop?category=accessories",
    gradient: "from-amber-50 to-orange-50",
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Explore our carefully curated collections designed for every style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br from-secondary to-muted"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-300 group-hover:scale-105">
                <h3 className="font-display text-3xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {category.description}
                </p>
                <span className="text-sm font-body uppercase tracking-wider border-b border-primary pb-1 group-hover:border-accent transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
