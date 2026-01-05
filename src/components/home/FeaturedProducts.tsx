import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import suitCharcoal from "@/assets/products/suit-charcoal.jpg";
import blazerCream from "@/assets/products/blazer-cream.jpg";
import suitNavy from "@/assets/products/suit-navy.jpg";
import dressBlack from "@/assets/products/dress-black.jpg";
import coatCamel from "@/assets/products/coat-camel.jpg";
import accessoriesSet from "@/assets/products/accessories-set.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Charcoal Signature Suit",
    price: 1299,
    category: "Men's Suits",
    image: suitCharcoal,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Ivory Elegance Blazer",
    price: 849,
    category: "Women's Couture",
    image: blazerCream,
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "3",
    name: "Midnight Navy Three-Piece",
    price: 1599,
    category: "Men's Suits",
    image: suitNavy,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "4",
    name: "Noir Evening Gown",
    price: 1899,
    category: "Women's Couture",
    image: dressBlack,
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "5",
    name: "Camel Cashmere Coat",
    price: 1199,
    category: "Outerwear",
    image: coatCamel,
    sizes: ["S", "M", "L"],
  },
  {
    id: "6",
    name: "Executive Accessories Set",
    price: 349,
    category: "Accessories",
    image: accessoriesSet,
    sizes: ["One Size"],
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Collection
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
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
                  src={product.image}
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
                    ${product.price.toLocaleString()}
                  </p>
                  <div className="flex gap-1">
                    {product.sizes.slice(0, 3).map((size) => (
                      <span
                        key={size}
                        className="text-xs text-muted-foreground font-body"
                      >
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 3 && (
                      <span className="text-xs text-muted-foreground font-body">
                        +{product.sizes.length - 3}
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
