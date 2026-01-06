import { useQuery } from "@tanstack/react-query";
import { Package, TrendingUp, Eye, ShoppingBag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminHome() {
  const { data: productCount = 0 } = useQuery({
    queryKey: ["admin-product-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });
      if (error) throw error;
      return count || 0;
    },
  });

  const { data: featuredCount = 0 } = useQuery({
    queryKey: ["admin-featured-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("is_featured", true);
      if (error) throw error;
      return count || 0;
    },
  });

  const stats = [
    {
      title: "Total Products",
      value: productCount,
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "Featured Products",
      value: featuredCount,
      icon: TrendingUp,
      color: "text-accent",
    },
    {
      title: "Page Views",
      value: "—",
      icon: Eye,
      color: "text-green-500",
    },
    {
      title: "Orders",
      value: "—",
      icon: ShoppingBag,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl lg:text-3xl mb-2">Welcome to the Admin Dashboard</h2>
        <p className="text-muted-foreground font-body">
          Manage your products, collections, and store settings.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-body text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="font-display text-3xl">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="font-display text-xl mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/products/new"
            className="block p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-elegant transition-all duration-300"
          >
            <Package className="w-8 h-8 text-accent mb-3" />
            <h4 className="font-display text-lg mb-1">Add New Product</h4>
            <p className="text-sm text-muted-foreground font-body">
              Create a new product listing with images and details.
            </p>
          </a>
          <a
            href="/admin/products"
            className="block p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-elegant transition-all duration-300"
          >
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <h4 className="font-display text-lg mb-1">Manage Products</h4>
            <p className="text-sm text-muted-foreground font-body">
              Edit, update, or remove existing products.
            </p>
          </a>
          <a
            href="/"
            className="block p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-elegant transition-all duration-300"
          >
            <Eye className="w-8 h-8 text-accent mb-3" />
            <h4 className="font-display text-lg mb-1">View Store</h4>
            <p className="text-sm text-muted-foreground font-body">
              See how your store looks to customers.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
