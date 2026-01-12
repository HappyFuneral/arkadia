import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Árkádia Hangszerbolt</h3>
          <p>Új és használt hangszerek, szerviz, szakértelem.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Információ</h3>
          <ul className="space-y-1">
            <li>
              <a href="/service">Szervíz</a>
            </li>
            <li>
              <Link href="/category">Kategóriák</Link>
            </li>
            <li>
              <a href="/contact">Kapcsolat</a>
            </li>
            <li>
              <a href="/privacy">Adatvédelmi szabályzat</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Kapcsolat</h3>
          <p>Email: info@arkadia.hu</p>
          <p>Telefon: +36 30 123 4567</p>
        </div>
      </div>

      <div className="text-center text-xs text-zinc-500 pb-6">
        © {new Date().getFullYear()} Árkádia Hangszerbolt
      </div>
    </footer>
  );
}
