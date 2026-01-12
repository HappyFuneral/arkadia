"use client";

import { useMemo, useState } from "react";
import { Product } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryHeader from "@/components/CategoryHeader";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import CategoryBrowser from "./CategoryBrowser";

type Props = {
  categoryCode: string;
  products: Product[];
};

export default function CategoryClient({ categoryCode, products }: Props) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [onlyUsed, setOnlyUsed] = useState(false);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))),
    [products]
  );
  const subCategories = useMemo(
    () =>
      Array.from(
        new Set(
          products.map((p) => p.subCategoryCode).filter(Boolean) as string[]
        )
      ),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (onlyUsed && !p.used) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand))
        return false;
      if (
        selectedSubCategories.length &&
        (!p.subCategoryCode ||
          !selectedSubCategories.includes(p.subCategoryCode))
      )
        return false;
      if (minPrice !== "" && p.price < minPrice) return false;
      if (maxPrice !== "" && p.price > maxPrice) return false;
      return true;
    });
  }, [
    products,
    selectedBrands,
    selectedSubCategories,
    onlyUsed,
    minPrice,
    maxPrice,
  ]);

  const prettyCategoryName = categories
    .find((c) => c.categoryCode === categoryCode)
    ?.name.toString();
  function getBreadcrumb(code: string, cats = categories, trail: any[] = []) {
    for (const cat of cats) {
      const newTrail = [...trail, cat];
      if (cat.categoryCode === code) return newTrail;

      if (cat.children) {
        const found = getBreadcrumb(code, cat.children, newTrail);
        if (found) return found;
      }
    }
    return null;
  }
  const breadcrumb = getBreadcrumb(categoryCode) ?? [];
  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-12 gap-8">
      {/* HEADER */}
      <div className="col-span-full">
        {/* BREADCRUMB */}
        <div className="container mx-auto px-6 pt-6">
          <Breadcrumb
            items={[
              { label: "Főoldal", href: "/" },
              ...breadcrumb.map((b) => ({
                label: b.name,
                href: `/category/${b.categoryCode}`,
              })),
            ]}
          />
        </div>
        <CategoryHeader
          title={prettyCategoryName}
          description="Új és használt hangszerek – szűrj márka, ár és típus szerint."
        />

        <button
          className="md:hidden mt-4 px-4 py-2 bg-orange-600 text-black rounded font-semibold"
          onClick={() => setMobileFiltersOpen(true)}
        >
          Szűrők
        </button>
      </div>

      {/* DESKTOP FILTER */}
      <aside className="hidden md:block col-span-12 md:col-span-3 bg-zinc-900 p-6 rounded-xl space-y-6 h-fit sticky top-6">
        <FilterPanel
          brands={brands}
          subCategories={subCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedSubCategories={selectedSubCategories}
          setSelectedSubCategories={setSelectedSubCategories}
          onlyUsed={onlyUsed}
          setOnlyUsed={setOnlyUsed}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          reset={() => {
            setSelectedBrands([]);
            setSelectedSubCategories([]);
            setOnlyUsed(false);
            setMinPrice("");
            setMaxPrice("");
          }}
        />
      </aside>

      {/* PRODUCTS */}
      <section className="col-span-12 md:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-zinc-400">
            Nincs találat a szűrésre.
          </p>
        )}
      </section>

      {/* MOBILE SLIDE FILTER PANEL */}
      {mobileFiltersOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* PANEL */}
          <aside className="fixed inset-y-0 left-0 w-3/4 bg-zinc-900 z-50 p-6 overflow-auto transform transition-transform duration-300 translate-x-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Szűrők</h2>
              <button
                className="text-xl font-bold"
                onClick={() => setMobileFiltersOpen(false)}
              >
                ×
              </button>
            </div>

            <FilterPanel
              brands={brands}
              subCategories={subCategories}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedSubCategories={selectedSubCategories}
              setSelectedSubCategories={setSelectedSubCategories}
              onlyUsed={onlyUsed}
              setOnlyUsed={setOnlyUsed}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              reset={() => {
                setSelectedBrands([]);
                setSelectedSubCategories([]);
                setOnlyUsed(false);
                setMinPrice("");
                setMaxPrice("");
              }}
            />
          </aside>
        </>
      )}
    </div>
  );
}

// FILTER PANEL COMPONENT
type FilterProps = {
  brands: string[];
  subCategories: string[];
  selectedBrands: string[];
  setSelectedBrands: (b: string[]) => void;
  selectedSubCategories: string[];
  setSelectedSubCategories: (s: string[]) => void;
  onlyUsed: boolean;
  setOnlyUsed: (b: boolean) => void;
  minPrice: number | "";
  setMinPrice: (n: number | "") => void;
  maxPrice: number | "";
  setMaxPrice: (n: number | "") => void;
  reset: () => void;
};

function FilterPanel({
  brands,
  subCategories,
  selectedBrands,
  setSelectedBrands,
  selectedSubCategories,
  setSelectedSubCategories,
  onlyUsed,
  setOnlyUsed,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  reset,
}: FilterProps) {
  return (
    <div className="space-y-6">
      {/* BRAND */}
      <div>
        <h3 className="text-sm font-medium mb-2">Márka</h3>
        <div className="space-y-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  setSelectedBrands((prev) =>
                    prev.includes(brand)
                      ? prev.filter((b) => b !== brand)
                      : [...prev, brand]
                  )
                }
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* SUBCATEGORY */}
      {subCategories.length > 0 && (
        <div>
          <h3 className="text-sm font-medium mb-2">Típus</h3>
          <div className="space-y-1">
            {subCategories.map((sub) => (
              <label key={sub} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedSubCategories.includes(sub)}
                  onChange={() =>
                    setSelectedSubCategories((prev) =>
                      prev.includes(sub)
                        ? prev.filter((s) => s !== sub)
                        : [...prev, sub]
                    )
                  }
                />
                {sub.replace("-", " ")}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* PRICE */}
      <div>
        <h3 className="text-sm font-medium mb-2">Ár (Ft)</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : "")
            }
            className="w-full bg-zinc-800 rounded px-2 py-1 text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : "")
            }
            className="w-full bg-zinc-800 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* USED */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={onlyUsed}
          onChange={() => setOnlyUsed(!onlyUsed)}
        />
        Csak használt
      </label>

      {/* RESET */}
      <button
        onClick={reset}
        className="w-full text-sm border border-zinc-700 rounded py-2 hover:bg-zinc-800"
      >
        Szűrők törlése
      </button>
    </div>
  );
}
