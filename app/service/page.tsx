export default function ServicePage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Hangszer szervíz</h1>

      <p className="mb-8 text-zinc-400">
        Gitár, basszus, ukulele és egyéb hangszerek javítása, beállítása.
      </p>

      <form className="space-y-4 bg-zinc-900 p-6 rounded-xl">
        <input
          placeholder="Név"
          className="w-full bg-zinc-800 rounded px-3 py-2"
        />
        <input
          placeholder="Email"
          className="w-full bg-zinc-800 rounded px-3 py-2"
        />
        <input
          placeholder="Hangszer típusa"
          className="w-full bg-zinc-800 rounded px-3 py-2"
        />
        <textarea
          placeholder="Hiba / kérés leírása"
          rows={4}
          className="w-full bg-zinc-800 rounded px-3 py-2"
        />

        <button className="bg-orange-600 px-6 py-2 rounded font-semibold">
          Küldés
        </button>
      </form>
    </div>
  );
}
