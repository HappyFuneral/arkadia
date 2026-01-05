export default function GuitarDetail({ params }: { params: { slug: string } }) {
  const guitar = {
    name: "Fender Stratocaster",
    price: "420 000 Ft",
    description:
      "Kiváló állapotú használt Fender Stratocaster, frissen beállítva, új húrokkal.",
    specs: [
      "Alder test",
      "Maple nyak",
      "Single-coil pickupok",
      "Friss setup",
    ],
  };

  return (
    <main className="px-10 py-32 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="h-[500px] bg-[#141414] rounded-3xl" />
        <div>
          <h1 className="text-4xl mb-4">{guitar.name}</h1>
          <p className="text-xl text-[#c2a26b] mb-6">{guitar.price}</p>
          <p className="text-gray-400 mb-8">{guitar.description}</p>

          <ul className="space-y-2 mb-10">
            {guitar.specs.map((s) => (
              <li key={s}>→ {s}</li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#c2a26b] text-black rounded-xl">
              Érdekel
            </button>
            <button className="px-6 py-3 border border-gray-600 rounded-xl">
              Szerviz időpont
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}