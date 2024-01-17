import React from 'react'
import { Link } from 'react-router-dom'

function About() {

    return (
        <div className=''>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 py-5 my-5">
                        <h1 className="primary-header mb-4 gold-text-1">About Axess</h1>
                        <p className="primary-text fw-medium fs-6">Thriving startups thrive on teams that passionately embody and drive the product vision daily. We establish a dedicated team fully committed to your triumph. You can concentrate on advancing your business objectives while we assure.</p>
                        <p className='primary-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum nobis aperiam illum placeat, eos minus enim voluptatum nisi unde voluptate quia suscipit omnis sequi! Libero totam numquam ipsum blanditiis!

                        </p>
                        <Link to={'/login'} className='gold-btn px-4 gold-btn-1 d-inline-block'>
                            <span className='d-block'>Learn More</span>
                        </Link>
                    </div>
                    <div className="col-lg-5 p-4 my-2">
                        <div className="experience mt-4 rounded-3 px-4">
                            <p className='quotation mt-1' style={{ color: "#b98d2e", margin: "0", padding: "0", }}>  ❝  </p>
                            <p className="primary-text fw-medium fs-6 m-1 " style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque accusantium veniam voluptates numquam eveniet harum saepe, autem minus dolorem.</p>
                            <hr className="py-1 "  ></hr>
                            <div className="col-md-6 p-1">
                                <h5 className='heading6 fs-4' style={{ color: "#b98d2e" }}>Celia Alemedia</h5>
                            </div>
                        </div>
                        <div className="experience mt-4 rounded-3 px-4">
                            <p className='quotation mt-1 ' style={{ color: "#b98d2e", margin: "0", padding: "0", }}>  ❝  </p>
                            <p className="primary-text fw-medium fs-6 m-1 " style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque accusantium veniam voluptates numquam eveniet harum saepe, autem minus dolorem.</p>
                            <hr className="py-1 "  ></hr>
                            <div className="col-md-6 p-1">
                                <h5 className='heading6 fs-4' style={{ color: "#b98d2e" }}>Celia Alemedia</h5>
                            </div>
                        </div>
                        <div className="experience mt-4 rounded-3 px-4">
                            <p className='quotation mt-1 ' style={{ color: "#b98d2e", margin: "0", padding: "0", }}>  ❝  </p>
                            <p className="primary-text fw-medium fs-6 m-1 " style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque accusantium veniam voluptates numquam eveniet harum saepe, autem minus dolorem.</p>
                            <hr className="py-1 "  ></hr>
                            <div className="col-md-6 p-1">
                                <h5 className='heading6 fs-4' style={{ color: "#b98d2e" }}>Celia Alemedia</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About