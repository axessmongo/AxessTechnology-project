import React, { useState } from 'react';
import logo from '../assets/images/logo/logo.png'
import mandub from '../assets/images/man.png'
import { Link } from 'react-router-dom';

function Empdashboard() {
    const [menuDisplayed, setMenuDisplayed] = useState(false);

    const handleMenuToggle = () => {
        setMenuDisplayed((prevMenuDisplayed) => !prevMenuDisplayed);
    };

    // const projects = [
    //     {   Sno:1,
    //         id: 1101,
    //         name: 'Catering',
    //         description: 'As a catering business, you serve a variety of clients. From family reunions and corporate workshops to civic events and weddings',
    //         remarks: 'Animation incluid',
    //         status: 'Process',
    //         completedate: '12-02-2024'
    //     },
    //     {   Sno:2,
    //         id: 1102,
    //         name: 'Gift Zone',
    //         description: 'As the holiday season approaches, finding the perfect gift for a beloved senior citizen',
    //         remarks: 'normal form added',
    //         status: 'Process',
    //         completedate: '21-03-2024'
    //     },
    //     {   Sno:3,
    //         id: 1103,
    //         name: 'Photography Zone',
    //         description: 'The professional photography landscape has changed due to the rise of social media and efficacy of content marketing.',
    //         remarks: 'Different color ',        
    //         status: 'Pending',
    //         completedate: '11-04-2024'
    //     }
    // ]
    const [projects, setProjects] = useState([
        {
            Sno: 1,
            id: 1101,
            name: 'Catering',
            description: 'As a catering business, you serve a variety of clients. From family reunions and corporate workshops to civic events and weddings',
            remarks: 'Animation included',
            status: 'Process',
            completedate: '12-02-2024'
        },
        {
            Sno: 2,
            id: 1102,
            name: 'Gift Zone',
            description: 'As the holiday season approaches, finding the perfect gift for a beloved senior citizen',
            remarks: 'normal form added',
            status: 'Process',
            completedate: '21-03-2024'
        },
        {
            Sno: 3,
            id: 1103,
            name: 'Photography Zone',
            description: 'The professional photography landscape has changed due to the rise of social media and efficacy of content marketing.',
            remarks: 'Different color ',
            status: 'Pending',
            completedate: '11-04-2024'
        }
    ]);

    const [editMode, setEditMode] = useState(false);
    const [editedProject, setEditedProject] = useState(null);

    const handleEdit = (project) => {
        setEditMode(true);
        setEditedProject({ ...project });
    };

    const handleSave = () => {
        const updatedProjects = projects.map((project) =>
            project.id === editedProject.id ? editedProject : project
        );
        setProjects(updatedProjects);
        setEditMode(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProject((prevProject) => ({
            ...prevProject,
            [name]: value
        }));
    };

    return (
        <div>
            <section>
                <div id="wrapper" className={menuDisplayed ? 'menuDisplayed' : ''}>
                    <div id="sidebar-wrapper" className='position-fixed'>
                        <ul className="sidebar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">checking</a></li>
                        </ul>
                    </div>

                    <div id="page-content-wrapper">
                        <div className='bg-green-1'>
                            <div className='row py-2' >
                                <div className='col-md-4 pt-2 mt-1'>
                                    <a href="#" onClick={handleMenuToggle} className='dash-bt m-3'>
                                        <span className=''>☰ Menu</span>
                                    </a>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={logo} alt="" className='dash-logo' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='d-flex justify-content-end'>
                                        <div>
                                            <img src={mandub} alt="" className='dash-logo' />
                                        </div>
                                        <button className='dash-bt-1 mx-3'>Sign Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" container-fluid popup pt-4">
                            <button
                                type="button"
                                class="gold-btn m-0 green-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Add Project ➕
                            </button>
                            <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog ">
                                    <div class="modal-content">
                                        <div class="modal-header bg-green-1 text-light">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                Project Details
                                            </h1>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div class="modal-body bg">
                                            <div className="form text-center">
                                                <label htmlFor="" className="fs-4 mb-2">
                                                    {" "}
                                                    Project Name
                                                </label>{" "}
                                                <br />
                                                <input
                                                    type="text"
                                                    className="mb-4 text-center"
                                                    placeholder="Project Name"
                                                />
                                                <label className="fs-4 mb-2" htmlFor="">
                                                    Project Complete Date
                                                </label>
                                                <input type="date" className="mb-4 text-center" placeholder="Project Name" />
                                                <br />
                                                <label htmlFor="" className="fs-4 mb-2">
                                                    {" "}
                                                    Description
                                                </label>{" "}
                                                <br />
                                                <textarea className="datemb-4 text-center"></textarea>
                                                <br />
                                                <label for="formFileMultiple" class="form-label fs-4 mb-2">Multiple files upload</label>
                                                <input class="form-control" type="file" id="formFileMultiple" multiple />
                                            </div>
                                        </div>
                                        <div class="modal-footer bg-green-1 text-light">
                                            <button
                                                type="button"
                                                class="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="submit" class="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="dashboard-container">
                                <h1 className="bg-img-1 mx-auto">Employee Dashboard</h1>
                                <table className="dashboard-table">
                                    <thead>
                                        <tr>
                                        <th className='text-center'>S.No</th>
                                            <th className='text-center'>project Id</th>
                                            <th className='text-center'>Project Name</th>
                                            <th className='text-center'>Description</th>
                                            <th className='text-center'>Remarks</th>

                                            <th className='text-center'>Status</th>
                                            <th className='text-center'>Complete Date</th>
                                            <th className='text-center'>Options</th>
                                        </tr>
                                    </thead>
                                   
                                    <thead>
                                        {projects.map((project, index) => (
                                            <tr key={project.id}>
                                                <td>{index + 1}</td>
                                                <td>{project.id}</td>
                                                <td>{project.name}</td>
                                                <td>{project.description}</td>
                                                <td>{project.remarks}</td>

                                                <td>{project.status}</td>
                                                <td>{project.completedate}</td>
                                                <td><Link className='dash-td-bt green-btn mt-2' to='/empproject'>Edit</Link></td>
                                            </tr>
                                        ))}
                                    </thead>

                                </table>
                            </div>    */}
                        <div className="dashboard-container">
                            <h1 className="bg-img-1 mx-auto">Employee Dashboard</h1>
                            <table className="dashboard-table">
                                <thead>
                                    <tr>
                                        <th className='text-center'>S.No</th>
                                        <th className='text-center'>Project Id</th>
                                        <th className='text-center'>Project Name</th>
                                        <th className='text-center'>Description</th>
                                        <th className='text-center'>Remarks</th>
                                        <th className='text-center'>Status</th>
                                        <th className='text-center'>Complete Date</th>
                                        <th className='text-center'>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        <tr key={project.id}>
                                            <td>{index + 1}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <input
                                                    type="text"
                                                    name="id"
                                                    value={editedProject.id}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.id}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editedProject.name}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.name}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <textarea
                                                    type="text"
                                                    name="description"
                                                    value={editedProject.description}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.description}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <input
                                                    type="text"
                                                    name="remarks"
                                                    value={editedProject.remarks}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.remarks}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <input
                                                    type="text"
                                                    name="status"
                                                    value={editedProject.status}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.status}</td>
                                            <td>{editMode && editedProject.id === project.id ? (
                                                <input
                                                    type="text"
                                                    name="completedate"
                                                    value={editedProject.completedate}
                                                    onChange={handleInputChange}
                                                />
                                            ) : project.completedate}</td>
                                            <td>
                                                {editMode && editedProject.id === project.id ? (
                                                    <button onClick={handleSave} className='dash-td-bt green-btn mt-2'>Save</button>
                                                ) : (
                                                    <button onClick={() => handleEdit(project)} className='dash-td-bt green-btn mt-2'>Edit</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Empdashboard