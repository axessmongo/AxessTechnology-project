import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo/logo.png'
import mandub from '../assets/images/man.png'
import axios from 'axios';
function Adminproject() {
    const [menuDisplayed, setMenuDisplayed] = useState(false);
    const [projects, setProjects] = useState([])

    const handleMenuToggle = () => {
        setMenuDisplayed((prevMenuDisplayed) => !prevMenuDisplayed);
    };

    const get_data = async () => {
        try {
            let res = await axios.get('/api/dashboard/get');
            console.log(res.data.data);
            setProjects(res.data.data)
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        get_data();
    }, [])
    return (
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

                <div className="dashboard-container">
                    <h1 className="bg-img-1 mx-auto">Overall Dashboard</h1>
                    <table className="dashboard-table">
                        <thead>
                            <tr>

                                <th className='text-center'>project Id</th>
                                <th className='text-center'>Task Name</th>
                                <th className='text-center'>Description</th>
                                <th className='text-center'>Send to Resources</th>
                                <th className='text-center'>Remarks</th>
                                <th className='text-center'>Pricing</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Start Date</th>
                                <th className='text-center'>Complete Date</th>
                                <th className='text-center'>Resource</th>
                                <th className='text-center'>Action</th>
                                {/* <th className='text-center'>Options</th> */}

                            </tr>
                        </thead>

                        <thead>
                            {projects.map((project, index) => (
                                <tr key={project.id}>
                                    <td>{index + 1}</td>
                                    <td>{project.taskid}</td>
                                    <td>{project.projectname}</td>
                                    <td>{project.description}</td>
                                    <td><a href={project.resources} style={{ textDecoration: 'none' }}> {project.resources}</a></td>
                                    <td>{project.remarks}</td>
                                    <td>{project.price}</td>
                                    <td>{project.status}</td>
                                    <td>{project.startdate}</td>
                                    <td>{project.enddate}</td>
                                    <td>{project.resource}</td>
                                </tr>
                            ))}
                        </thead>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Adminproject
