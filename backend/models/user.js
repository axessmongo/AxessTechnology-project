const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone: { type: Number, required: true }, 
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "1d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		fname: Joi.string().required().label("First Name"),
		lname: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		phone: Joi.number().required().label("Phone"),
		password:Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
