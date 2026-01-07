import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Truck, Shield, RotateCcw, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const WHATSAPP_LINK = "https://wa.me/message/Q27OMVLB3HS6C1";

const formatPrice = (price: number) => {
  return `₦${price.toLocaleString()}`;
};

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string | null;
  image_url: string | null;
  sizes: string[] | null;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching product:', error);
        toast({
          title: "Error",
          description: "Could not load product details.",
          variant: "destructive",
        });
      } else {
        setProduct(data);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id, toast]);

  const handleWhatsAppOrder = (orderType: 'buy' | 'sew') => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before ordering.",
        variant: "destructive",
      });
      return;
    }

    if (!product) return;

    const totalPrice = product.price * quantity;
    const message = `Hello! I would like to ${orderType === 'buy' ? 'BUY' : 'SEW'} the following:\n\n` +
      `📦 Product: ${product.name}\n` +
      `📏 Size: ${selectedSize}\n` +
      `🔢 Quantity: ${quantity}\n` +
      `💰 Price: ${formatPrice(totalPrice)}\n\n` +
      `Please confirm availability and provide further details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_LINK}&text=${encodedMessage}`, '_blank');
  };

  if (loading) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </section>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-foreground mb-4">Product Not Found</h1>
            <Link to="/collections">
              <Button variant="luxury">Back to Collections</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const sizes = product.sizes || ["S", "M", "L", "XL"];

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link></li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.image_url || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {product.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-display text-3xl text-accent mb-6">
                {formatPrice(product.price)}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {product.description || "A beautifully crafted piece from our exclusive Ankara collection."}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-body text-sm tracking-wider uppercase text-foreground">
                    Select Size
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-lg font-body text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-accent/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-body text-sm tracking-wider uppercase text-foreground mb-4">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-body text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="mb-8 p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">Total Price:</span>
                  <span className="font-display text-2xl text-foreground">{formatPrice(product.price * quantity)}</span>
                </div>
              </div>

              {/* Actions - Buy or Sew */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  variant="luxury"
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={() => handleWhatsAppOrder('buy')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy Now
                </Button>
                <Button
                  variant="luxury-outline"
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={() => handleWhatsAppOrder('sew')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Request to Sew
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-destructive border-destructive" : ""}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>

              {/* WhatsApp Info */}
              <div className="mb-8 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                <p className="font-body text-sm text-green-800 dark:text-green-200">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Orders are processed via WhatsApp for a personalized experience. Click Buy or Sew to get started!
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Nationwide Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Easy Returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Quality Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;