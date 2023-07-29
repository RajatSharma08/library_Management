

const inventory = require('./invetorySchema'); 


app.post('/inventory', (req, res) => {
  const { books, bookId, quantity, price } = req.body;
  const newinventory= new inventory({ books, bookId, quantity, price });

  newinventory.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('record created successfully.');
    }
  });
});


app.get('/inventory', (req, res) => {
  inventory.find({}, (err, inventory) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving inventory.');
    } else {
      res.status(200).json(inventory);
    }
  });
});


app.put('/inventory/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
  
    inventory.findByIdAndUpdate(bookId, { $set: updatedData }, { new: true }, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating inventory.');
      } else {
        if (!book) {
          res.status(404).send('record not found.');
        } else {
          res.status(200).json(inventory);
        }
      }
    });
  });
  

app.delete('/inventory/:id', (req, res) => {
    const bookId = req.params.id;
    inventory.findByIdAndDelete(bookId, (err, book) => {
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
  

  
  

