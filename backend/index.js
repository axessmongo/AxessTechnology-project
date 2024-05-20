const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const route = require("./Router/route");

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(route);

app.get("/", (req, res) => {
  console.log('Request received at root path');
  res.send('Welcome to AxessTechnology');
});

// MongoDB connection:)
mongoose
  .connect(process.env.mongoURL, {
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
