
const author = require('./authorDetails'); 


app.post('/authorDetails', (req, res) => {
  const { name, authorId,email} = req.body;
  const newauthor = new author({ name, authorId, email });

  newauthor.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating record.');
    } else {
      res.status(201).send('Record created successfully.');
    }
  });
});


app.get('/authorDetails', (req, res) => {
    author.find({}, (err, author) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving record.');
    } else {
      res.status(200).json(author);
    }
  });
});


app.put('/authorDetails/:id', (req, res) => {
    const authorId = req.params.id;
    const updatedData = req.body;
  
    author.findByIdAndUpdate(authorId, { $set: updatedData }, { new: true }, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating record.');
      } else {
        if (!author) {
          res.status(404).send('Record not found.');
        } else {
          res.status(200).json(author);
        }
      }
    });
  });
  

app.delete('/authorDetails/:id', (req, res) => {
    const authorId = req.params.id;
    author.findByIdAndDelete(authorId, (err, author) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting record.');
      } else {
        if (!author) {
          res.status(404).send('Record not found.');
        } else {
          res.status(200).send('Record deleted successfully.');
        }
      }
    });
  });
  

  
  

