const mongoose = require("mongoose");
const { Schema } = mongoose;

const NormalSchema = new Schema({
  fname: {
    type: "string",
  },
  lname: {
    type: "string",
  },
  email: {
    type: "string",
    required: true,
  },
  phone:{
    type: "Number",
  },
  address: {
    type: "string",
  },
  serviceOption: {
    type: "string",
  },
});

const Contact = mongoose.model("contacts", NormalSchema);

module.exports = Contact;
