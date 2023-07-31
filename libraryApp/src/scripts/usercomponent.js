const express = require("express");
const path = require("path");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the path for static files (e.g., CSS and client-side JavaScript)
app.use(express.static(path.join(__dirname, "public")));

// Sample users data (replace with your actual data)
const users = [
  { name: "User 1", UserId: "U001", Email: "user1@example.com", password: "password1" },
  { name: "User 2", UserId: "U002", Email: "user2@example.com", password: "password2" },
  { name: "User 3", UserId: "U003", Email: "user3@example.com", password: "password3" },
  // Add more users as needed
];

// Route to render the user details page
app.get("/users", (req, res) => {
  res.render("user-details", { users });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
