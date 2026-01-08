import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import craftsmanshipImage from "@/assets/about-craftsmanship.jpg";
import heroImage from "@/assets/hero-image.jpg";

const values = [
  {
    title: "Excellence",
    description: "We pursue perfection in every stitch, ensuring each piece meets the highest standards of quality and craftsmanship.",
  },
  {
    title: "Tradition",
    description: "Our techniques are rooted in centuries of tailoring heritage, passed down through generations of master craftsmen.",
  },
  {
    title: "Innovation",
    description: "While honoring tradition, we embrace modern design and sustainable practices to create timeless pieces for today.",
  },
  {
    title: "Personalization",
    description: "Every client is unique, and our bespoke service ensures your garments reflect your individual style and personality.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Crafting Elegance
              <br />
              <span className="italic">Since 2020</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Jine Signatures has been the destination for discerning individuals 
              seeking exceptional tailoring and timeless style. Our journey began with a simple belief: 
              that every person deserves clothing that fits perfectly and makes them feel extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={craftsmanshipImage}
                  alt="Our Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-accent rounded-lg -z-10" />
            </div>
            
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                The Beginning
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
               A Heritage of
                <br />
                <span className="text-accent italic">Vibrant Stitching</span>
              </h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by master tailor Jine Signatures in the heart of the fashion district, 
                  our atelier was born from a passion for impeccable craftsmanship and an unwavering 
                  commitment to quality.
                </p>
                <p>
                  What started as a small workshop has grown into a renowned destination for bespoke 
                  tailoring, serving clients who appreciate the art of fine clothing. Our team of skilled 
                  artisans continues to uphold the traditions that have defined our brand while embracing 
                  innovative techniques and sustainable practices.
                </p>
                <p>
                  Today, Jine Signatures represents more than just clothing—it's a statement of 
                  individuality, confidence, and timeless elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 lg:p-10 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-shadow duration-500"
              >
                <div className="w-12 h-[2px] bg-accent mb-6" />
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Visit our atelier"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-soft-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            Experience the Difference
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Visit our atelier for a personalized consultation and discover the art of bespoke tailoring.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
