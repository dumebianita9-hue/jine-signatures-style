import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, X } from "lucide-react";
import { products, categories, sortOptions } from "@/data/products";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === "Price: Low to High") return a.price - b.price;
    if (selectedSort === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Ankara Collections
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover our stunning collection of {products.length}+ authentic African Ankara designs, 
            crafted with premium wax print fabrics for the modern fashion enthusiast.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-border">
            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-foreground border-b-2 border-accent pb-1"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Sort: {selectedSort}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
              </button>
              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card rounded-lg shadow-elegant border border-border overflow-hidden z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left font-body text-sm transition-colors duration-300 ${
                        selectedSort === option
                          ? "bg-accent/10 text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden mb-8 p-6 bg-card rounded-lg shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card group"
                style={{
                  animationDelay: `${index * 0.02}s`,
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-soft-black/0 group-hover:bg-soft-black/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <Button variant="luxury" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-display text-base text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-base font-semibold text-foreground">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center font-body text-sm text-muted-foreground mt-12">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
