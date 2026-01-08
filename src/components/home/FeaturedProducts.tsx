import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Import fallback images
import ankaraBlazerMen from "@/assets/products/ankara-blazer-men.jpg";
import ankaraDressWomen from "@/assets/products/ankara-dress-women.jpg";
import ankaraSenator from "@/assets/products/ankara-senator.jpg";
import ankaraPeplumSet from "@/assets/products/ankara-peplum-set.jpg";
import ankaraAgbada from "@/assets/products/ankara-agbada.jpg";
import ankaraJumpsuit from "@/assets/products/ankara-jumpsuit.jpg";

const fallbackImages = [ankaraBlazerMen, ankaraDressWomen, ankaraSenator, ankaraPeplumSet, ankaraAgbada, ankaraJumpsuit];

const formatPrice = (price: number) => {
  return `₦${price.toLocaleString()}`;
};

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string | null;
  sizes: string[] | null;
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('id, name, price, category, image_url, sizes')
        .eq('is_featured', true)
        .limit(6);
      
      if (error) {
        console.error('Error fetching featured products:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 flex justify-center">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Ankara Collection
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image_url || fallbackImages[index % fallbackImages.length]}
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-soft-black/0 group-hover:bg-soft-black/20 transition-all duration-500 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <Button variant="luxury" size="default" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="font-display text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-body text-lg font-semibold text-foreground">
                    {formatPrice(product.price)}
                  </p>
                  <div className="flex gap-1">
                    {(product.sizes || ["S", "M", "L", "XL"]).slice(0, 3).map((size) => (
                      <span
                        key={size}
                        className="text-xs text-muted-foreground font-body"
                      >
                        {size}
                      </span>
                    ))}
                    {(product.sizes || []).length > 3 && (
                      <span className="text-xs text-muted-foreground font-body">
                        +{(product.sizes || []).length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link to="/collections">
            <Button variant="luxury-outline" size="xl">
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
