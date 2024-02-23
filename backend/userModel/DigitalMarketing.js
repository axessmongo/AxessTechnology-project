const mongoose = require("mongoose");
const { Schema } = mongoose;
const DigitalSchema = new Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    unique: true,
   
  },
  address: {
    type: String
  },
  serviceOption: {
    type: String,
    
  },
  phone: {
    type: String // Assuming phone number can be stored as a string
  },
  website: {
    type: String
  },
  company: {
    type: String
  },
  services: {
    type: Object,
   // You might want to define a specific schema for services
  },
  digitalmarketBudget: {
    type: String
  },
  comments: {
    type: String
  }
}, { timestamps: true });

const DigitalMarket = mongoose.model("DigitalMarket", DigitalSchema);

module.exports = DigitalMarket;
