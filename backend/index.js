const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const route = require("./Router/route.js");

// Middleware setup
app.use(express.json());

// CORS setup
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Route setup
app.use(route);

// Root path route
app.get("/", (req, res) => {
  console.log('Request received at root path');
  res.send('Welcome to Node.js');
});

// MongoDB connection
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
