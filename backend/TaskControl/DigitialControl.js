const DigitalService = require("../userModel/DigitalMarketing.js");

const DigitalMarketing = async (req, res) => {
  
  const {
    name,
    email,
    address,
    serviceOption,
    phone,
    website,
    company,
    services,
    digitalmarketBudget,
    comments,
  } = req.body;

  try {
    const contact = await DigitalService.create({
      name,
      email,
      address,
      serviceOption,
      phone,
      website,
      company,
      services,
      digitalmarketBudget,
      comments,
    });
    res.status(201).json(contact);
  } catch (error) {
    // Handle errors
    console.error("Error creating digital marketing service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {DigitalMarketing};
