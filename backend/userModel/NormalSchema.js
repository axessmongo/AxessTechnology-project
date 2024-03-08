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
    unique: true,
    required: true,
  },
  address: {
    type: "string",
  },
  serviceOption: {
    type: "string",
  },
});

const Contact = mongoose.model("Usercontact", NormalSchema);

module.exports = Contact;
