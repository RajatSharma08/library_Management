
const user = require('./userDetailsSchema'); 


app.post('/userDetailsSchema', (req, res) => {
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


app.get('/userDetailsSchema', (req, res) => {
    user.find({}, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving record.');
    } else {
      res.status(200).json(user);
    }
  });
});


app.put('/userDetailsSchema/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
  
    user.findByIdAndUpdate(userId, { $set: updatedData }, { new: true }, (err, book) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating record.');
      } else {
        if (!user) {
          res.status(404).send('Book not found.');
        } else {
          res.status(200).json(user);
        }
      }
    });
  });
  

app.delete('/userDetailsSchema/:id', (req, res) => {
    const bookId = req.params.id;
    user.findByIdAndDelete(bookId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting record.');
      } else {
        if (!user) {
          res.status(404).send('User not found.');
        } else {
          res.status(200).send('User deleted successfully.');
        }
      }
    });
  });
  

  
  

