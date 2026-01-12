import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function RelatedProducts({
  categoryCode,
  currentId,
}: {
  categoryCode: string;
  currentId: string;
}) {
  const related = products
    .filter((p) => p.categoryCode == categoryCode && p.id != currentId)
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Hasonló termékek</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
