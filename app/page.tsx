import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ServicePromo from "@/components/home/ServicePromo";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ServicePromo />
    </main>
  );
}
