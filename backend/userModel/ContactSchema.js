// Importing mongoose library
const mongoose = require("mongoose");

// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Defining the schema for the contact
const contactSchema = new Schema(
  {
    fname: {
      type: String, // Field for first name, expects a string
    },
    email: {
      type: String, // Field for email, expects a string, and should be unique
      unique: true,
    },
    phone: {
      type: String, // Field for phone number, expects a string
    },
    website: {
      type: String, // Field for website, expects a string
    },
    company: {
      type: String, // Field for company, expects a string
    },
    services: {}, // Field for services, but the type is not defined. Assuming it might be an object or array, you should specify the type.

    digitalmarketBudget: {
      type: String, // Field for digital market budget, expects a string
    },
    comments: {
      type: String, // Field for comments, expects a string
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt
);

// Creating a model named "DigitalWorld" using the contact schema
const Contact = mongoose.model("DigitalWorld", contactSchema);

// Exporting the Contact model
module.exports = Contact;
