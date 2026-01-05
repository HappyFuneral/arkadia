export default function CTASection() {
  return (
    <section className="px-10 py-32 text-center">
      <h2 className="text-4xl mb-6">
        Készen áll a hangszered egy új életre?
      </h2>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-[#c2a26b] text-black rounded-xl">
          Kapcsolat
        </button>
        <button className="px-6 py-3 border border-gray-600 rounded-xl">
          Időpontfoglalás
        </button>
      </div>
    </section>
  );
}