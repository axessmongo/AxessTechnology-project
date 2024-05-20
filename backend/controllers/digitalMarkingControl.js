const digitalMarketing = require("../Model/digitalMarket.schema");

const postMarketingDetails = async (req, res) => {
  const { fname, email, phone, website, company, digitalmarketBudget, comments, services } = req.body;
  try {
    const contact = await digitalMarketing.create({
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




module.exports = { postMarketingDetails  };
