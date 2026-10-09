/**
 * The Relic Assemblage of the Sopara Stupa
 * Excavated from the central stone coffer in 1882.
 * Currently housed at: The Asiatic Society of Mumbai (Town Hall, Fort, Mumbai).
 * Note: These objects are NOT located on the open archaeological site today.
 */

export const RELIC_ASSEMBLAGE = [
  {
    id: "obj-stone-coffer",
    name: "The Stone Coffer (Chamber Receptacle)",
    marathiName: "पाषाण पेटी (प्रस्तर मंजूषा)",
    category: "Structural Reliquary",
    material: "Yellow-grey trachytic stone (basaltic / local volcanic matrix)",
    dimensionsHistorical: "Approx. 2 ft 6 in diameter, 2 ft height (two pieces: vessel & lid)",
    findContext: "Deposited centrally within the solid brick core of the stupa, approx. 12 ft below mound summit",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "Held in institutional archive; displayed during select commemorative exhibitions",
    description: "A finely turned, circular two-piece stone coffer consisting of a heavy lower circular basin and a domed fitting lid with a central knob or rim. The interior was precisely hollowed to contain the concentric casket series and the circular bronze pantheon.",
    evidenceType: "primary",
    sourceId: "indraji-1882",
    details: [
      "Manufactured with stone-turning lathe techniques attested in early Western Indian craftsmanship.",
      "Lid fitted flushly with a grooved flange, preserving the internal cavity free from earth intrusion for centuries."
    ]
  },
  {
    id: "obj-eight-bronzes",
    name: "The Eight Buddhist Bronzes",
    marathiName: "आठ बौद्ध कांस्य मूर्ती",
    category: "Iconographical Pantheon",
    material: "Cast bronze / copper alloy",
    dimensionsHistorical: "Each approx. 3 to 4 inches (7.5 – 10 cm) in height",
    findContext: "Placed inside the stone coffer around the circumference of the inner copper casket, facing inwards toward the centre",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "Catalogued in Asiatic Society of Mumbai holdings",
    description: "Eight small cast metallic figurines representing Buddhist deities. Indraji identified them as Gautama Buddha accompanied by seven Buddhas of the past (Manushi Buddhas: Vipassi, Sikhi, Vessabhu, Kakusandha, Konagamana, Kassapa, and Maitreya, the future Buddha). Modern art historians have noted distinct iconographical mudras including Dhyana, Bhumisparsha, and Dharmachakrapravartana.",
    evidenceType: "primary",
    sourceId: "indraji-1882",
    details: [
      "Arranged circularly in a deliberate mandala-like configuration surrounding the nested caskets.",
      "Show strong artistic affinities with late Satavahana and early post-Satavahana Western Indian metalwork, with close parallels to contemporaneous bronze traditions."
    ]
  },
  {
    id: "obj-nested-caskets",
    name: "The Five Nested Relic Caskets",
    marathiName: "पाच स्तरीय धातू व खडे मंजूषा",
    category: "Nested Reliquaries",
    material: "Five concentric tiers: Copper, Silver, Stone, Crystal, and Gold",
    dimensionsHistorical: "Decreasing sequentially from outer copper vessel (~6 in) to inner gold box (~1 in)",
    findContext: "Positioned at the exact geometric center inside the stone coffer",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "One of the most complete nested reliquary sequences preserved in Indian archaeological history",
    description: "An extraordinary sequence of nested containers designed to protect the sacred core: 1st Outer: Hammered copper vessel; 2nd: Silver urn-shaped casket; 3rd: Stone/schist cylindrical casket; 4th: Polished rock crystal stupa-form casket; 5th Core: Small box of beaten pure gold.",
    evidenceType: "primary",
    sourceId: "asiatic-society",
    nestedLayers: [
      { layer: 1, material: "Copper (Outer Casket)", desc: "Enclosing vessel with cylindrical base and conical lid." },
      { layer: 2, material: "Silver Casket", desc: "Fine repoussé silver container fitting snugly inside the copper vessel." },
      { layer: 3, material: "Stone / Schist Box", desc: "Carefully smoothed dark stone reliquary acting as a mineral barrier." },
      { layer: 4, material: "Rock Crystal Casket", desc: "Carved and polished transparent quartz fashioned into a miniature stupa." },
      { layer: 5, material: "Pure Gold Reliquary", desc: "Innermost capsule of beaten gold containing the corporeal relics (dhatu) and gold foil offerings." }
    ]
  },
  {
    id: "obj-gold-flowers",
    name: "Gold Foil Offerings & Semi-Precious Beads",
    marathiName: "सुवर्ण पुष्पे व मणी",
    category: "Ritual Offerings",
    material: "Embossed gold foil, semi-precious stones (carnelian, amethyst), seed pearls",
    dimensionsHistorical: "Foil stars approx. 0.5 – 1 inch across; beads 2 – 5 mm",
    findContext: "Found inside the silver, crystal, and gold caskets sprinkled among the sacred particles",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "Preserved in specialized institutional archival containers",
    description: "Numerous delicate eight-petaled and six-petaled flowers, starbursts, and rosettes stamped from thin gold sheet. Accompanied by pierced beads of carnelian, banded agate, amethyst, and tiny calcified seed pearls, representing typical Buddhist votive offerings deposited during consecration.",
    evidenceType: "primary",
    sourceId: "indraji-1882",
    details: [
      "Gold stars demonstrate fine Indian goldsmithing repoussé and punch techniques.",
      "Beads reflect the luxury trade goods circulating through the port of Sopara."
    ]
  },
  {
    id: "obj-bowl-fragments",
    name: "Fragments Historically Attributed to the Begging Bowl",
    marathiName: "भिक्षापात्र अवशेष (ऐतिहासिक संदर्भ)",
    category: "Attributed Relic Fragments",
    material: "Glazed / polished earthenware / ceramic sherds",
    dimensionsHistorical: "Multiple small rim and body sherds",
    findContext: "Deposited alongside the stone coffer inside the brick chamber",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "Catalogued historically as 'Buddha's Bowl Fragments'",
    description: "Earthenware sherds discovered in the masonry recess, historically interpreted in 19th-century accounts and institutional records as fragments of the legendary begging bowl (patra) of the historical Buddha. The archive emphasizes that this constitutes a historical devotional attribution rather than an empirically authenticated material connection.",
    evidenceType: "attribution",
    sourceId: "asiatic-society",
    details: [
      "Historical records: The Chinese pilgrims Faxian and Xuanzang recorded the travels of the Buddha's alms bowl across northwestern and northern India.",
      "Scholarly caution: While early excavators and Buddhist devotees associated these pottery sherds with the bowl of the Buddha, modern archaeology classifies them as historically attributed relics requiring non-destructive ceramic petrography."
    ]
  },
  {
    id: "obj-satavahana-coin",
    name: "Silver Coin of Gautamiputra Yajna Sri Satakarni",
    marathiName: "गौतमीपुत्र यज्ञ श्री सातकर्णी याचे रौप्य नाणे",
    category: "Numismatic Evidence",
    material: "Silver (drachm standard)",
    dimensionsHistorical: "Approx. 15 mm diameter, ~2.1 grams",
    findContext: "Discovered within the coffer assemblage during the 1882 clearance",
    custody: "The Asiatic Society of Mumbai, Town Hall, Mumbai",
    accessionNote: "Numismatic collection of the Asiatic Society",
    description: "A well-preserved silver portrait coin bearing the bust of the Satavahana emperor Gautamiputra Yajna Sri Satakarni on the obverse, and the Ujjain symbol and six-arched hill with waves on the reverse, with a bilingual Brahmi legend.",
    evidenceType: "primary",
    sourceId: "indraji-1882",
    details: [
      "Provides crucial relative chronological evidence (terminus post quem): indicates the coffer was consecrated or reconstituted during or shortly after Yajna Sri Satakarni's reign (c. late 2nd century CE).",
      "Demonstrates imperial Satavahana association with the Sopara maritime trading zone and its monastic institutions."
    ]
  }
];
