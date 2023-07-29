n
const issuanceTable = require('./issuanceTableSchema'); 


app.post('/issuanceTable', (req, res) => {
  const { user, books, bookId, issueDate,returnDate,penalty } = req.body;
  const newissueTable = new issuanceTable({ user, books, bookId, issueDate,returnDate,penalty});

  newissueTable.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('Record created successfully.');
    }
  });
});


app.get('/issuanceTable', (req, res) => {
    issuanceTable.find({}, (err, books) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving records.');
    } else {
      res.status(200).json();
    }
  });
});


app.put('/issuanceTable/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
  
    issuanceTable.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true }, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating record.');
      } else {
        if (!book) {
          res.status(404).send('Record not found.');
        } else {
          res.status(200).json(book);
        }
      }
    });
  });
  

app.delete('/issuanceTable/:id', (req, res) => {
    const bookId = req.params.id;
    issuanceTable.findByIdAndDelete(bookId, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting record.');
      } else {
        if (!book) {
          res.status(404).send('Record not found.');
        } else {
          res.status(200).send('Record deleted successfully.');
        }
      }
    });
  });
  

  
  

