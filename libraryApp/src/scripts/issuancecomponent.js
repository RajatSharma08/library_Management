const express = require("express");
const path = require("path");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the path for static files (e.g., CSS and client-side JavaScript)
app.use(express.static(path.join(__dirname, "public")));

// Sample issuance data (replace with your actual data)
const issuanceTable = [
  { users: "User 1", books: "Book 1", bookId: "B001", issuedate: "2023-07-29", returndate: "2023-08-05", penalty: 50 },
  { users: "User 2", books: "Book 2", bookId: "B002", issuedate: "2023-07-30", returndate: "2023-08-06", penalty: 0 },
  { users: "User 3", books: "Book 3", bookId: "B003", issuedate: "2023-07-31", returndate: "2023-08-07", penalty: 25 },
  // Add more issuance records as needed
];

// Route to render the issuance table page
app.get("/issuance", (req, res) => {
  res.render("issuance-table", { issuanceTable });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
