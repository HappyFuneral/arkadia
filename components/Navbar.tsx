"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobilMenu";
export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <>
      <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>

          {/* LOGO */}
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.png" // ide tedd a logód fájlnevét / útvonalát
              alt="Árkádia Hangszerbolt"
              className="h-12 w-auto" // a magasságot állíthatod, a szélesség automatikus
            />
          </Link>
          {/* SEARCH */}
          <form onSubmit={submitSearch} className="hidden md:block w-64">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Keresés…"
              className="w-full bg-zinc-900 rounded px-3 py-2 text-sm"
            />
          </form>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex gap-4 text-sm">
            <Link href="/service">Szervíz</Link>
            <Link href="/contact">Kapcsolat</Link>
            <Link href="/privacy">Adatvédelem</Link>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
