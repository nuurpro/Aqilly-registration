// ----- Aqilly Pre-Registration Backend -----
// Run: `node server.js`

import express from "express";
import bodyParser from "body-parser";
import { Pool } from "pg";  // PostgreSQL

const app = express();
app.use(bodyParser.json());

// TODO: replace with your actual Postgres credentials
const pool = new Pool({
  user: "your_db_user",
  host: "your_db_host",
  database: "your_db_name",
  password: "your_db_pass",
  port: 5432,
});

// Create table once (run manually in DB)
/// CREATE TABLE preregistrations (
///   id SERIAL PRIMARY KEY,
///   fullname VARCHAR(255) NOT NULL,
///   email VARCHAR(255),
///   phone VARCHAR(20),
///   comment TEXT,
///   consent BOOLEAN NOT NULL,
///   created_at TIMESTAMP DEFAULT NOW()
/// );

app.post("/register", async (req, res) => {
  const { fullname, email, phone, comment, consent } = req.body;

  if (!fullname || (!email && !phone) || !consent) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // check duplicate
    const dupCheck = await pool.query(
      "SELECT * FROM preregistrations WHERE email=$1 OR phone=$2",
      [email, phone]
    );

    if (dupCheck.rows.length > 0) {
      return res.status(409).json({ message: "User already registered" });
    }

    await pool.query(
      "INSERT INTO preregistrations(fullname, email, phone, comment, consent) VALUES($1,$2,$3,$4,$5)",
      [fullname, email, phone, comment, consent]
    );

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
