// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-1.c16u20a2og25.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "Moumita819121",
  port: "3306",
  database: "usersAKI",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
