const contactSchema = require("../userModel/ContactSchema.js");

const Contactpostmethod = async (req, res) => {
  const { fname, email, phone, website, company, digitalmarketBudget, comments, } = req.body;
  try {
    const contact = await contactSchema.create({
      fname,
      email,
      phone,
      website,
      company,
      digitalmarketBudget,
      comments,
      // services,
    });
    res.status(201).json({
      status: 201,
      msg: "Digital contact added successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Contactpostmethod };



// Define contactgetmethod to handle GET requests for retrieving contacts
const contactgetmethod = async (req, res) => {
  try {
    const contacts = await contactSchema.find({});
    res.status(200).json({
      status: 200,
      msg: "Digital contacts retrieved successfully",
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {Contactpostmethod,contactgetmethod}