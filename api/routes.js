import express from "express";

// Feature modules (we will build these next)
import municipalities from "./municipalities.js";
import provinces from "./provinces.js";
import boundaries from "./boundaries.js";
import search from "./search.js";

const router = express.Router();

// -------------------------
// API ROOT
// -------------------------
router.get("/", (req, res) => {
  res.json({
    name: "South Africa District API",
    version: "1.0.0",
    endpoints: {
      provinces: "/api/provinces",
      municipalities: "/api/municipalities",
      municipality: "/api/municipalities/:code",
      boundaries: "/api/boundaries/:code",
      search: "/api/search?q="
    }
  });
});

// -------------------------
// PROVINCES
// -------------------------
router.get("/provinces", provinces.getAll);

router.get("/provinces/:name", provinces.getOne);

// -------------------------
// MUNICIPALITIES
// -------------------------
router.get("/municipalities", municipalities.getAll);

router.get("/municipalities/:code", municipalities.getOne);

// -------------------------
// BOUNDARIES (GeoJSON)
// -------------------------
router.get("/boundaries/:code", boundaries.getByCode);

router.get("/boundaries/province/:name", boundaries.getByProvince);

// -------------------------
// SEARCH
// -------------------------
router.get("/search", search.query);

export default router;
