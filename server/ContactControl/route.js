const express = require('express');
const mainplug = require("../routes/Contactpost");
const router = express.Router();

router.post("/api/contact", mainplug.Contactpostmethod);

module.exports = router;