const DigitalService = require("../userModel/DigitalMarketing.js");

const DigitalMarketing = async (req, res) => {
  try {
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

    // Check if required fields are present
    if (!name || !email || !serviceOption) {
      return res.status(400).json({ error: "Missing required fields" });
    }
      console.log("digi control")
    // Create a new digital service
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

module.exports = { DigitalMarketing };
