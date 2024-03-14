const mongoose = require("mongoose");

// Create a schema for contact
const contactSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  commands: {
    type: String,
  },
  SocialMediaMarketing: {
    type: String,
  },
  WebsiteDevelopment: {
    type: String,
  },
  InfluencerMarketing: {
    type: String,
  },
  BrandingSolution: {
    type: String,
  },
  SearchEngineOptimization: {
    type: String,
  },
  ContentWriting: {
    type: String,
  },
  PerformanceMarketing: {
    type: String,
  },
  EventMarketing: {
    type: String,
  },
  VideoProduction: {
    type: String,
  },
  Consultancy: {
    type: String,
  },
  InstagramMarketing: {
    type: String,
  },
  ShopifyDevelopment: {
    type: String,
    
  }
});

// Create a mongoose model using the schema
const Contact = mongoose.model("Testing", contactSchema);

// Export the model
module.exports = Contact;
