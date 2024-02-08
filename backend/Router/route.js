const express = require("express");
const router = express.Router();
const AxessTechnology = require("../TaskControl/Control.js");
const HomepageContact = require("../TaskControl/HomepageControl.js");
const AxessRestPassword = require("../TaskControl/Reset-password.js");
const DashBoardAxess = require("../TaskControl/employee.js");

//homepage contact form:
router.post("/api/contact", HomepageContact.Contactpostmethod);
//login and register form
router.post("/api/register", AxessTechnology.Register);
router.post("/api/login", AxessTechnology.loginpost);
router.get("/:id/verify/:token", AxessTechnology.verifyEmail);
//reset-password;
router.post("/api/resetPassword", AxessRestPassword.resetPassword);
router.post("/:id/:token", AxessRestPassword.setNewPassword);
router.get("/:id/:token", AxessRestPassword.verifyPassword);
//dashBoard:
router.post("/api/dashboard/post", DashBoardAxess.Employerpost);
router.get("/api/dashboard/get", DashBoardAxess.employeegetting);
router.put("/api/:id", DashBoardAxess.employeeput);

module.exports = router;
