const express = require('express');
const router = express.Router();
const contactDetails =require("../controllers/contactControl.js");
const DigitalMarkingDetails =require("../controllers/digitalMarkingControl.js");

router.post("/api/contact", contactDetails.postContactDetails);
router.post("/api/digital", DigitalMarkingDetails.postMarketingDetails);


module.exports = router;
