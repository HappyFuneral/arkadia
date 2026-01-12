import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-8 py-20 ">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Fedezd fel a kategóriákat
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.categoryCode}
            href={`/category/${cat.categoryCode}`}
            className="group relative rounded-2xl overflow-hidden h-64 flex flex-col shadow-lg"
          >
            {/* IMAGE */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 transition-opacity group-hover:opacity-75" />
            </div>

            {/* TEXT OVERLAY */}
            <div className="relative z-10 mt-auto p-4 text-center text-white bg-black/30 backdrop-blur-sm">
              <p className="font-semibold text-lg">{cat.name}</p>
              <span className="text-sm text-orange-400 mt-1 inline-block opacity-0 group-hover:opacity-100 transition">
                Megnézem →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
