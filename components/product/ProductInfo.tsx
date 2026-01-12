"use client";

import Link from "next/link";

export default function ProductInfo({ product }: any) {
  return (
    <div>
      <p className="text-sm text-orange-500 font-semibold">{product.brand}</p>

      <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

      <p className="mt-4 text-zinc-400">{product.description}</p>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-3xl font-bold">
          {product.price.toLocaleString()} Ft
        </span>

        {product.used && (
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded text-sm">
            Használt
          </span>
        )}
      </div>

      <div className="mt-8 flex gap-4">
        <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded font-semibold">
          Kosárba
        </button>

        <Link
          href={`/category/${product.categoryCode}`}
          className="border border-white/20 px-6 py-3 rounded hover:bg-white hover:text-black"
        >
          Vissza a kategóriához
        </Link>
      </div>
    </div>
  );
}
