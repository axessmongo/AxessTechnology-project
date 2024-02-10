import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Empdashboard from './Empdashboard'

function Empreg() {
    const nav = useNavigate()
    const [values, setValues] = useState({
        projectname: '',
        taskid: '',
        startdate: '',
        enddate: '',
        remarks: '',
        resources: '',
        status: '',
        price: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, you can access form values through 'values' state
        console.log(values);
        nav("/Empdashboard")
        
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="projectname" className="form-label">Project Name</label>
                            <input type="text" className="form-control" onChange={handleChange} id="projectname" name='projectname' value={values.projectname} placeholder="Project Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="taskid" className="form-label">Task ID</label>
                            <input type="text" className="form-control" onChange={handleChange} id="taskid" name='taskid' value={values.taskid} placeholder="Task ID" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="startdate" className="form-label">Start Date</label>
                            <input type="date" className="form-control" onChange={handleChange} id="startdate" name='startdate' value={values.startdate} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="enddate" className="form-label">End Date</label>
                            <input type="date" className="form-control" onChange={handleChange} id="enddate" name='enddate' value={values.enddate} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="remarks" className="form-label">Remarks</label>
                            <input type="text" className="form-control" onChange={handleChange} id="remarks" name='remarks' value={values.remarks} placeholder="Remarks" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="resources" className="form-label">Resources</label>
                            <input type="text" className="form-control" onChange={handleChange} id="resources" name='resources' value={values.resources} placeholder="Resources" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <input type="text" className="form-control" onChange={handleChange} id="status" name='status' value={values.status} placeholder="Status" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" onChange={handleChange} id="price" name='price' value={values.price} placeholder="Price" />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button type="submit" className='btn btn-primary text-center'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Empreg
