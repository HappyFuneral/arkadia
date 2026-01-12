const guitars = [
  { name: "Fender Stratocaster", price: "420 000 Ft" },
  { name: "Gibson Les Paul", price: "650 000 Ft" },
  { name: "Ibanez RG", price: "310 000 Ft" },
];

export default function FeaturedGuitars() {
  return (
    <section className="px-10 py-32">
      <h2 className="text-3xl mb-12">Kiemelt használt gitárok</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {guitars.map((g) => (
          <div key={g.name} className="bg-[#141414] p-6 rounded-2xl">
            <div className="h-48 bg-[#1f1f1f] rounded-xl mb-4" />
            <h3 className="text-lg">{g.name}</h3>
            <p className="text-gray-400">{g.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}