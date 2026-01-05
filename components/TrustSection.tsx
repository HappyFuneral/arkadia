export default function TrustSection() {
  return (
    <section className="px-10 py-32 grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl mb-2">Tapasztalat</h3>
        <p className="text-gray-400">
          Több év hangszeres és szervizes múlt.
        </p>
      </div>
      <div>
        <h3 className="text-xl mb-2">Saját műhely</h3>
        <p className="text-gray-400">
          Minden javítás helyben készül.
        </p>
      </div>
      <div>
        <h3 className="text-xl mb-2">Személyes hozzáállás</h3>
        <p className="text-gray-400">
          Minden hangszer egyedi figyelmet kap.
        </p>
      </div>
    </section>
  );
}