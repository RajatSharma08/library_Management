
const Book = require('./bookSchema'); 


app.post('/books', (req, res) => {
  const { title, author, genre, isbn } = req.body;
  const newBook = new Book({ title, author, genre, isbn });

  newBook.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating book.');
    } else {
      res.status(201).send('Book created successfully.');
    }
  });
});


app.get('/books', (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving books.');
    } else {
      res.status(200).json(books);
    }
  });
});


app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
  
    Book.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true }, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating book.');
      } else {
        if (!book) {
          res.status(404).send('Book not found.');
        } else {
          res.status(200).json(book);
        }
      }
    });
  });
  

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    Book.findByIdAndDelete(bookId, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting book.');
      } else {
        if (!book) {
          res.status(404).send('Book not found.');
        } else {
          res.status(200).send('Book deleted successfully.');
        }
      }
    });
  });
  

  
  

