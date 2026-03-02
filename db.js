require("dotenv").config(); // load .env

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

// Cloud Run requires PORT env (default 8080)
const PORT = process.env.PORT || 8080;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
};

// ---- DB CONNECTION TEST ----
async function connectDB() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("✅ Connected to MySQL");

    await connection.query("SELECT 1");
    await connection.end();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    // Do NOT exit in Cloud Run; let container stay alive
  }
}

// Call DB test once at startup
connectDB();

// ---- ROUTES ----
app.get("/", (req, res) => {
  res.status(200).send("Hello World 🚀");
});

// ---- START SERVER ----
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});