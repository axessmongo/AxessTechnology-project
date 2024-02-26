const contactSchema = require("../userModel/ContactSchema.js");

const Contactpostmethod = async (req, res) => {
  const { fname, lname, email, address, serviceOption } = req.body;
  console.log("contact", req.body);
  try {
    // Create a new contact using the data from the request body
    const contact = await contactSchema.create({
      fname,
      lname,
      email,
      address,
      serviceOption
    });

    // Respond with a success message and the created contact data
    res.status(201).json({
      status: 201,
      msg: "Created contact",
      data: contact,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Contactpostmethod };
