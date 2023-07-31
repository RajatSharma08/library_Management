const express = require('express');
const router = express.Router();
const user = require('./userDetailsSchema');
const inventory = require('./invetorySchema');
const issuanceTable = require('./issuanceTableSchema');
const books         = require('./booksSchema')

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


router.post('/userDetailsSchema', (req, res) => {
  const { name, userId, email } = req.body;
  const newuser = new user({ name, userId, email });

  newuser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('User created successfully.');
    }
  });
});

router.get('/userDetailsSchema', (req, res) => {
  user.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving record.');
    } else {
      res.status(200).json(users);
    }
  });
});

router.put('/userDetailsSchema/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  user.findByIdAndUpdate(userId, { $set: updatedData }, { new: true }, (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating record.');
    } else {
      if (!updatedUser) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).json(updatedUser);
      }
    }
  });
});

router.delete('/userDetailsSchema/:id', (req, res) => {
  const userId = req.params.id;
  user.findByIdAndDelete(userId, (err, deletedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting record.');
    } else {
      if (!deletedUser) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).send('User deleted successfully.');
      }
    }
  });
});


router.post('/inventory', (req, res) => {
  const { books, bookId, quantity, price } = req.body;
  const newInventory = new inventory({ books, bookId, quantity, price });

  newInventory.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('Record created successfully.');
    }
  });
});

router.get('/inventory', (req, res) => {
  inventory.find({}, (err, inventoryData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving inventory.');
    } else {
      res.status(200).json(inventoryData);
    }
  });
});

router.put('/inventory/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedData = req.body;

  inventory.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true }, (err, updatedInventory) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating inventory.');
    } else {
      if (!updatedInventory) {
        res.status(404).send('Record not found.');
      } else {
        res.status(200).json(updatedInventory);
      }
    }
  });
});

router.delete('/inventory/:id', (req, res) => {
  const bookId = req.params.id;
  inventory.findByIdAndDelete(bookId, (err, deletedInventory) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting record.');
    } else {
      if (!deletedInventory) {
        res.status(404).send('Record not found.');
      } else {
        res.status(200).send('Record deleted successfully.');
      }
    }
  });
});



router.post('/issuanceTable', (req, res) => {
  const { user, books, bookId, issueDate, returnDate, penalty } = req.body;
  const newIssueTable = new issuanceTable({ user, books, bookId, issueDate, returnDate, penalty });

  newIssueTable.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('Record created successfully.');
    }
  });
});

router.get('/issuanceTable', (req, res) => {
  issuanceTable.find({}, (err, issuanceData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving records.');
    } else {
      res.status(200).json(issuanceData);
    }
  });
});

router.put('/issuanceTable/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedData = req.body;

  issuanceTable.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true }, (err, updatedBook) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating record.');
    } else {
      if (!updatedBook) {
        res.status(404).send('Record not found.');
      } else {
        res.status(200).json(updatedBook);
      }
    }
  });
});

router.delete('/issuanceTable/:id', (req, res) => {
  const bookId = req.params.id;
  issuanceTable.findByIdAndDelete(bookId, (err, deletedBook) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting record.');
    } else {
      if (!deletedBook) {
        res.status(404).send('Record not found.');
      } else {
        res.status(200).send('Record deleted successfully.');
      }
    }
  });
});


module.exports = router;





  
