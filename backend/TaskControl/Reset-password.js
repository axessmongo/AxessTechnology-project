const userModel = require("../userModel/UserSchema");
const tokenModel = require("../userModel/tokenSchema");
const sendEmail = require("../utils/sendMailer.js");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User with the provided email does not exist",
      });
    }

    // Check if there is already a token for the user, if not, generate a new one
    let token = await tokenModel.findOne({ userId: user._id });

    if (!token) {
      token = await new tokenModel({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const resetUrl = `${process.env.BASE_URL}PasswordReset/${user._id}/${token.token}/`;

    // Send the password reset email
    await sendEmail(user.email, "Password Reset", resetUrl);

    res.status(200).json({
      message: "Password reset link sent to your email account",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// verify password reset link
const verifyPassword = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findOne({ _id: id });

    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await tokenModel.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.status(200).send("Valid Url");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//  set new password:

const setNewPassword = async (req, res) => {
  try {
    const userId = req.params.id;
    const { password } = req.body;

    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({ message: "User not found. Invalid user or link." });
    }

    const token = await tokenModel.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    if (!user.verified) {
      user.verified = true;
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    user.password = hashPassword;
    await user.save();

    // Check if token exists before removing it
    if (token) {
      await token.save();
    } else {
      console.error("Token not found while trying to remove.");
    }

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};





module.exports = { resetPassword, verifyPassword, setNewPassword };
