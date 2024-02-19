const mongoose = require("mongoose");
const { Schema } = mongoose;

const Digital = new Schema({
  name: {
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
  phone: {
    type: Number,
  },
  address: {
    type: "string",
  },
  website: {
    type: "string",
  },
  company :{
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

const DigitalMarket = mongoose.model("DigitalMarket", Digital);

module.exports = DigitalMarket;
