import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import craftsmanshipImage from "@/assets/about-craftsmanship.jpg";

const features = [
  {
    title: "Premium Fabrics",
    description: "Sourced from the finest mills in Italy and England",
  },
  {
    title: "Master Tailors",
    description: "Over 6 years of combined expertise",
  },
  {
    title: "Bespoke Service",
    description: "Personalized fittings and alterations",
  },
];

export function CraftsmanshipSection() {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
              <img
                src={craftsmanshipImage}
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              The Art of
              <br />
              <span className="italic text-accent">Craftsmanship</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              At Jine Signatures, every stitch tells a story of dedication and precision. 
              Our master tailors blend time-honored techniques with contemporary design, 
              creating pieces that transcend trends and become timeless additions to your wardrobe.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-[1px] bg-accent mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="luxury-outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
