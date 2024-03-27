const NormalSchema = require("../userModel/NormalSchema.js");
const DigitalSchema = require("../userModel/ContactSchema.js");

const postNormalContact = async (req, res) => {
  const { fname, email, lname, address, serviceOption } = req.body;
  try {
    const contact = await NormalSchema.create({
      fname,
      email,
      lname,
      address,
      serviceOption,
    });
    res.status(201).json({
      status: 201,
      msg: "Normal contact added successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postNormalContact };
