// src/data/products.ts

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  price: number;
  used: boolean;
  categoryCode: string;
  subCategoryCode?: string;
  images: string[];
  specs: Record<string, string>;
};

export const products = [
  {
    id: "1",
    slug: "fender-stratocaster-6",
    name: "Fender Stratocaster 6 Húros",
    brand: "Fender",
    categoryCode: "elektromos-6",
    used: false,
    price: 259000,
    images: [
      "/images/products/fender-strat1.jpg",
      "/images/products/fender-strat2.jpg",
    ],
    description:
      "Ikonikus 6 húros elektromos gitár, klasszikus Stratocaster hangzás, ideális kezdőknek és profiknak egyaránt.",
    specs: {
      Húrok: "6",
      Test: "Alder",
      Nyak: "Maple",
      Fogólap: "Rosewood",
      Pickup: "SSS",
      Szín: "Sunburst",
    },
  },
  {
    id: "2",
    slug: "gibson-les-paul",
    name: "Gibson Les Paul Standard",
    brand: "Gibson",
    categoryCode: "elektromos-6",
    used: true,
    price: 479000,
    images: [
      "/images/products/gibson-lp1.jpg",
      "/images/products/gibson-lp2.jpg",
    ],
    description:
      "Legendás Les Paul, gazdag sustain és erőteljes hangzás, professzionális szinten.",
    specs: {
      Húrok: "6",
      Test: "Mahogany",
      Nyak: "Mahogany",
      Fogólap: "Ebony",
      Pickup: "Humbucker",
      Szín: "Cherry Sunburst",
    },
  },
  {
    id: "3",
    slug: "yamaha-acoustic-fg800",
    name: "Yamaha FG800 Akusztikus",
    brand: "Yamaha",
    categoryCode: "akusztikus-gitarok",
    used: false,
    price: 85000,
    images: [
      "/images/products/yamaha-fg1.jpg",
      "/images/products/yamaha-fg2.jpg",
    ],
    description:
      "Megbízható akusztikus gitár, gazdag tónus, tökéletes kezdőknek és haladóknak.",
    specs: {
      Test: "Spruce",
      Nyak: "Nato",
      Fogólap: "Rosewood",
      Húrláb: "Rosewood",
      Szín: "Natural",
    },
  },
  {
    id: "4",
    slug: "boss-dd-8-delay-pedal",
    name: "Boss DD-8 Delay Pedál",
    brand: "Boss",
    categoryCode: "gitar-effektek",
    used: false,
    price: 98000,
    images: ["/images/products/boss-dd1.jpg", "/images/products/boss-dd2.jpg"],
    description:
      "Digitális delay pedál számos funkcióval, kompakt és megbízható stúdió és élő játékhoz.",
    specs: {
      Típus: "Digital Delay",
      Hatalom: "9V DC",
      Súly: "0.7kg",
      Szín: "Fekete",
    },
  },
  {
    id: "5",
    slug: "marshall-mg30-gitar-erosito",
    name: "Marshall MG30 Gitárerősítő",
    brand: "Marshall",
    categoryCode: "gitar-erositok",
    used: false,
    price: 125000,
    images: [
      "/images/products/marshall-mg1.jpg",
      "/images/products/marshall-mg2.jpg",
    ],
    description:
      "30 wattos kombó erősítő, ideális gyakorláshoz és kisebb koncertekhez, klasszikus Marshall hangzás.",
    specs: {
      Teljesítmény: "30W",
      Hangszóró: "8 inch",
      Súly: "7kg",
      Szín: "Fekete",
    },
  },
  {
    id: "6",
    slug: "roland-spd-sx-cajon",
    name: "Roland SPD-SX Cajon",
    brand: "Roland",
    categoryCode: "dobok",
    used: true,
    price: 150000,
    images: [
      "/images/products/roland-cajon1.jpg",
      "/images/products/roland-cajon2.jpg",
    ],
    description:
      "Digitális cajon, számos hangmintával, ideális stúdióba és színpadra.",
    specs: {
      Hangminták: "150",
      Súly: "12kg",
      Méret: "40x40x60cm",
      Szín: "Natúr",
    },
  },
];
