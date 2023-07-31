const http = require('http');
const express = require('express');
// const mongoose = require('mongoose');
const mongodb = require('mongodb');
const router = require('./routes'); 
const bodyParser = require('body-parser');
const app = express();

// mongoose.connect('mongodb://localhost:27017/libraryData')
//  .then(() => { console.log('Connected to database!'); })
//  .catch((err) => { console.error('Error connecting to database:', err); });

var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/libraryData";
MongoClient.connect(dburl, function (err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});

app.use(bodyParser.json());
app.use('/', routes);

const port = 3000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });
