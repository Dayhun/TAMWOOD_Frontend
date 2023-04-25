// import GalleryData from "../data/gallery.json";
// import StudentData from "../data/students.json";
// import Student from "../../../../05-jQuery/Class-02/educationSystem/js/student";

const GalleryData = [
    {
        id: 1,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "mrohlfing0",
        title: "Lotstring",
    },
    {
        id: 2,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "msaxelby1",
        title: "Aerified",
    },
    {
        id: 3,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "lstriker2",
        title: "Sonsing",
    },
    {
        id: 4,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "bvillaron3",
        title: "Home Ing",
    },
    {
        id: 5,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "hspellsworth4",
        title: "Vagram",
    },
    {
        id: 6,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "osevern5",
        title: "Keylex",
    },
    {
        id: 7,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "khise6",
        title: "Tres-Zap",
    },
    {
        id: 8,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "mfetherston7",
        title: "Andalax",
    },
    {
        id: 9,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "wfremantle8",
        title: "Y-find",
    },
    {
        id: 10,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "fyegorshin9",
        title: "Toughjoyfax",
    },
    {
        id: 11,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "mkivelhana",
        title: "Lotlux",
    },
    {
        id: 12,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "estuchberyb",
        title: "Konklab",
    },
    {
        id: 13,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "amennithorpc",
        title: "Holdlamis",
    },
    {
        id: 14,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "jgiraudotd",
        title: "Fintone",
    },
    {
        id: 15,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "rbayntone",
        title: "Latlux",
    },
    {
        id: 16,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "mrilstonf",
        title: "Wrapsafe",
    },
    {
        id: 17,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "lnaultyg",
        title: "Y-Solowarm",
    },
    {
        id: 18,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "nsandeverh",
        title: "Namfix",
    },
    {
        id: 19,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "elacki",
        title: "Lotlux",
    },
    {
        id: 20,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "lbarneveldj",
        title: "Cookley",
    },
    {
        id: 21,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "dsproulk",
        title: "Regrant",
    },
    {
        id: 22,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "gpietzl",
        title: "Cookley",
    },
    {
        id: 23,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "blangfatm",
        title: "Fintone",
    },
    {
        id: 24,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "nkivelhann",
        title: "Greenlam",
    },
    {
        id: 25,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "wstaveleyo",
        title: "Zoolab",
    },
    {
        id: 26,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "jhadnyp",
        title: "Bitwolf",
    },
    {
        id: 27,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "rtallowq",
        title: "Zaam-Dox",
    },
    {
        id: 28,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "lsleathr",
        title: "Voltsillam",
    },
    {
        id: 29,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "lgimblets",
        title: "Regrant",
    },
    {
        id: 30,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "mbankhurstt",
        title: "Quo Lux",
    },
    {
        id: 31,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "ameiru",
        title: "Lotstring",
    },
    {
        id: 32,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "sbillaniev",
        title: "Holdlamis",
    },
    {
        id: 33,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "abelisonw",
        title: "Lotstring",
    },
    {
        id: 34,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "osharpleyx",
        title: "Tempsoft",
    },
    {
        id: 35,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "mcattericky",
        title: "Latlux",
    },
    {
        id: 36,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "fculyz",
        title: "Lotstring",
    },
    {
        id: 37,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "ocandish10",
        title: "Cardguard",
    },
    {
        id: 38,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "srhodef11",
        title: "Ventosanzap",
    },
    {
        id: 39,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "gitzhak12",
        title: "Zaam-Dox",
    },
    {
        id: 40,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "hproske13",
        title: "Keylex",
    },
    {
        id: 41,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "vpimlock14",
        title: "Transcof",
    },
    {
        id: 42,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "eunger15",
        title: "Domainer",
    },
    {
        id: 43,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "atschierse16",
        title: "Pannier",
    },
    {
        id: 44,
        src: "http://dummyimage.com/200x200.png/cc0000/ffffff",
        alt: "elattin17",
        title: "Tres-Zap",
    },
    {
        id: 45,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "totierney18",
        title: "Sonair",
    },
    {
        id: 46,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "dpeasey19",
        title: "Span",
    },
    {
        id: 47,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "cserrurier1a",
        title: "Aerified",
    },
    {
        id: 48,
        src: "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        alt: "rhutchison1b",
        title: "Fintone",
    },
    {
        id: 49,
        src: "http://dummyimage.com/200x200.png/dddddd/000000",
        alt: "fbelliss1c",
        title: "Holdlamis",
    },
    {
        id: 50,
        src: "http://dummyimage.com/200x200.png/ff4444/ffffff",
        alt: "tlaws1d",
        title: "Fixflex",
    },
];

const StudentData = [
    {
        id: 1,
        fullName: "Francyne Cressingham",
        coursework: 5,
        midTerm: 8,
        finalExam: 6,
        finalProject: 4,
    },
    {
        id: 2,
        fullName: "Olvan Seagrove",
        coursework: 8,
        midTerm: 5,
        finalExam: 9,
        finalProject: 7,
    },
    {
        id: 3,
        fullName: "Elfreda Squire",
        coursework: 10,
        midTerm: 8,
        finalExam: 5,
        finalProject: 7,
    },
    {
        id: 4,
        fullName: "Alexandros Darben",
        coursework: 9,
        midTerm: 7,
        finalExam: 1,
        finalProject: 10,
    },
    {
        id: 5,
        fullName: "Marice Scrimgeour",
        coursework: 8,
        midTerm: 6,
        finalExam: 4,
        finalProject: 1,
    },
    {
        id: 6,
        fullName: "Udale Pexton",
        coursework: 10,
        midTerm: 3,
        finalExam: 10,
        finalProject: 1,
    },
    {
        id: 7,
        fullName: "Georgi Bleackly",
        coursework: 6,
        midTerm: 5,
        finalExam: 4,
        finalProject: 7,
    },
    {
        id: 8,
        fullName: "Linus Robert",
        coursework: 4,
        midTerm: 4,
        finalExam: 10,
        finalProject: 1,
    },
    {
        id: 9,
        fullName: "Mathias Sullens",
        coursework: 1,
        midTerm: 10,
        finalExam: 2,
        finalProject: 3,
    },
    {
        id: 10,
        fullName: "Corrina Cluitt",
        coursework: 5,
        midTerm: 3,
        finalExam: 1,
        finalProject: 7,
    },
    {
        id: 11,
        fullName: "Nelli Cicconettii",
        coursework: 4,
        midTerm: 9,
        finalExam: 7,
        finalProject: 9,
    },
    {
        id: 12,
        fullName: "Jasmina Cacacie",
        coursework: 3,
        midTerm: 7,
        finalExam: 10,
        finalProject: 8,
    },
    {
        id: 13,
        fullName: "Meryl Shewon",
        coursework: 1,
        midTerm: 4,
        finalExam: 2,
        finalProject: 5,
    },
    {
        id: 14,
        fullName: "Bruis Mocher",
        coursework: 2,
        midTerm: 4,
        finalExam: 10,
        finalProject: 4,
    },
    {
        id: 15,
        fullName: "Rasla Eliot",
        coursework: 2,
        midTerm: 1,
        finalExam: 10,
        finalProject: 2,
    },
    {
        id: 16,
        fullName: "Loni Bernt",
        coursework: 2,
        midTerm: 4,
        finalExam: 5,
        finalProject: 7,
    },
    {
        id: 17,
        fullName: "Lucian Dilkes",
        coursework: 8,
        midTerm: 9,
        finalExam: 8,
        finalProject: 1,
    },
    {
        id: 18,
        fullName: "Arlen Yegorovnin",
        coursework: 3,
        midTerm: 6,
        finalExam: 4,
        finalProject: 5,
    },
    {
        id: 19,
        fullName: "Ike Crehan",
        coursework: 3,
        midTerm: 10,
        finalExam: 8,
        finalProject: 7,
    },
    {
        id: 20,
        fullName: "Philipa Christol",
        coursework: 4,
        midTerm: 2,
        finalExam: 10,
        finalProject: 4,
    },
    {
        id: 21,
        fullName: "Ambur Hulks",
        coursework: 1,
        midTerm: 8,
        finalExam: 2,
        finalProject: 5,
    },
    {
        id: 22,
        fullName: "Percy Divisek",
        coursework: 1,
        midTerm: 1,
        finalExam: 3,
        finalProject: 6,
    },
    {
        id: 23,
        fullName: "Jennette Phorsby",
        coursework: 3,
        midTerm: 6,
        finalExam: 6,
        finalProject: 7,
    },
    {
        id: 24,
        fullName: "Margaretta Sitlinton",
        coursework: 4,
        midTerm: 3,
        finalExam: 9,
        finalProject: 10,
    },
    {
        id: 25,
        fullName: "Wren Petheridge",
        coursework: 1,
        midTerm: 2,
        finalExam: 5,
        finalProject: 5,
    },
    {
        id: 26,
        fullName: "Kelley Spondley",
        coursework: 4,
        midTerm: 7,
        finalExam: 2,
        finalProject: 9,
    },
    {
        id: 27,
        fullName: "Netta Eck",
        coursework: 8,
        midTerm: 8,
        finalExam: 7,
        finalProject: 8,
    },
    {
        id: 28,
        fullName: "Melesa Bastock",
        coursework: 3,
        midTerm: 5,
        finalExam: 9,
        finalProject: 1,
    },
    {
        id: 29,
        fullName: "Jennee Bonsul",
        coursework: 9,
        midTerm: 2,
        finalExam: 3,
        finalProject: 1,
    },
    {
        id: 30,
        fullName: "Samson Sellwood",
        coursework: 3,
        midTerm: 1,
        finalExam: 4,
        finalProject: 3,
    },
    {
        id: 31,
        fullName: "Bertine Jandak",
        coursework: 6,
        midTerm: 9,
        finalExam: 5,
        finalProject: 10,
    },
    {
        id: 32,
        fullName: "Mac Trehearne",
        coursework: 8,
        midTerm: 10,
        finalExam: 7,
        finalProject: 4,
    },
    {
        id: 33,
        fullName: "Maddie Coulbeck",
        coursework: 9,
        midTerm: 5,
        finalExam: 9,
        finalProject: 4,
    },
    {
        id: 34,
        fullName: "Nev Girardetti",
        coursework: 5,
        midTerm: 10,
        finalExam: 3,
        finalProject: 1,
    },
    {
        id: 35,
        fullName: "Andrew Dineges",
        coursework: 6,
        midTerm: 6,
        finalExam: 2,
        finalProject: 8,
    },
    {
        id: 36,
        fullName: "Elberta Martini",
        coursework: 4,
        midTerm: 6,
        finalExam: 10,
        finalProject: 3,
    },
    {
        id: 37,
        fullName: "Vina Suche",
        coursework: 3,
        midTerm: 9,
        finalExam: 4,
        finalProject: 7,
    },
    {
        id: 38,
        fullName: "Cassaundra Learmond",
        coursework: 8,
        midTerm: 1,
        finalExam: 7,
        finalProject: 2,
    },
    {
        id: 39,
        fullName: "Melly Banck",
        coursework: 10,
        midTerm: 5,
        finalExam: 4,
        finalProject: 2,
    },
    {
        id: 40,
        fullName: "Eldon Compford",
        coursework: 2,
        midTerm: 9,
        finalExam: 4,
        finalProject: 3,
    },
    {
        id: 41,
        fullName: "Zelda Gurko",
        coursework: 2,
        midTerm: 9,
        finalExam: 1,
        finalProject: 3,
    },
    {
        id: 42,
        fullName: "Ric Noel",
        coursework: 5,
        midTerm: 5,
        finalExam: 8,
        finalProject: 2,
    },
    {
        id: 43,
        fullName: "Aurie Keyser",
        coursework: 3,
        midTerm: 9,
        finalExam: 9,
        finalProject: 10,
    },
    {
        id: 44,
        fullName: "Sarena Gareisr",
        coursework: 9,
        midTerm: 9,
        finalExam: 9,
        finalProject: 6,
    },
    {
        id: 45,
        fullName: "Ranice Wedmore.",
        coursework: 1,
        midTerm: 7,
        finalExam: 6,
        finalProject: 4,
    },
    {
        id: 46,
        fullName: "Elvyn Chillingsworth",
        coursework: 9,
        midTerm: 5,
        finalExam: 2,
        finalProject: 2,
    },
    {
        id: 47,
        fullName: "Fraze Witchalls",
        coursework: 1,
        midTerm: 8,
        finalExam: 6,
        finalProject: 10,
    },
    {
        id: 48,
        fullName: "Nerissa Trotter",
        coursework: 1,
        midTerm: 6,
        finalExam: 9,
        finalProject: 1,
    },
    {
        id: 49,
        fullName: "Claudetta Stother",
        coursework: 10,
        midTerm: 1,
        finalExam: 8,
        finalProject: 3,
    },
    {
        id: 50,
        fullName: "Vikky Halls",
        coursework: 5,
        midTerm: 7,
        finalExam: 10,
        finalProject: 4,
    },
    {
        id: 51,
        fullName: "Jania Oke",
        coursework: 7,
        midTerm: 7,
        finalExam: 6,
        finalProject: 1,
    },
    {
        id: 52,
        fullName: "Alva Blanc",
        coursework: 10,
        midTerm: 1,
        finalExam: 1,
        finalProject: 4,
    },
    {
        id: 53,
        fullName: "Odessa Lardeur",
        coursework: 3,
        midTerm: 1,
        finalExam: 7,
        finalProject: 7,
    },
    {
        id: 54,
        fullName: "Rivalee Frammingham",
        coursework: 6,
        midTerm: 6,
        finalExam: 5,
        finalProject: 2,
    },
    {
        id: 55,
        fullName: "Stoddard Bineham",
        coursework: 10,
        midTerm: 4,
        finalExam: 6,
        finalProject: 8,
    },
    {
        id: 56,
        fullName: "Lucina Dudenie",
        coursework: 1,
        midTerm: 8,
        finalExam: 8,
        finalProject: 5,
    },
    {
        id: 57,
        fullName: "West Sellan",
        coursework: 5,
        midTerm: 10,
        finalExam: 10,
        finalProject: 6,
    },
    {
        id: 58,
        fullName: "Neel Lukash",
        coursework: 9,
        midTerm: 8,
        finalExam: 6,
        finalProject: 3,
    },
    {
        id: 59,
        fullName: "Ludovika Kubatsch",
        coursework: 7,
        midTerm: 8,
        finalExam: 9,
        finalProject: 1,
    },
    {
        id: 60,
        fullName: "Way McQuirter",
        coursework: 4,
        midTerm: 6,
        finalExam: 6,
        finalProject: 5,
    },
    {
        id: 61,
        fullName: "Lebbie Bosher",
        coursework: 8,
        midTerm: 8,
        finalExam: 3,
        finalProject: 9,
    },
    {
        id: 62,
        fullName: "Westleigh Dunnet",
        coursework: 1,
        midTerm: 1,
        finalExam: 2,
        finalProject: 1,
    },
    {
        id: 63,
        fullName: "Paolo Aireton",
        coursework: 4,
        midTerm: 5,
        finalExam: 6,
        finalProject: 5,
    },
    {
        id: 64,
        fullName: "Doroteya Leap",
        coursework: 9,
        midTerm: 1,
        finalExam: 7,
        finalProject: 1,
    },
    {
        id: 65,
        fullName: "Cassondra Hatterslay",
        coursework: 7,
        midTerm: 7,
        finalExam: 4,
        finalProject: 2,
    },
    {
        id: 66,
        fullName: "Perice Ferdinand",
        coursework: 10,
        midTerm: 1,
        finalExam: 7,
        finalProject: 7,
    },
    {
        id: 67,
        fullName: "Roxi Greendale",
        coursework: 6,
        midTerm: 9,
        finalExam: 6,
        finalProject: 1,
    },
    {
        id: 68,
        fullName: "Peggi Greenstock",
        coursework: 8,
        midTerm: 1,
        finalExam: 4,
        finalProject: 2,
    },
    {
        id: 69,
        fullName: "Roi Grisley",
        coursework: 10,
        midTerm: 8,
        finalExam: 2,
        finalProject: 8,
    },
    {
        id: 70,
        fullName: "Shirleen Jeffels",
        coursework: 3,
        midTerm: 6,
        finalExam: 10,
        finalProject: 8,
    },
    {
        id: 71,
        fullName: "Joshuah Biernat",
        coursework: 4,
        midTerm: 10,
        finalExam: 1,
        finalProject: 5,
    },
    {
        id: 72,
        fullName: "Joane Garratt",
        coursework: 1,
        midTerm: 10,
        finalExam: 5,
        finalProject: 5,
    },
    {
        id: 73,
        fullName: "Massimiliano Parrett",
        coursework: 6,
        midTerm: 8,
        finalExam: 1,
        finalProject: 7,
    },
    {
        id: 74,
        fullName: "Gilberta McCandless",
        coursework: 1,
        midTerm: 10,
        finalExam: 10,
        finalProject: 5,
    },
    {
        id: 75,
        fullName: "Vince Allpress",
        coursework: 7,
        midTerm: 8,
        finalExam: 2,
        finalProject: 5,
    },
    {
        id: 76,
        fullName: "Vita Labdon",
        coursework: 5,
        midTerm: 9,
        finalExam: 7,
        finalProject: 6,
    },
    {
        id: 77,
        fullName: "Sheba Antcliff",
        coursework: 1,
        midTerm: 6,
        finalExam: 4,
        finalProject: 1,
    },
    {
        id: 78,
        fullName: "Ruperto Llorente",
        coursework: 1,
        midTerm: 6,
        finalExam: 6,
        finalProject: 8,
    },
    {
        id: 79,
        fullName: "Bradley Borg-Bartolo",
        coursework: 6,
        midTerm: 9,
        finalExam: 2,
        finalProject: 2,
    },
    {
        id: 80,
        fullName: "Gil Spark",
        coursework: 2,
        midTerm: 7,
        finalExam: 6,
        finalProject: 10,
    },
    {
        id: 81,
        fullName: "Toby Purnell",
        coursework: 2,
        midTerm: 8,
        finalExam: 9,
        finalProject: 7,
    },
    {
        id: 82,
        fullName: "Cyndi Hentzeler",
        coursework: 9,
        midTerm: 3,
        finalExam: 10,
        finalProject: 2,
    },
    {
        id: 83,
        fullName: "Sigismund Mohan",
        coursework: 7,
        midTerm: 4,
        finalExam: 4,
        finalProject: 5,
    },
    {
        id: 84,
        fullName: "Eugine Sainer",
        coursework: 9,
        midTerm: 8,
        finalExam: 8,
        finalProject: 4,
    },
    {
        id: 85,
        fullName: "Bel Heakins",
        coursework: 8,
        midTerm: 9,
        finalExam: 10,
        finalProject: 4,
    },
    {
        id: 86,
        fullName: "Koral Yakolev",
        coursework: 6,
        midTerm: 2,
        finalExam: 2,
        finalProject: 5,
    },
    {
        id: 87,
        fullName: "Clay Edgeson",
        coursework: 3,
        midTerm: 6,
        finalExam: 10,
        finalProject: 9,
    },
    {
        id: 88,
        fullName: "Benny Dincke",
        coursework: 2,
        midTerm: 5,
        finalExam: 5,
        finalProject: 7,
    },
    {
        id: 89,
        fullName: "Carlee Vala",
        coursework: 9,
        midTerm: 2,
        finalExam: 5,
        finalProject: 4,
    },
    {
        id: 90,
        fullName: "Noni Doble",
        coursework: 1,
        midTerm: 7,
        finalExam: 4,
        finalProject: 10,
    },
    {
        id: 91,
        fullName: "Artemis Barck",
        coursework: 3,
        midTerm: 3,
        finalExam: 1,
        finalProject: 7,
    },
    {
        id: 92,
        fullName: "Marthe Jorczyk",
        coursework: 7,
        midTerm: 4,
        finalExam: 8,
        finalProject: 7,
    },
    {
        id: 93,
        fullName: "Alden Ciccerale",
        coursework: 3,
        midTerm: 3,
        finalExam: 9,
        finalProject: 1,
    },
    {
        id: 94,
        fullName: "Fair Warne",
        coursework: 4,
        midTerm: 9,
        finalExam: 6,
        finalProject: 2,
    },
    {
        id: 95,
        fullName: "Paulita Roan",
        coursework: 2,
        midTerm: 10,
        finalExam: 1,
        finalProject: 5,
    },
    {
        id: 96,
        fullName: "Caesar Fleis",
        coursework: 4,
        midTerm: 3,
        finalExam: 8,
        finalProject: 3,
    },
    {
        id: 97,
        fullName: "Dennet Ceney",
        coursework: 6,
        midTerm: 3,
        finalExam: 5,
        finalProject: 1,
    },
    {
        id: 98,
        fullName: "Niles Pyson",
        coursework: 9,
        midTerm: 9,
        finalExam: 7,
        finalProject: 2,
    },
    {
        id: 99,
        fullName: "Jerrine Mangin",
        coursework: 7,
        midTerm: 4,
        finalExam: 2,
        finalProject: 4,
    },
    {
        id: 100,
        fullName: "Ariela Riding",
        coursework: 5,
        midTerm: 9,
        finalExam: 6,
        finalProject: 9,
    },
];

