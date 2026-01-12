"use client";

import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductSpecs from "@/components/product/ProductSpecs";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const param = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === param.slug);

  if (!product) {
    return <div className="p-10">Termék nem található</div>;
  }

  return (
    <main className="container mx-auto px-6 py-16 space-y-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      <ProductSpecs specs={product.specs} />
      <RelatedProducts
        categoryCode={product.categoryCode}
        currentId={product.id}
      />
    </main>
  );
}
