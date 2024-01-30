const express = require("express");
const router = express.Router();
const AxessTechnology = require("../TaskControl/Control.js")
const HomepageContact =require("../TaskControl/HomepageContact.js")
const AxessRestPassword =require("../TaskControl/Reset-password.js")

//homepage contact form:
router.post("/api/contact", HomepageContact.Contactpostmethod)
//login and register form
router.post("/api/register", AxessTechnology.Register)
router.post("/api/login" , AxessTechnology.loginpost)
router.get("/:id/verify/:token", AxessTechnology.verifyEmail)
//reset-password;
router.post("/api/resetPassword", AxessRestPassword.resetPassword)
router.post("/:id/:token", AxessRestPassword.setNewPassword)
router.get("/:id/:token", AxessRestPassword.verifyPassword)


module.exports = router;