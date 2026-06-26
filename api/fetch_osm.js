import fs from "fs-extra";
import municipalities from "../api/municipalities.js";
import osmtogeojson from "osmtogeojson";

// -------------------------
// CONFIG
// -------------------------
const OUTPUT_DIR = "./data/geojson";
const MERGED_FILE = "./data/municipalities.geojson";

// Ensure folders exist
await fs.ensureDir(OUTPUT_DIR);

// -------------------------
// OVERPASS QUERY BUILDER
// -------------------------
function buildQuery(relationId) {
  return `
[out:json][timeout:60];
relation(${relationId});
out body;
>;
out skel qt;
`;
}

// -------------------------
// FETCH FROM OVERPASS
// -------------------------
async function fetchRelation(osmId) {
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: buildQuery(osmId)
  });

  if (!res.ok) {
    throw new Error(`Overpass failed for ${osmId}`);
  }

  return res.json();
}

// -------------------------
// PROCESS ONE MUNICIPALITY
// -------------------------
async function processMunicipality(m) {
  console.log(`Fetching ${m.code} - ${m.name}`);

  const osm = await fetchRelation(m.osm_relation);
  const geojson = osmtogeojson(osm);

  // attach metadata
  geojson.properties = {
    code: m.code,
    name: m.name,
    province: m.province,
    type: m.type,
    seat: m.seat,
    wikidata: m.wikidata,
    osm_relation: m.osm_relation
  };

  // save individual file
  const filePath = `${OUTPUT_DIR}/${m.code}.geojson`;
  await fs.writeJson(filePath, geojson, { spaces: 2 });

  return geojson;
}

// -------------------------
// MAIN BUILD FUNCTION
// -------------------------
async function build() {
  console.log("Starting OSM boundary build...");

  const all = [];

  for (const m of municipalities.all) {
    try {
      const geojson = await processMunicipality(m);
      all.push(geojson);
    } catch (err) {
      console.error(`Failed ${m.code}:`, err.message);
    }
  }

  const merged = {
    type: "FeatureCollection",
    features: all
  };

  await fs.writeJson(MERGED_FILE, merged, { spaces: 2 });

  console.log("Build complete:");
  console.log(`- Individual files: ${OUTPUT_DIR}`);
  console.log(`- Merged file: ${MERGED_FILE}`);
}

// -------------------------
// RUN
// -------------------------
build().catch(err => {
  console.error("Build failed:", err);
});
