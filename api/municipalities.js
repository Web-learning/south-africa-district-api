
// South Africa District + Metropolitan Municipalities (52 total)

const municipalities = [
  // =========================
  // WESTERN CAPE (5)
  // =========================
  {
    code: "CPT",
    name: "City of Cape Town",
    province: "Western Cape",
    type: "Metropolitan Municipality",
    seat: "Cape Town",
    wikidata: "Q210193"
  },
  {
    code: "DC1",
    name: "West Coast District Municipality",
    province: "Western Cape",
    type: "District Municipality",
    seat: "Moorreesburg",
    wikidata: "Q612209"
  },
  {
    code: "DC2",
    name: "Cape Winelands District Municipality",
    province: "Western Cape",
    type: "District Municipality",
    seat: "Worcester",
    wikidata: "Q503488"
  },
  {
    code: "DC3",
    name: "Overberg District Municipality",
    province: "Western Cape",
    type: "District Municipality",
    seat: "Bredasdorp",
    wikidata: "Q1063906"
  },
  {
    code: "DC4",
    name: "Garden Route District Municipality",
    province: "Western Cape",
    type: "District Municipality",
    seat: "George",
    wikidata: "Q1063895"
  },
  {
    code: "DC5",
    name: "Central Karoo District Municipality",
    province: "Western Cape",
    type: "District Municipality",
    seat: "Beaufort West",
    wikidata: "Q1063908"
  },

  // =========================
  // EASTERN CAPE (6)
  // =========================
  {
    code: "BUF",
    name: "Buffalo City Metropolitan Municipality",
    province: "Eastern Cape",
    type: "Metropolitan Municipality",
    seat: "East London",
    wikidata: "Q483157"
  },
  {
    code: "NMB",
    name: "Nelson Mandela Bay Metropolitan Municipality",
    province: "Eastern Cape",
    type: "Metropolitan Municipality",
    seat: "Gqeberha",
    wikidata: "Q503472"
  },
  {
    code: "DC10",
    name: "Sarah Baartman District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "Gqeberha",
    wikidata: "Q612215"
  },
  {
    code: "DC12",
    name: "Amathole District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "East London",
    wikidata: "Q476778"
  },
  {
    code: "DC13",
    name: "Chris Hani District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "Komani",
    wikidata: "Q1063901"
  },
  {
    code: "DC14",
    name: "Joe Gqabi District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "Barkly East",
    wikidata: "Q1063903"
  },
  {
    code: "DC15",
    name: "OR Tambo District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "Mthatha",
    wikidata: "Q1063904"
  },
  {
    code: "DC44",
    name: "Alfred Nzo District Municipality",
    province: "Eastern Cape",
    type: "District Municipality",
    seat: "Mount Ayliff",
    wikidata: "Q1063897"
  },

  // =========================
  // FREE STATE (5)
  // =========================
  {
    code: "MAN",
    name: "Mangaung Metropolitan Municipality",
    province: "Free State",
    type: "Metropolitan Municipality",
    seat: "Bloemfontein",
    wikidata: "Q503474"
  },
  {
    code: "DC16",
    name: "Xhariep District Municipality",
    province: "Free State",
    type: "District Municipality",
    seat: "Trompsburg",
    wikidata: "Q1063910"
  },
  {
    code: "DC18",
    name: "Lejweleputswa District Municipality",
    province: "Free State",
    type: "District Municipality",
    seat: "Welkom",
    wikidata: "Q1063906"
  },
  {
    code: "DC19",
    name: "Thabo Mofutsanyana District Municipality",
    province: "Free State",
    type: "District Municipality",
    seat: "Phuthaditjhaba",
    wikidata: "Q1063912"
  },
  {
    code: "DC20",
    name: "Fezile Dabi District Municipality",
    province: "Free State",
    type: "District Municipality",
    seat: "Sasolburg",
    wikidata: "Q1063902"
  },

  // =========================
  // GAUTENG (3)
  // =========================
  {
    code: "JHB",
    name: "City of Johannesburg",
    province: "Gauteng",
    type: "Metropolitan Municipality",
    seat: "Johannesburg",
    wikidata: "Q503490"
  },
  {
    code: "TSH",
    name: "City of Tshwane",
    province: "Gauteng",
    type: "Metropolitan Municipality",
    seat: "Pretoria",
    wikidata: "Q503491"
  },
  {
    code: "EKU",
    name: "Ekurhuleni Metropolitan Municipality",
    province: "Gauteng",
    type: "Metropolitan Municipality",
    seat: "Germiston",
    wikidata: "Q503492"
  },

  // =========================
  // KWAZULU-NATAL (11)
  // =========================
  {
    code: "ETH",
    name: "eThekwini Metropolitan Municipality",
    province: "KwaZulu-Natal",
    type: "Metropolitan Municipality",
    seat: "Durban",
    wikidata: "Q505315"
  },
  {
    code: "DC21",
    name: "Ugu District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Port Shepstone",
    wikidata: "Q1063914"
  },
  {
    code: "DC22",
    name: "uMgungundlovu District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Pietermaritzburg",
    wikidata: "Q311803"
  },
  {
    code: "DC23",
    name: "Uthukela District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Ladysmith",
    wikidata: "Q1063916"
  },
  {
    code: "DC24",
    name: "Umzinyathi District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Dundee",
    wikidata: "Q1063918"
  },
  {
    code: "DC25",
    name: "Amajuba District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Newcastle",
    wikidata: "Q306943"
  },
  {
    code: "DC26",
    name: "Zululand District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Ulundi",
    wikidata: "Q1063920"
  },
  {
    code: "DC27",
    name: "Umkhanyakude District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Mkuze",
    wikidata: "Q1063922"
  },
  {
    code: "DC28",
    name: "Uthungulu District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Richards Bay",
    wikidata: "Q1063924"
  },
  {
    code: "DC29",
    name: "iLembe District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "KwaDukuza",
    wikidata: "Q1063926"
  },
  {
    code: "DC43",
    name: "Harry Gwala District Municipality",
    province: "KwaZulu-Natal",
    type: "District Municipality",
    seat: "Ixopo",
    wikidata: "Q1063928"
  },

  // =========================
  // LIMPOPO (5)
  // =========================
  {
    code: "DC33",
    name: "Mopani District Municipality",
    province: "Limpopo",
    type: "District Municipality",
    seat: "Giyani",
    wikidata: "Q1063930"
  },
  {
    code: "DC34",
    name: "Vhembe District Municipality",
    province: "Limpopo",
    type: "District Municipality",
    seat: "Thohoyandou",
    wikidata: "Q1063932"
  },
  {
    code: "DC35",
    name: "Capricorn District Municipality",
    province: "Limpopo",
    type: "District Municipality",
    seat: "Polokwane",
    wikidata: "Q1063934"
  },
  {
    code: "DC36",
    name: "Waterberg District Municipality",
    province: "Limpopo",
    type: "District Municipality",
    seat: "Modimolle",
    wikidata: "Q1063936"
  },
  {
    code: "DC47",
    name: "Sekhukhune District Municipality",
    province: "Limpopo",
    type: "District Municipality",
    seat: "Groblersdal",
    wikidata: "Q1063938"
  },

  // =========================
  // MPUMALANGA (3)
  // =========================
  {
    code: "DC30",
    name: "Gert Sibande District Municipality",
    province: "Mpumalanga",
    type: "District Municipality",
    seat: "Secunda",
    wikidata: "Q1063940"
  },
  {
    code: "DC31",
    name: "Nkangala District Municipality",
    province: "Mpumalanga",
    type: "District Municipality",
    seat: "Middelburg",
    wikidata: "Q1063942"
  },
  {
    code: "DC32",
    name: "Ehlanzeni District Municipality",
    province: "Mpumalanga",
    type: "District Municipality",
    seat: "Mbombela",
    wikidata: "Q1063944"
  },

  // =========================
  // NORTH WEST (4)
  // =========================
  {
    code: "DC37",
    name: "Bojanala Platinum District Municipality",
    province: "North West",
    type: "District Municipality",
    seat: "Rustenburg",
    wikidata: "Q1063946"
  },
  {
    code: "DC38",
    name: "Ngaka Modiri Molema District Municipality",
    province: "North West",
    type: "District Municipality",
    seat: "Mahikeng",
    wikidata: "Q1063948"
  },
  {
    code: "DC39",
    name: "Dr Ruth Segomotsi Mompati District Municipality",
    province: "North West",
    type: "District Municipality",
    seat: "Vryburg",
    wikidata: "Q1063950"
  },
  {
    code: "DC40",
    name: "Dr Kenneth Kaunda District Municipality",
    province: "North West",
    type: "District Municipality",
    seat: "Klerksdorp",
    wikidata: "Q1063952"
  },

  // =========================
  // NORTHERN CAPE (5)
  // =========================
  {
    code: "NC1",
    name: "Z.F. Mgcawu District Municipality",
    province: "Northern Cape",
    type: "District Municipality",
    seat: "Upington",
    wikidata: "Q1063954"
  },
  {
    code: "NC2",
    name: "Pixley ka Seme District Municipality",
    province: "Northern Cape",
    type: "District Municipality",
    seat: "De Aar",
    wikidata: "Q1063956"
  },
  {
    code: "NC3",
    name: "Namakwa District Municipality",
    province: "Northern Cape",
    type: "District Municipality",
    seat: "Springbok",
    wikidata: "Q1063958"
  },
  {
    code: "NC4",
    name: "Frances Baard District Municipality",
    province: "Northern Cape",
    type: "District Municipality",
    seat: "Kimberley",
    wikidata: "Q1063960"
  },
  {
    code: "NC5",
    name: "John Taolo Gaetsewe District Municipality",
    province: "Northern Cape",
    type: "District Municipality",
    seat: "Kuruman",
    wikidata: "Q1063962"
  }
];

// -------------------------
// FAST LOOKUP MAPS
// -------------------------
const byCode = new Map();
const byName = new Map();

municipalities.forEach(m => {
  byCode.set(m.code, m);
  byName.set(m.name.toLowerCase(), m);
});

// -------------------------
// EXPORTS
// -------------------------
export default {
  all: municipalities,
  byCode: (code) => byCode.get(code),
  byName: (name) => byName.get(name.toLowerCase())
};
