const express = require( 'express' );
const router = express.Router();
const HomepageContact = require("../TaskControl/HomepageControl.js");


//homepage contact form
router.post("/api/contact", HomepageContact.Contactpostmethod);


module.exports = router;
