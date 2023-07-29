// server creation

const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/libraryData',
)
.then(()=>{console.log('Connected to database!');})
.catch((err)=>{console.error('Error connecting to database:',err);});

app.use(bodyparser.json());

const port = 3000;
app.listen (port,() => {console.log ('Server is running on port ${port}')});





