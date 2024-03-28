const express = require('express');
const router = express.Router();
const AxessTechnology =require("../TaskControl/NormalControl.js");
const DigitalContact =require("../TaskControl/HomepageControl.js");

router.post("/api/call", AxessTechnology.postNormalContact);
router.post("/api/digital", DigitalContact.Contactpostmethod);


module.exports = router;
