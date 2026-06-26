import municipalities from "./municipalities.js";

// -------------------------
// NORMALISE STRING
// -------------------------
function norm(str = "") {
  return str.toLowerCase().trim();
}

// -------------------------
// SEARCH ENGINE
// -------------------------
function query(req, res) {
  const q = norm(req.query.q);

  if (!q) {
    return res.status(400).json({
      error: "Missing query parameter",
      example: "/api/search?q=durban"
    });
  }

  const results = municipalities.all.filter(m => {
    return (
      norm(m.name).includes(q) ||
      norm(m.code).includes(q) ||
      norm(m.province).includes(q) ||
      norm(m.seat).includes(q) ||
      norm(m.wikidata).includes(q)
    );
  });

  // enrich results for frontend usage
  const enriched = results.map(m => ({
    code: m.code,
    name: m.name,
    province: m.province,
    type: m.type,
    seat: m.seat,
    wikidata: m.wikidata,
    score: scoreMatch(m, q)
  }));

  // sort best matches first
  enriched.sort((a, b) => b.score - a.score);

  res.json({
    query: q,
    count: enriched.length,
    results: enriched
  });
}

// -------------------------
// SIMPLE SCORING SYSTEM
// (improves relevance ordering)
// -------------------------
function scoreMatch(m, q) {
  let score = 0;

  if (norm(m.code) === q) score += 100;
  if (norm(m.name) === q) score += 90;
  if (norm(m.seat) === q) score += 80;
  if (norm(m.wikidata) === q) score += 70;

  if (norm(m.name).includes(q)) score += 40;
  if (norm(m.seat).includes(q)) score += 30;
  if (norm(m.province).includes(q)) score += 20;
  if (norm(m.code).includes(q)) score += 50;

  return score;
}

// -------------------------
// EXPORT
// -------------------------
export default {
  query
};
