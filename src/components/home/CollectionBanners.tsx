import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kiddiesAnkara from "@/assets/products/kiddies-ankara.jpg";
import blazerCream from "@/assets/products/blazer-cream.jpg";

const collections = [
  {
    id: "kiddies",
    title: "Kiddies Collection",
    subtitle: "Little Fashionistas",
    description: "Adorable styles for your little ones with quality and comfort.",
    image: kiddiesAnkara,
    link: "/collections?category=kiddies",
  },
  {
    id: "womens",
    title: "Women's Collection",
    subtitle: "Effortless Grace",
    description: "Experience sophistication through our curated selection of women's couture.",
    image: blazerCream,
    link: "/collections?category=womens",
  },
];

export function CollectionBanners() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={collection.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] lg:aspect-[3/4]"
            >
              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-soft-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <p
                  className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/80 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ transitionDelay: "0.1s" }}
                >
                  {collection.subtitle}
                </p>
                <h3 className="font-display text-3xl lg:text-4xl text-primary-foreground mb-4">
                  {collection.title}
                </h3>
                <p
                  className="font-body text-sm text-primary-foreground/80 mb-6 max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ transitionDelay: "0.2s" }}
                >
                  {collection.description}
                </p>
                <div>
                  <Button variant="hero" size="default">
                    Explore
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
