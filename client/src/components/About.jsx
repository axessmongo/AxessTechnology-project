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
                        </p>
                        <Link to={'/login'} className='gold-btn px-4 gold-btn-1 d-inline-block'>
                            <span className='d-block'>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About