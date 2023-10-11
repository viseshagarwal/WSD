const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3001;

// MySQL database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel_db",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    console.error("There is a Database connection error:", err);
  } else {
    console.log("Connected to MySQL database sucessfuly!");
  }
});

// Example route for searching available rooms
app.get("/search-rooms", (req, res) => {
  const { checkInDate, checkOutDate, roomType, occupancy } = req.query;

  const query = `SELECT * FROM rooms`;

  const values = [roomType, occupancy, checkInDate, checkOutDate];

  // Execute the query
  db.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching rooms." });
    } else {
      // Send the results back to the client
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//LINK: http://localhost:3006/search-rooms?checkInDate=2023-10-15&checkOutDate=2023-10-20&roomType=Standard&occupancy=2
