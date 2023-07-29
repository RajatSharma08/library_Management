
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes');

const app = express();


mongoose.connect('mongodb://localhost:27017/libraryData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Use the bookRoutes as middleware
app.use('/api/books', routes);

// Start the server (listening on port 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
