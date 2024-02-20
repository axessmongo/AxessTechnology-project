const express = require("express");
const router = express.Router();


const DigitalMarketing =require("../TaskControl/DigitialControl.js");


router.post("/contact/digital", DigitalMarketing.DigitalMarketing);

console.log("dig route")

module.exports = router;