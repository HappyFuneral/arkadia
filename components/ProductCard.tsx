import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition">
      {/* BADGES */}
      <div className="absolute top-3 left-3 flex gap-2 z-10">
        {product.used ? (
          <span className="text-xs bg-orange-600 px-2 py-1 rounded">
            Használt
          </span>
        ) : (
          <span className="text-xs bg-emerald-600 px-2 py-1 rounded">Új</span>
        )}
        <span className="text-xs bg-black/70 px-2 py-1 rounded">
          {product.brand}
        </span>
      </div>

      {/* IMAGE */}
      <div className="h-52 bg-black flex items-center justify-center">
        <img
          src={product.images[0]} // első kép
          alt={product.name}
          className="max-h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* INFO */}
      <div className="p-4">
        <h3 className="font-semibold leading-tight">{product.name}</h3>
        <p className="mt-2 font-bold">{product.price.toLocaleString()} Ft</p>
      </div>

      {/* HOVER CTA */}
      <Link
        href={`/product/${product.slug}`} // slug alapú link
        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
      >
        <span className="bg-white text-black px-4 py-2 rounded font-semibold">
          Megnézem
        </span>
      </Link>
    </div>
  );
}
