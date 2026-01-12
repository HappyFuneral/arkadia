// src/config/categories.ts

export type Category = {
  name: string;
  categoryCode: string;
  image?: string; // Új mező a képhez
  children?: Category[];
};

export const categories: Category[] = [
  {
    name: "Gitár / Pengetős",
    categoryCode: "guitar",
    image: "/images/categories/guitar.jpg",
    children: [
      {
        name: "Elektromos gitárok",
        categoryCode: "elektromos-gitar",
        image: "/images/categories/elektromos-gitarok.jpg",
        children: [
          {
            name: "6 húros",
            categoryCode: "elektromos-6",
            image: "/images/categories/elektromos-6.jpg",
          },
          {
            name: "7 húros",
            categoryCode: "elektromos-7",
            image: "/images/categories/elektromos-7.jpg",
          },
          {
            name: "8 húros",
            categoryCode: "elektromos-8",
            image: "/images/categories/elektromos-8.jpg",
          },
          {
            name: "Balkezes",
            categoryCode: "elektromos-balkezes",
            image: "/images/categories/elektromos-balkezes.jpg",
          },
          {
            name: "Gyerekgitár",
            categoryCode: "elektromos-gyerek",
            image: "/images/categories/elektromos-gyerek.jpg",
          },
          {
            name: "Gitárszett",
            categoryCode: "elektromos-szett",
            image: "/images/categories/elektromos-szett.jpg",
          },
        ],
      },
      {
        name: "Akusztikus gitárok",
        categoryCode: "akusztikus-gitarok",
        image: "/images/categories/akusztikus-gitarok.jpg",
        children: [
          {
            name: "Szettek",
            categoryCode: "akusztikus-szett",
            image: "/images/categories/akusztikus-szett.jpg",
          },
          {
            name: "Elektroakusztikus",
            categoryCode: "elektroakusztikus",
            image: "/images/categories/elektroakusztikus.jpg",
          },
        ],
      },
      {
        name: "Basszusgitárok",
        categoryCode: "basszus-gitarok",
        image: "/images/categories/basszus-gitarok.jpg",
      },
    ],
  },

  {
    name: "Erősítők & Effektek",
    categoryCode: "amps-effects",
    image: "/images/categories/amps-effects.jpg",
    children: [
      {
        name: "Gitár erősítők",
        categoryCode: "gitar-erositok",
        image: "/images/categories/gitar-erositok.jpg",
        children: [
          {
            name: "Fej",
            categoryCode: "gitar-fej",
            image: "/images/categories/gitar-fej.jpg",
          },
          {
            name: "Kombó",
            categoryCode: "gitar-kombo",
            image: "/images/categories/gitar-kombo.jpg",
          },
          {
            name: "Láda",
            categoryCode: "gitar-lada",
            image: "/images/categories/gitar-lada.jpg",
          },
          {
            name: "Fejhallgató erősítő",
            categoryCode: "fejhallgato-erosito",
            image: "/images/categories/fejhallgato-erosito.jpg",
          },
        ],
      },
      {
        name: "Gitár effektek",
        categoryCode: "gitar-effektek",
        image: "/images/categories/gitar-effektek.jpg",
      },
    ],
  },

  {
    name: "Kiegészítők",
    categoryCode: "kiegeszitok",
    image: "/images/categories/kiegeszitok.jpg",
    children: [
      {
        name: "Gitárhúrok",
        categoryCode: "gitarhurok",
        image: "/images/categories/gitarhurok.jpg",
      },
      {
        name: "Ajándékok",
        categoryCode: "ajandek",
        image: "/images/categories/ajandek.jpg",
      },
    ],
  },

  // Új kategóriák
  {
    name: "Stúdió & Hangtechnika",
    categoryCode: "studio",
    image: "/images/categories/studio.jpg",
    children: [
      {
        name: "Mikrofonok",
        categoryCode: "mikrofon",
        image: "/images/categories/mikrofon.jpg",
      },
      {
        name: "Hangfalak & Erősítők",
        categoryCode: "hangfal-erosito",
        image: "/images/categories/hangfal-erosito.jpg",
      },
      {
        name: "Fejhallgatók",
        categoryCode: "fejhallgato",
        image: "/images/categories/fejhallgato.jpg",
      },
      {
        name: "Keverők & Interfészek",
        categoryCode: "kevero-interfesz",
        image: "/images/categories/kevero-interfesz.jpg",
      },
    ],
  },

  {
    name: "Ritmus / Dob",
    categoryCode: "ritmus-dob",
    image: "/images/categories/ritmus-dob.jpg",
    children: [
      {
        name: "Dobok",
        categoryCode: "dobok",
        image: "/images/categories/dobok.jpg",
      },
      {
        name: "Cajon & Percussion",
        categoryCode: "cajon-perc",
        image: "/images/categories/cajon-perc.jpg",
      },
      {
        name: "Cintányérok",
        categoryCode: "cintanyer",
        image: "/images/categories/cintanyer.jpg",
      },
    ],
  },

  {
    name: "Billentyűs hangszerek",
    categoryCode: "billentyus",
    image: "/images/categories/billentyus.jpg",
    children: [
      {
        name: "Szintetizátor",
        categoryCode: "szintetizator",
        image: "/images/categories/szintetizator.jpg",
      },
      {
        name: "Digitális zongora",
        categoryCode: "digitalis-zongora",
        image: "/images/categories/digitalis-zongora.jpg",
      },
      {
        name: "MIDI kontroller",
        categoryCode: "midi-kontroller",
        image: "/images/categories/midi-kontroller.jpg",
      },
      {
        name: "Kiegészítők",
        categoryCode: "billentyus-kiegeszitok",
        image: "/images/categories/billentyus-kiegeszitok.jpg",
      },
    ],
  },

  {
    name: "Vonós hangszerek",
    categoryCode: "vonos",
    image: "/images/categories/vonos.jpg",
    children: [
      {
        name: "Hegedű",
        categoryCode: "hegedu",
        image: "/images/categories/hegedu.jpg",
      },
      {
        name: "Brácsa",
        categoryCode: "bracsa",
        image: "/images/categories/bracsa.jpg",
      },
      {
        name: "Cselló",
        categoryCode: "cello",
        image: "/images/categories/cello.jpg",
      },
      {
        name: "Nagybőgő",
        categoryCode: "nagybogo",
        image: "/images/categories/nagybogo.jpg",
      },
    ],
  },
];
