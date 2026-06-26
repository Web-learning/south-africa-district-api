# South Africa District API

A lightweight REST API and GeoJSON dataset for South Africa's **52 Metropolitan and District Municipalities**.

The project combines official municipality information with OpenStreetMap, Wikidata and Statistics South Africa into a single developer-friendly API.

---

## Features

- 🇿🇦 52 District & Metropolitan Municipalities
- 📍 Administrative headquarters
- 🗺 GeoJSON boundaries
- 🌍 OSM Relation IDs
- 🧭 Wikidata IDs
- 📖 Wikipedia links
- 👥 Population
- 📐 Area (km²)
- 🔍 Search API
- ⚡ Ready for Leaflet, OpenLayers and MapLibre
- 🔄 Automatic update scripts

---

## Project Structure

```
south-africa-district-api/

api/
data/
docs/
examples/
scripts/

package.json
README.md
```

---

## Installation

```bash
git clone https://github.com/yourname/south-africa-district-api.git

cd south-africa-district-api

npm install
```

---

## Running

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## Building the dataset

Download OpenStreetMap boundaries

```bash
npm run osm
```

Download Wikidata metadata

```bash
npm run wikidata
```

Download Statistics South Africa data

```bash
npm run statssa
```

Build GeoJSON

```bash
npm run build
```

Run everything

```bash
npm run update
```

---

# API Endpoints

## Provinces

```
GET /api/provinces
```

Returns the nine South African provinces.

---

## Municipalities

```
GET /api/municipalities
```

Returns every district and metropolitan municipality.

---

## Municipality

```
GET /api/municipalities/DC22
```

Returns one municipality.

---

## Search

```
GET /api/search?q=umgungundlovu
```

Search by

- Municipality code
- Municipality name
- Seat
- Province
- Wikidata ID
- OSM Relation ID

---

## Boundaries

Entire province

```
GET /api/boundaries/KZN
```

Single municipality

```
GET /api/boundaries/DC22
```

---

## Municipality Object

```json
{
  "code": "DC22",
  "name": "uMgungundlovu District Municipality",
  "province": "KwaZulu-Natal",
  "type": "District Municipality",
  "seat": "Pietermaritzburg",
  "population": 1176163,
  "area_km2": 9514,
  "wikidata": "Q311803",
  "osm_relation": 610729,
  "wikipedia": "https://en.wikipedia.org/wiki/UMgungundlovu_District_Municipality"
}
```

---

# Example (Leaflet)

```javascript
fetch("/api/boundaries/DC22")
    .then(r => r.json())
    .then(data => {

        L.geoJSON(data).addTo(map);

    });
```

---

# Example (Search)

```javascript
fetch("/api/search?q=Amajuba")
    .then(r => r.json())
    .then(console.log);
```

---

# Data Sources

The project is built from publicly available datasets.

- Municipal Demarcation Board
- OpenStreetMap
- Wikidata
- Wikipedia
- Statistics South Africa

---

# Roadmap

- [x] REST API
- [x] GeoJSON boundaries
- [x] Province API
- [x] Municipality API
- [x] Search API
- [ ] Census 2022 population updates
- [ ] Ward boundaries
- [ ] Local municipality boundaries
- [ ] Vector tiles
- [ ] Docker support
- [ ] PMTiles support

---

# License

MIT License