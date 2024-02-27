const DigitalService = require("../userModel/DigitalMarketing.js");

const DigitalMarketing = async (req, res) => {
  console.log("req.body", req.body);

  try {
    const {
      name,
      email,
      phone,
      website,
      company,
      services,
      digitalmarketBudget,
      comments,
    } = req.body;

    // Check if required fields are present
    if (!name || !email) {
      console.log("digi err");
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if email already exists
    const existingContact = await DigitalService.findOne({ email });
    if (existingContact) {
      console.log("Email already exists");
      return res.status(400).json({ error: "Email already exists" });
    }

    console.log("digi control");

    // Create a new digital service
    const contact = await DigitalService.create({
      name,
      email,
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

module.exports = DigitalMarketing;
