const express = require('express');
const router = express.Router();


// Route: /api/books
// Method: GET
// Description: Get the list of all books
router.get('/books', (req, res) => {
  res.status(200).json({
    success: true,
    data: books,
  });
});

// Route: /api/books/:id
// Method: GET
// Description: Get a book by id
router.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) {
    return res.status(404).json({
      success: false,
      message: 'Book not found',
    });
  }
  res.status(200).json({
    success: true,
    data: book,
  });
});

// Route: /api/books
// Method: POST
// Description: Add a new book
router.post('/books', (req, res) => {
  const { id, name, author, price } = req.body;

  // Assuming the book is added successfully
  const newBook = { id, name, author, price };
  books.push(newBook);
  res.status(201).json({
    success: true,
    data: newBook,
  });
});

// Route: /api/books/:id
// Method: PUT
// Description: Update a book by id
router.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { name, author, price } = req.body;
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) {
    return res.status(404).json({
      success: false,
      message: 'Book not found',
    });
  }
 
  // Assuming the book is updated successfully
  book.name = name;
  book.author = author;
  book.price = price;
  res.status(200).json({
    success: true,
    data: book,
  });
});

// Route: /api/books/:id
// Method: DELETE
// Description: Delete a book by id
router.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Book not found',
    });
  }

  // Assuming the book is deleted successfully
  books.splice(bookIndex, 1);
  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
  });
});

module.exports = router;


  