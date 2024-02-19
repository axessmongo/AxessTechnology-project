const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  fname: {
    type: "string",
  },
  lname: {
    type: "string",
  },
  email: {
    type: "string",
    unquie: true,
  },
  address: {
    type: "string",
  },
  serviceOption: {
    type: "string",
  },
  website: {
    type: "string",
  },
  company: {
    type: "string",
  },
  services: {
    type: "object",
  },
  digitalmarketBudget: {
    type: "string",
  },
  comments: {
    type: "string",
  },
});

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
