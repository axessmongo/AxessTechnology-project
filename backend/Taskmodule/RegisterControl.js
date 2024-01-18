const UserModel = require('../Schema.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// postMethod:
const RegisterPost = async (req, res) => {
    try {
        const { fname, lname, email, password, phone } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user instance
        const newUser = new UserModel({
            fname,
            lname,
            email,
            password: hashedPassword,
            phone
        });

        await newUser.save();

        // Send a success response to the client
        res.status(201).json({
            message: "User registered successfully",
            data: newUser
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Couldn't register user"
        });
    }
};

module.exports = { RegisterPost };
