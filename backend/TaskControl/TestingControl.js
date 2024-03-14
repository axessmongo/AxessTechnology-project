const ContactSchema = require("../userModel/TestingSchema.js");

const postmethod = async (req, res) => {
  const {
    fname,
    email,
    company,
    website,
    commands,
    SocialMediaMarketing,
    PerformanceMarketing,
    WebsiteDevelopment,
    InfluencerMarketing,
    BrandingSolution,
    SearchEngineOptimization,
    phone
  } = req.body;

  try {
    const contact = await ContactSchema.create({
      fname,
      email,
      company,
      website,
      commands,
      SocialMediaMarketing,
      PerformanceMarketing,
      WebsiteDevelopment,
      InfluencerMarketing,
      BrandingSolution,
      SearchEngineOptimization,
      phone
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

module.exports = { postmethod };
