// Importing mongoose library
const mongoose = require("mongoose");

// Destructuring Schema from mongoose
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    fname: {
      type: String, // Field for first name, expects a string
      required: true // Making first name required
    },
    email: {
      type: String, // Field for email, expects a string, and should be unique
      unique: true,
      required: true // Making email required
    },
    phone: {
      type: String, // Field for phone number, expects a string
      required: true // Making phone number required
    },
    website: {
      type: String // Field for website, expects a string
    },
    company: {
      type: String // Field for company, expects a string
    },
    services: {
      type: Schema.Types.Mixed 
    },
    digitalmarketBudget: {
      type: String // Field for digital market budget, expects a string
    },
    comments: {
      type: String // Field for comments, expects a string
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt
);
// Creating a model named "DigitalWorld" using the contact schema
const Contact = mongoose.model("DigitalWorld", contactSchema);

// Exporting the Contact model
module.exports = Contact;
