import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function UsedProductsPage() {
  const usedProducts = products.filter((p) => p.used);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Használt cuccok</h1>
      <p className="text-zinc-400 mb-10">
        Gondosan válogatott, használt hangszerek és felszerelések.
      </p>

      {usedProducts.length === 0 ? (
        <p className="text-zinc-400">Jelenleg nincs használt termék.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
