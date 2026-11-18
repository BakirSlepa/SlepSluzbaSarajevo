import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-12 px-6 dark:bg-gray-800 dark:bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-black text-xl font-bold mb-4">Šlep Služba Sarajevo</h3>
          <p className="mb-4 text-black ">Vaš pouzdani partner za vuču, dostupan 24/7 za sve vaše hitne potrebe vezane za vozila.</p>
          <Link href="https://olx.ba/artikal/53689504" target="_blank" rel="noopener noreferrer">
            <img src="/olx.svg" alt="OLX" className="w-6 h-6 text-black" />
          </Link>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">Brzi linkovi</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-black transition-colors dark:text-black">
                Početna
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-black transition-colors dark:text-black">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="#why-choose-us" className="text-black transition-colors dark:text-black">
                Zašto izabrati nas
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-black transition-colors dark:text-black">
                Zašto izabrati nas
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-black transition-colors dark:text-black">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-black">
          <h4 className="text-lg font-semibold mb-4 text-black">Usluge</h4>
          <ul className="space-y-2">
            <li>
              Vučna služba
            </li>
            <li>
              Pomoć na putu
            </li>
            <li>
              Izvlačenje vozila
            </li>
            <li>
              Dostupnost 24/7
            </li>
          </ul>
        </div>
        <div className="text-black">
          <h4 className="text-lg font-semibold mb-4">Kontakt podaci</h4>
          <p>Adresa: Kolodvorska 8</p>
          <p>Sarajevo</p>
          <p>Telefon: (+387) 62 223 225</p>
          <p>Email: slepsluzbabakir@gmail.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-blue-800 dark:border-gray-600 text-black">
        <p>&copy; 2025 Šlep Služba Sarajevo. Sva prava zadržana.</p>
        <p className="mt-2 text-sm text-white-500 dark:text-gray-500">
          By <a href="https://github.com/harunridjevic" className="text-blue-500 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">Harun Riđević</a>.
        </p>
      </div>
    </footer>
  )
}
