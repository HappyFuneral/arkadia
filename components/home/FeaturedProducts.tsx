import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.used).slice(0, 8);

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Kiemelt termékek</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
