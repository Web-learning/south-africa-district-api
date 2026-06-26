import fs from "fs-extra";
import path from "path";
import municipalities from "./municipalities.js";

// -------------------------
// PATHS
// -------------------------
const GEOJSON_DIR = path.resolve("./data/geojson");
const MERGED_FILE = path.resolve("./data/municipalities.geojson");

// -------------------------
// CACHE (optional in-memory)
// -------------------------
const cache = new Map();

// -------------------------
// GET SINGLE MUNICIPALITY BOUNDARY (FAST)
// -------------------------
async function getByCode(req, res) {
  try {
    const code = req.params.code.toUpperCase();

    const muni = municipalities.byCode(code);

    if (!muni) {
      return res.status(404).json({
        error: "Municipality not found",
        code
      });
    }

    // check memory cache
    if (cache.has(code)) {
      return res.json(cache.get(code));
    }

    const filePath = path.join(GEOJSON_DIR, `${code}.geojson`);

    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({
        error: "GeoJSON file not found. Run: npm run osm",
        code,
        expected: filePath
      });
    }

    const geojson = await fs.readJson(filePath);

    // attach metadata (ensures consistency)
    geojson.properties = {
      code: muni.code,
      name: muni.name,
      province: muni.province,
      type: muni.type,
      seat: muni.seat,
      wikidata: muni.wikidata,
      osm_relation: muni.osm_relation
    };

    cache.set(code, geojson);

    res.json(geojson);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to load boundary",
      message: err.message
    });
  }
}

// -------------------------
// GET PROVINCE BOUNDARIES (FAST FILTER)
// -------------------------
async function getByProvince(req, res) {
  try {
    const province = req.params.name.toLowerCase();

    const list = municipalities.all.filter(
      m => m.province.toLowerCase() === province
    );

    if (!list.length) {
      return res.status(404).json({
        error: "Province not found",
        province
      });
    }

    const features = [];

    for (const m of list) {
      const code = m.code;

      if (cache.has(code)) {
        features.push(cache.get(code));
        continue;
      }

      const filePath = path.join(GEOJSON_DIR, `${code}.geojson`);

      if (!(await fs.pathExists(filePath))) {
        continue;
      }

      const geojson = await fs.readJson(filePath);

      geojson.properties = {
        code: m.code,
        name: m.name,
        province: m.province,
        type: m.type,
        seat: m.seat,
        wikidata: m.wikidata
      };

      cache.set(code, geojson);

      features.push(geojson);
    }

    res.json({
      type: "FeatureCollection",
      features
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to load province boundaries",
      message: err.message
    });
  }
}

// -------------------------
// GET ALL BOUNDARIES (OPTIONAL)
// -------------------------
async function getAll(req, res) {
  try {
    const fileExists = await fs.pathExists(MERGED_FILE);

    if (!fileExists) {
      return res.status(404).json({
        error: "Merged file not found. Run: npm run osm"
      });
    }

    const data = await fs.readJson(MERGED_FILE);

    res.json(data);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to load all boundaries",
      message: err.message
    });
  }
}

// -------------------------
// EXPORT
// -------------------------
export default {
  getByCode,
  getByProvince,
  getAll
};