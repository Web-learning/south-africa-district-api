import municipalities from "./municipalities.js";

// -------------------------
// PROVINCES LIST (STATIC)
// -------------------------
const provinces = [
  "Western Cape",
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape"
];

// -------------------------
// GET ALL PROVINCES
// -------------------------
function getAll(req, res) {
  res.json({
    count: provinces.length,
    provinces
  });
}

// -------------------------
// GET SINGLE PROVINCE DATA
// -------------------------
function getOne(req, res) {
  const name = req.params.name;

  const list = municipalities.all.filter(
    m => m.province.toLowerCase() === name.toLowerCase()
  );

  if (!list.length) {
    return res.status(404).json({
      error: "Province not found",
      name
    });
  }

  res.json({
    province: name,
    count: list.length,
    municipalities: list
  });
}

// -------------------------
// GET PROVINCE SUMMARY (FOR MAPS)
// -------------------------
function getSummary(req, res) {
  const summary = provinces.map(province => {
    const list = municipalities.all.filter(
      m => m.province === province
    );

    return {
      province,
      municipalityCount: list.length,
      districtMunicipalities: list.filter(m => m.type === "District Municipality").length,
      metropolitanMunicipalities: list.filter(m => m.type === "Metropolitan Municipality").length
    };
  });

  res.json(summary);
}

// -------------------------
// EXPORT
// -------------------------
export default {
  getAll,
  getOne,
  getSummary
};
