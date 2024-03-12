const ContactSchema =require("../userModel/TestingSchema.js");


const postmethod = async (req, res) => {
  const {
    fname,
    email,
    lname,
    company,
    website,
    commands,
    serviceOption,
    phone,
  } = req.body;
  try {
    const contact = await ContactSchema.create({
      fname,
      email,
      lname,
      company,
      website,
      commands,
      serviceOption,
      phone,
    });
    res.status(201).json({
      status: 201,
      msg: "Normal contact",
      data: contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports ={postmethod}
