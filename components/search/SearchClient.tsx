"use client";

import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type Props = {
  query: string;
  results: Product[];
};

export default function SearchClient({ query, results }: Props) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">
        Keresés: <span className="text-orange-500">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-zinc-400">Nincs találat.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
