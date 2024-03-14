// Import mongoose
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
  PerformanceMarketing: {
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
});

// Create a mongoose model using the schema
const Contact = mongoose.model("testing", contactSchema);

// Export the model
module.exports = Contact;
