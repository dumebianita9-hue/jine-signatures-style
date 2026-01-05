import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soft-black/60 via-soft-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <p
            className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            The Art of Tailoring
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            Elegance
            <br />
            <span className="italic">Redefined</span>
          </h1>
          <p
            className="font-body text-lg text-primary-foreground/80 mb-10 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            Discover our exclusive collection of premium tailored pieces, 
            crafted with passion and precision for the modern connoisseur.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <Link to="/collections">
              <Button variant="hero" size="xl" className="group">
                Shop Collection
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
            <Link to="/custom-sewing">
              <Button
                variant="ghost"
                size="xl"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                Custom Tailoring
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
