const employeeusermodel = require('../userModel/employeeSchema.js');

const Employerpost = async (req, res) =>{
    const {projectname, taskid, description, startdate, remarks, enddate, price } = req.body;

    try {
        const employee = await employeeusermodel.create({
            projectname,
            taskid,
            description,
            startdate,
            remarks,
            enddate,
            price
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
}


const employeegetting = async (req, res) => {
    try {
        const employees = await employeeusermodel.find();
        
        res.status(200).json({
            message: "Employee details retrieved",
            data: employees
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}


module.exports = { Employerpost, employeegetting };