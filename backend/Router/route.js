const express = require('express');
const router = express.Router();
const HomepageContact = require('../TaskControl/HomepageControl.js');


// Define route for homepage contact form submission
router.post("/jaykumar", HomepageContact.Contactpostmethod)
router.get("/contact", HomepageContact.contactgetmethod)

module.exports = router;
