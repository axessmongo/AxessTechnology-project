const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const route = require("./Router/route.js");



app.use(express.json());
app.use(cors());
app.use(route)


app.get("/", (req, res) => {
  console.log('Request received at root path');
  res.send('Welcome to Node.js'); // Send a response to the client
});


const mongoURL = 'mongodb+srv://axessmongo:admin@cluster0.ozjlhdj.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(mongoURL, {
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });