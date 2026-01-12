export default function ProductSpecs({
  specs,
}: {
  specs: Record<string, string>;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Műszaki adatok</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(specs).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between bg-zinc-900 p-4 rounded"
          >
            <span className="text-zinc-400">{key}</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
