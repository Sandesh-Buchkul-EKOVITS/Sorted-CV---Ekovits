const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sortedcv",
  password: "Gayu",
  port: 5432,
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  try {
    await pool.query(
      "INSERT INTO contacts (name, email, company, phone, message) VALUES ($1, $2, $3, $4, $5)",
      [name, email, company, phone, message]
    );

    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
