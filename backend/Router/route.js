const express = require('express');
const router = express.Router();
const HomepageContact = require('../TaskControl/HomepageControl.js');
const NormalSchema =require("../TaskControl/NormalControl.js")


// Define route for homepage contact form submission
router.post("/api/data", HomepageContact.Contactpostmethod)
router.post("/api/contact",NormalSchema.postmethod )

module.exports = router;
