import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes.js";

// Load environment variables
dotenv.config();

// Create app
const app = express();

// -------------------------
// Middleware
// -------------------------
app.use(cors());
app.use(express.json());

// Request logger (simple debug helper)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// -------------------------
// Health Check
// -------------------------
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "South Africa District API is running",
    version: "1.0.0"
  });
});

// -------------------------
// API Routes
// -------------------------
app.use("/api", routes);

// -------------------------
// 404 Handler
// -------------------------
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Route ${req.originalUrl} does not exist`
  });
});

// -------------------------
// Global Error Handler
// -------------------------
app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something went wrong"
  });
});

// -------------------------
// Start Server
// -------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 South Africa District API running on port ${PORT}`);
});