// NormalSchema.js
const mongoose = require('mongoose');

const NormalSchema = new mongoose.Schema({
  fname: {
    type: String,
    
  },
  lname: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    
  },
  serviceOption: {
    type: String,
   
  }
});

const NormalContact = mongoose.model('NormalContact', NormalSchema);

module.exports = NormalContact;
