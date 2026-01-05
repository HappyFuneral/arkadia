export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10">
      <div>
        <h1 className="text-6xl font-serif mb-6">
          Használt gitárok.<br />Gondosan válogatva.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Vásárlás, beszámítás és profi gitárszerviz egy helyen.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-[#c2a26b] text-black rounded-xl">
            Használt gitárok
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-xl">
            Gitárszerviz
          </button>
        </div>
      </div>
    </section>
  );
}