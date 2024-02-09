import React, { useState } from 'react';
import logo from '../assets/images/logo/logo.png'
import mandub from '../assets/images/man.png'

function Empproject() {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

    const handleMenuToggle = () => {
        setMenuDisplayed((prevMenuDisplayed) => !prevMenuDisplayed);
    };

    const projects = [
        {   Sno:1,
            id: 1101,
            name: 'Catering',
            description: 'As a catering business, you serve a variety of clients. From family reunions and corporate workshops to civic events and weddings',
            remarks: 'Animation incluid',
            status: 'Process',
            completedate: '12-02-2024'
        },
        {   Sno:2,
            id: 1102,
            name: 'Gift Zone',
            description: 'As the holiday season approaches, finding the perfect gift for a beloved senior citizen',
            remarks: 'normal form added',
            status: 'Process',
            completedate: '21-03-2024'
        },
        {   Sno:3,
            id: 1103,
            name: 'Photography Zone',
            description: 'The professional photography landscape has changed due to the rise of social media and efficacy of content marketing.',
            remarks: 'Different color ',        
            status: '',
            completedate: '11-04-2024'
        }
    ]
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
                      
                        

                            <div className="dashboard-container">
                                <h1 className="bg-img-1 mx-auto">Emp Overall Dashboard</h1>
                                <table className="dashboard-table">
                                <thead>
                            <tr>
                                <th className='text-center'>S.No</th>
                                <th className='text-center'>project Id</th>
                                <th className='text-center'>Task Name</th>
                                <th className='text-center'>Description</th>
                                <th className='text-center'>Resources</th>
                                <th className='text-center'>Remarks</th>
                                <th className='text-center'>Pricing</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Start Date</th>
                                <th className='text-center'>Complete Date</th>

                            </tr>
                        </thead>

                        <thead>
                            {projects.map((project, index) => (
                                <tr key={project.id}>
                                    <td>{index + 1}</td>
                                    <td>{project.taskid }</td>
                                    <td>{project.projectname}</td>
                                    <td>{project.description}</td>
                                    <td>{project.resources}</td>
                                    <td>
                                       <textarea type="text" value={project.remarks}/>
                                    </td>
                                    <td>{project.price}</td>
                                    {/* <td>{project.status}</td> */}
                                    <td>     <textarea
                                                    type="text"
                                                    // value={project.status}
                                                /> </td>
                                    <td>{project.startdate}</td>
                                    <td>{project.enddate}</td>
                                </tr>
                            ))}
                        </thead>

                                </table>
                            </div>   
                    </div>

                </div>
      </section>
    </div>
  )
}

export default Empproject