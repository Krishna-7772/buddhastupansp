/**
 * Materials and Scientific Study (2023 Peer-Reviewed Research)
 * Direct Reference: Characterization of ancient brick and mud mortar from Nala Sopara Buddhist Stupa, Maharashtra, India
 * Published in: Construction and Building Materials, Vol. 367 (2023), Article 130281.
 * DOI: 10.1016/j.conbuildmat.2022.130281
 */

export const MATERIALS_RESEARCH = {
  studyTitle: "Characterization of ancient brick and mud mortar from Nala Sopara Buddhist Stupa, Maharashtra, India",
  journal: "Construction and Building Materials (Elsevier)",
  year: "2023",
  doi: "10.1016/j.conbuildmat.2022.130281",
  sourceId: "materials-2023",

  overview: {
    heading: "Archaeometry as a Window into Ancient Engineering",
    summary: "In 2023, an archaeometric study conducted the first comprehensive physical, chemical, mineralogical, and thermal characterization of historical brick and mud-mortar samples obtained from the Sopara stupa structure. Rather than relying solely on stylistic comparisons, this study provides empirical data on raw material sourcing, thermal firing regimes, and binder durability.",
    whyItMatters: "Ancient monuments are not merely shapes; they are complex material systems. Understanding brick composition reveals firing temperatures and clay preparation technologies, while analyzing mortar reveals the binder-to-aggregate choices made by ancient builders to withstand the torrential monsoon climate of coastal Konkan."
  },

  analyticalMethods: [
    {
      technique: "X-ray Fluorescence (XRF)",
      focus: "Elemental Chemical Composition",
      purpose: "Quantifies major metal oxides (silica, alumina, iron, calcium) to determine raw clay provenance and geological source."
    },
    {
      technique: "X-ray Diffraction (XRD)",
      focus: "Mineralogical Phases & Firing Index",
      purpose: "Detects crystalline minerals (quartz, feldspar, hematite, phyllosilicates) to estimate firing temperature and clay mineral transformations."
    },
    {
      technique: "Thermogravimetric Analysis (TGA)",
      focus: "Thermal Stability & Decomposition",
      purpose: "Measures mass loss during heating up to 1000°C to distinguish hydrated compounds, organic binders, and carbonate presence."
    },
    {
      technique: "Scanning Electron Microscopy with EDS (SEM-EDS)",
      focus: "Microstructure & Morphology",
      purpose: "Reveals pore connectivity, grain interlocking, and micro-cracking in the mortar matrix and brick vitrification."
    },
    {
      technique: "Porosity & Water Absorption Testing",
      focus: "Hydraulic and Durability Properties",
      purpose: "Measures open porosity and capillary water uptake to evaluate how the ancient brickwork resists coastal salt-spray and monsoon weathering."
    }
  ],

  keyFindings: [
    {
      title: "Utilization of Local Lateritic Clay",
      description: "Mineralogical and geochemical analyses indicate that ancient brickmakers exploited local Konkan laterite-rich red soils, which are naturally elevated in iron oxides (Fe2O3) and alumina (Al2O3). This gave the bricks their characteristic deep reddish-ochre coloration and dense matrix.",
      evidenceType: "scientific"
    },
    {
      title: "Controlled Firing Temperature Regime",
      description: "The presence of residual clay minerals alongside quartz and hematite, coupled with the absence of high-temperature phases like mullite, indicates the bricks were fired in clamp kilns at estimated temperatures between 700°C and 850°C—sufficient for durability while retaining breathability in high humidity.",
      evidenceType: "scientific"
    },
    {
      title: "Mud Mortar Matrix Composition",
      description: "The mortar between brick courses consists of a carefully sieved silt-and-clay binder mixed with fine sand aggregates. The mortar exhibits high cohesion without synthetic or lime additives, relying on the natural cohesive properties of local laterite-derived clays.",
      evidenceType: "scientific"
    }
  ],

  whatItEstablishesVsNot: {
    whatItEstablishes: [
      "Confirms that the building materials were locally sourced from the coastal Konkan geology rather than imported from distant inland centres.",
      "Documents an indigenous pyrotechnological tradition capable of producing durable monumental bricks for maritime conditions.",
      "Provides critical baseline data for modern heritage conservators to design compatible restoration mortars without damaging ancient brickwork."
    ],
    whatItDoesNotEstablish: [
      "Does NOT determine the exact calendrical founding date or founding ruler of the stupa.",
      "Does NOT prove that every single brick in the surviving monument belongs to a single building phase (repairs and additions occurred across centuries).",
      "Does NOT resolve the historical debate regarding Mauryan versus Satavahana original construction."
    ]
  }
};
