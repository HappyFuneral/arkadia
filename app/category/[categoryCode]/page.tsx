import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import CategoryClient from "@/components/CategoryClient";

/* ---------------- HELPERS ---------------- */

function findCategoryByCode(code: string, cats = categories): any | null {
  for (const cat of cats) {
    if (cat.categoryCode === code) return cat;
    if (cat.children) {
      const found = findCategoryByCode(code, cat.children);
      if (found) return found;
    }
  }
  return null;
}

function getAllChildCategoryCodes(category: any): string[] {
  if (!category.children) return [category.categoryCode];

  return [
    category.categoryCode,
    ...category.children.flatMap((child: any) =>
      getAllChildCategoryCodes(child)
    ),
  ];
}

/* ---------------- PAGE ---------------- */

type PageProps = {
  params: Promise<{ categoryCode: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { categoryCode } = await params;

  const category = findCategoryByCode(categoryCode);
  if (!category) return notFound();

  const validCategoryCodes = getAllChildCategoryCodes(category);

  const categoryProducts = products.filter((p) =>
    validCategoryCodes.includes(p.categoryCode)
  );

  return (
    <>
      {/* PRODUCT LIST + FILTERS */}
      <CategoryClient categoryCode={categoryCode} products={categoryProducts} />
    </>
  );
}
