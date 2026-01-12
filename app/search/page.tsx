"use client";

import { products } from "@/data/products";
import SearchClient from "@/components/search/SearchClient";
import { useParams } from "next/navigation";

export default await function SearchPage() {
  const searchParams = useParams<{ q?: string }>();
  const query = searchParams.q?.toLowerCase() || "";
  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      )
    : [];

  return <SearchClient query={query} results={results} />;
};
