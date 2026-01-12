"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categories, Category } from "@/data/categories";

const CategoryBrowser: React.FC = () => {
  const [currentCategories, setCurrentCategories] =
    useState<Category[]>(categories);
  const [breadcrumb, setBreadcrumb] = useState<Category[]>([]);

  const handleSelectCategory = (category: Category) => {
    if (category.children && category.children.length > 0) {
      setBreadcrumb([...breadcrumb, category]);
      setCurrentCategories(category.children);
    }
    // Ha nincs children, a Link gondoskodik az átirányításról
  };

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setBreadcrumb([]);
      setCurrentCategories(categories);
      return;
    }

    const newBreadcrumb = breadcrumb.slice(0, index + 1);
    setBreadcrumb(newBreadcrumb);
    setCurrentCategories(
      newBreadcrumb[newBreadcrumb.length - 1].children || []
    );
  };

  return (
    <div className="p-6">
      {/* Kategória kártyák */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {currentCategories.map((category) =>
          category.children && category.children.length > 0 ? (
            // Van alkategória → sima div, tovább navigál rekurzívan
            <div
              key={category.categoryCode}
              onClick={() => handleSelectCategory(category)}
              className="group bg-zinc-900  relative rounded-2xl overflow-hidden h-64 flex flex-col shadow-lg items-center"
            >
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-44 object-cover mb-3 transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-full h-44 bg-gray-700 flex items-center justify-center text-gray-400">
                  Nincs kép
                </div>
              )}
              <h3 className="text-lg font-semibold text-center mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {category.children.length} alkategória
              </p>
            </div>
          ) : (
            // Nincs alkategória → Link a kategória oldalra
            <Link
              key={category.categoryCode}
              href={`/category/${category.categoryCode}`}
              className="group bg-zinc-900  relative rounded-2xl overflow-hidden h-64 flex flex-col shadow-lg"
            >
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-44 object-cover mb-3 transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 transition-opacity group-hover:opacity-75" />
              )}
              <h3 className="text-lg font-semibold text-center mb-3">
                {category.name}
              </h3>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default CategoryBrowser;
