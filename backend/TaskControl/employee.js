const employeeusermodel = require("../userModel/employeeSchema.js");

const Employerpost = async (req, res) => {
  const {
    projectname,
    taskid,
    description,
    startdate,
    remarks,
    enddate,
    price,
  } = req.body;

  try {
    const employee = await employeeusermodel.create({
      projectname,
      taskid,
      description,
      startdate,
      remarks,
      enddate,
      price,
    });

    res.status(201).json({
      status: 201,
      msg: "Created employee",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const employeegetting = async (req, res) => {
  try {
    const employees = await employeeusermodel.find();

    res.status(200).json({
      message: "Employee details retrieved",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const employeeput = async (req, res) => {
  const id = req.params.id;
  const updateBody = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid employee ID" });
    }

    const employee = await employeeusermodel.findByIdAndUpdate(id, updateBody, {
      new: true,
    });

    // Check if employee with given id exists
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee has been updated",
      data: employee,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { Employerpost, employeegetting, employeeput };
