/**
 * Geographic and Topographical Location Data
 * Site: Buddhist Stupa at Nala Sopara (Gas Village)
 * Administrative: Vasai-Virar City Municipal Corporation / Palghar District, Maharashtra
 */

export const LOCATION_DATA = {
  generalArea: "Gas Village, Nalasopara (West), Palghar District, Maharashtra, India",
  historicalRegion: "Aparanta (Northern Konkan Coast), Ancient Maritime Port of Surparaka",
  coordinatesDisplay: "19°25'07\" N, 72°47'54\" E (General Protected Reserve)",
  coordinatesDecimal: {
    lat: 19.4186,
    lng: 72.7983
  },
  elevation: "Approximately 5 to 7 metres above mean sea level",
  geographicalContext: "Situated in the low-lying coastal alluvial plain of North Konkan, historically bounded by the Vaitarna River estuary to the north and the Ulhas River / Vasai Creek to the south. In antiquity, tidal creeks extended further inland, allowing seafaring vessels to anchor in sheltered waters near Sopara emporium.",
  
  connectivity: [
    {
      mode: "Railway Access",
      detail: "Western Railway suburban corridor — Nalasopara Railway Station is situated approximately 2.5 km east of the stupa mound."
    },
    {
      mode: "Road Transit",
      detail: "Accessible via Nalasopara-Gas road connecting to Vasai and the Western Express Highway (NH 48)."
    },
    {
      mode: "Maritime Proximity",
      detail: "Located roughly 4 km inland from the modern Arabian Sea shoreline, reflecting coastal progradation and siltation over the past two millennia."
    }
  ],

  externalLinks: {
    osm: "https://www.openstreetmap.org/?mlat=19.4186&mlon=72.7983#map=16/19.4186/72.7983",
    googleMaps: "https://maps.google.com/?q=19.4186,72.7983"
  },

  offlineSiteLayout: {
    title: "Archaeological Site Precinct Layout (Schematic Orientation)",
    orientation: "North-oriented precinct plan",
    features: [
      { name: "Circular Brick Stupa Drum", description: "Central conserved circular brick core with excavated 1882 trench profile." },
      { name: "Stepped Masonry Terrace (Medhi)", description: "Low circular retaining foundation courses surrounding the main drum." },
      { name: "ASI Perimeter Boundary", description: "Protective fencing and archaeological buffer zone bordering Gas agricultural lands." },
      { name: "Approach Path", description: "Pedestrian gateway on eastern perimeter connecting to Gas-Nalasopara access road." }
    ]
  }
};
