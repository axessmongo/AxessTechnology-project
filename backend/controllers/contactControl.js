const ContactSchema = require("../Model/contact.schema");

const postContactDetails = async (req, res) => {
  const { fname, email, lname, address, serviceOption } = req.body;
  try {
    const contact = await ContactSchema.create({
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

module.exports = { postContactDetails };
