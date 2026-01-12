"use client";

import Link from "next/link";
import { categories } from "@/data/categories";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70">
      <aside className="absolute left-0 top-0 h-full w-80 bg-zinc-950 p-6 overflow-y-auto">
        <button onClick={onClose} className="mb-6 text-sm text-zinc-400">
          ✕ Bezárás
        </button>

        <nav className="space-y-4">
          {categories.map((cat) => (
            <div key={cat.categoryCode}>
              <Link
                href={`/category/${cat.categoryCode}`}
                onClick={onClose}
                className="font-semibold block"
              >
                {cat.name}
              </Link>

              {cat.children && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  {cat.children.map((child) => (
                    <li key={child.categoryCode}>
                      <Link
                        href={`/category/${child.categoryCode}`}
                        onClick={onClose}
                        className="text-zinc-400"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <hr className="my-6 border-zinc-800" />

        <nav className="space-y-2 text-sm">
          <Link href="/service" onClick={onClose}>
            Szervíz
          </Link>
          <Link href="/contact" onClick={onClose}>
            Kapcsolat
          </Link>
          <Link href="/privacy" onClick={onClose}>
            Adatvédelem
          </Link>
        </nav>
      </aside>
    </div>
  );
}
