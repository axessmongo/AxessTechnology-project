const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    fname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    company: {
      type: String,
    },
    services: {
      type: Object,
      // You might want to define a specific schema for services
    },
    digitalmarketBudget: {
      type: String,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
