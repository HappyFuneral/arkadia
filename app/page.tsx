import Hero from "../components/Hero";
import FeaturedGuitars from "../components/FeaturedGuitars";
import ServiceHighlight from "../components/ServiceHighlight";
import TrustSection from "../components/TrustSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <FeaturedGuitars />
      <ServiceHighlight />
      <TrustSection />
      <CTASection />
    </main>
  );
}