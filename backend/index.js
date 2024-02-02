const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const route = require("./Router/route.js");

app.use(cors());
app.use(bodyParser.json());
app.use(route);

mongoose
  .connect(process.env.mongoURL
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    
    app.listen(PORT, () => {
      console.log("Server is listening on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    // Terminate the application on database connection error
    process.exit(1);
  });
