import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "2349027856578";

const Cart = () => {
  const handleContactUs = () => {
    const message = encodeURIComponent("Hello! I'd like to place an order.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Your Selection
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">
              Shopping Cart
            </h1>
          </div>

          {/* Empty Cart State */}
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Your cart is empty
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              At Jine Signatures, we process all orders directly via WhatsApp for a personalized shopping experience. 
              Browse our collections and click "Buy Now" on any product to order.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections">
                <Button variant="luxury" size="xl">
                  Browse Collections
                </Button>
              </Link>
              <Button 
                variant="luxury-outline" 
                size="xl"
                onClick={handleContactUs}
                className="gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="max-w-2xl mx-auto mt-12 p-6 bg-muted rounded-lg">
            <h3 className="font-display text-lg text-foreground mb-3 text-center">
              How to Order
            </h3>
            <ol className="font-body text-sm text-muted-foreground space-y-2">
              <li className="flex gap-3">
                <span className="font-semibold text-accent">1.</span>
                Browse our collections and find your perfect Ankara piece
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent">2.</span>
                Click "Buy Now" or "Request to Sew" on the product page
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent">3.</span>
                You'll be connected to us on WhatsApp to complete your order
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent">4.</span>
                Enjoy personalized service and nationwide delivery!
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
