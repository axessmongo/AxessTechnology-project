const express = require("express");
const router = express.Router();
const DigitalMarketing = require("../TaskControl/DigitialControl.js");

router.post("/digital/contact", DigitalMarketing);

module.exports = router;
