import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import suitCharcoal from "@/assets/products/suit-charcoal.jpg";
import blazerCream from "@/assets/products/blazer-cream.jpg";
import suitNavy from "@/assets/products/suit-navy.jpg";
import dressBlack from "@/assets/products/dress-black.jpg";

const productsData: Record<string, {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
  details: string[];
}> = {
  "1": {
    id: "1",
    name: "Charcoal Signature Suit",
    price: 1299,
    category: "Men's Suits",
    description: "Impeccably tailored from the finest Italian wool, this signature suit embodies modern elegance. Features a slim-fit silhouette with notched lapels and a two-button closure.",
    images: [suitCharcoal, suitNavy, blazerCream],
    sizes: ["S", "M", "L", "XL"],
    details: ["100% Italian Wool", "Slim Fit", "Two-Button Closure", "Notched Lapels", "Dry Clean Only"],
  },
  "2": {
    id: "2",
    name: "Ivory Elegance Blazer",
    price: 849,
    category: "Women's Couture",
    description: "A sophisticated blazer crafted from premium crepe fabric with gold-tone buttons. Perfect for both professional and evening occasions.",
    images: [blazerCream, dressBlack, suitCharcoal],
    sizes: ["XS", "S", "M", "L"],
    details: ["Premium Crepe Fabric", "Gold-Tone Buttons", "Tailored Fit", "Lined Interior", "Dry Clean Only"],
  },
};

const defaultProduct = {
  id: "1",
  name: "Charcoal Signature Suit",
  price: 1299,
  category: "Men's Suits",
  description: "Impeccably tailored from the finest Italian wool, this signature suit embodies modern elegance.",
  images: [suitCharcoal, suitNavy, blazerCream],
  sizes: ["S", "M", "L", "XL"],
  details: ["100% Italian Wool", "Slim Fit", "Two-Button Closure"],
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData[id || "1"] || defaultProduct;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Added to Cart",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

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
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-2 ring-accent"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
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
                ${product.price.toLocaleString()}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-body text-sm tracking-wider uppercase text-foreground">
                    Select Size
                  </h3>
                  <Link to="/size-guide" className="font-body text-sm text-accent hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
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

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <Button
                  variant="luxury"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
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

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">2-Year Warranty</span>
                </div>
              </div>

              {/* Details */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-display text-lg text-foreground mb-4">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
