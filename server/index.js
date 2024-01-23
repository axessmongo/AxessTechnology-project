const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000 ;
const mongoURL = process.env.mongoURL;

const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/deva',
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port ' + PORT);
    });
    // Start your Express.js server or perform other operations
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

