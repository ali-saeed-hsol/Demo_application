require("dotenv").config();   // 👈 load .env

const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
};
console.log("test=",process.env.test)
async function connectDB() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("✅ Connected to MySQL");

    // Optional test query
    await connection.query("SELECT 1");

    await connection.end();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
}

connectDB();