const contactSchema = require("../userModel/ContactSchema");

const Contactpostmethod = async (req, res) => {
  const { fname, email, phone, website, company, digitalmarketBudget, comments, services } = req.body;
  try {
    const contact = await contactSchema.create({
      fname,
      email,
      phone,
      website,
      company,
      digitalmarketBudget,
      comments,
      services,
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



module.exports = {Contactpostmethod,}