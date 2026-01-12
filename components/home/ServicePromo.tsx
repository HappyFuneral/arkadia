import Link from "next/link";

export default function ServicePromo() {
  return (
    <section className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-zinc-900 to-black rounded-xl p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Gitárszerviz</h2>
          <p className="mt-4 text-zinc-400">
            Beállítás, bundcsiszolás, elektronika javítás. Több éves
            tapasztalat, zenészeknek.
          </p>

          <Link
            href="/szerviz"
            className="inline-block mt-6 bg-orange-600 px-6 py-3 rounded font-semibold hover:bg-orange-700"
          >
            Időpont foglalás
          </Link>
        </div>

        <div className="hidden md:block text-right text-6xl">🎸</div>
      </div>
    </section>
  );
}
