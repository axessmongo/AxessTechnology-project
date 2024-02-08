const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    projectname: {
        type: String,
        required: true
    },
    taskid: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    resources:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

const employer = mongoose.model('employer', EmployeeSchema);

module.exports = employer;