function Title(props) {
    return <h2>{props.title}</h2>;
}

function Gallery(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <h4>{props.title}</h4>
            </figcaption>
        </figure>
    );
}

function GalleryPage() {
    return (
        <section id="gallery">
            <Title title="GalleryPage" />
            <section className="galleryPic">
                {GalleryData.map((gallery) => (
                    <Gallery
                        src={gallery.src}
                        alt={gallery.alt}
                        title={gallery.title}
                        key={gallery.id}
                    />
                ))}
            </section>
        </section>
    );
}

function TablePoper(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Full Name</td>
                    <td>Coursework</td>
                    <td>midTerm</td>
                    <td>finalExam</td>
                    <td>finalProject</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                {StudentData.map((student) => (
                    <StudentTr
                        id={student.id}
                        fullName={student.fullName}
                        coursework={student.coursework}
                        midTerm={student.midTerm}
                        finalExam={student.finalExam}
                        finalProject={student.finalProject}
                        key={student.id}
                    />
                ))}
            </tbody>
        </table>
    );
}

function StudentTr(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.fullName}</td>
            <td>{props.coursework}</td>
            <td>{props.midTerm}</td>
            <td>{props.finalExam}</td>
            <td>{props.finalProject}</td>
        </tr>
    );
}
function TablePage() {
    return (
        <section>
            <Title title="TablePage" />
            <TablePoper />
        </section>
    );
}

function App() {
    return (
        <React.Fragment>
            <GalleryPage />
            <TablePage />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
