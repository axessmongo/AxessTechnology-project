const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT ;
const app = express();
const route =require("./Router/route.js");

app.use(cors());
app.use(bodyParser.json());
app.use(route);


mongoose.connect('mongodb://127.0.0.1:27017/Bharath',
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });