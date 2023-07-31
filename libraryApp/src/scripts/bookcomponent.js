
const express = require('express');
const router = express.Router();

const books = [
  { name: 'Book 1', author: 'Author 1', isbn: 'ISBN001', price: 10.99 },
  { name: 'Book 2', author: 'Author 2', isbn: 'ISBN002', price: 12.99 },
  { name: 'Book 3', author: 'Author 3', isbn: 'ISBN003', price: 9.99 },
  // Add more books as needed
];

// Route to render the library management page
router.get('/library', (req, res) => {
  res.render('library-management', { books });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = router;
