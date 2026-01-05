import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Jine Signatures",
      description: "Thank you for subscribing to our exclusive newsletter.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-soft-black text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Join Our World
          </h2>
          <p className="font-body text-primary-foreground/70 mb-10">
            Subscribe to receive exclusive updates on new collections, 
            private sales, and personalized style recommendations.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300"
            />
            <Button
              type="submit"
              variant="luxury-gold"
              size="xl"
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="font-body text-xs text-primary-foreground/50 mt-6">
            By subscribing, you agree to receive marketing communications from Jine Signatures.
          </p>
        </div>
      </div>
    </section>
  );
}
