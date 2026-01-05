import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CollectionBanners } from "@/components/home/CollectionBanners";
import { CraftsmanshipSection } from "@/components/home/CraftmanshipSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CollectionBanners />
      <CraftsmanshipSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
