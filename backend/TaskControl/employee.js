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
    resources,
    status,
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
      resources,
      status,
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

  try {
    const object = await employeeusermodel.findByIdAndUpdate(
      id,
      req.body, 
      { new: true }
    );

    res.status(200).json({
      message: 'Success',
      data: object,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating object by ID',
      error: error.message,
    });
  }
}

module.exports = { Employerpost, employeegetting, employeeput };
