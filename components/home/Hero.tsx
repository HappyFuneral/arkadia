import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-black">
      <div className="absolute inset-0 bg-[url('/images/hero-guitar.jpg')] bg-cover bg-center opacity-40" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Használt és új hangszerek
            <br />
            <span className="text-orange-500">zenészeknek</span>
          </h1>

          <p className="mt-6 text-zinc-300">
            Elektromos és akusztikus gitárok, effektek, erősítők – kipróbálva,
            beállítva, azonnal játszható állapotban.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/used"
              className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded font-semibold"
            >
              Használt cuccok
            </Link>

            <Link
              href="/category/elektromos-gitarok"
              className="border border-white/30 px-6 py-3 rounded font-semibold hover:bg-white hover:text-black"
            >
              Gitárok
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
