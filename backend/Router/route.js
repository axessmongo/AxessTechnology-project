const express = require('express');
const router = express.Router();
const MainPlug = require("../Taskmodule/RegisterControl.js")

router.post('/api/post', MainPlug.RegisterPost)



module.exports = router