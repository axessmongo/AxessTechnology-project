import React from 'react'
import Awardimg from '../assets/images/Award-img.webp'

function Award() {
    return (
        <section className='container py-3 mb-5'>
            <div>
                <p className='bg-img-1'>Award-winning</p>
                <h1>Software Development <br /> Company</h1>
            </div>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <div>
                        <img src={Awardimg} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-8 d-flex flex-column justify-content-around'>
                    <div>
                        <p className='secondary-text'>Axess is a leading software development company that specializes in providing a full range of enterprise solutions to satisfy the particular needs of your company. We are more than just a team of skilled developers and designers; we are visionary creators who believe in transforming possibilities into realities.</p>
                        <p className='secondary-text'>Our goal is to deliver innovative, tailor-made software solutions that not only meet but exceed expectations, paving the way for our client's success. We embrace the latest trends and best practices, always staying one step ahead to ensure our clients gain a competitive advantage in their markets.</p>
                    </div>

                    <div className='row g-3 mb-5'>
                        <div className='col-6'>
                            <div className='card'>
                                <p className='py-2 mb-0'><i class="bi bi-check-circle-fill m-0 ps-3 pe-5"></i>Years of Expertise</p>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className='card'>
                                <p className='py-2 mb-0'><i class="bi bi-check-circle-fill m-0 ps-3 pe-5"></i>In-House Professionals</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card'>
                                <p className='py-2 mb-0'><i class="bi bi-check-circle-fill m-0 ps-3 pe-5"></i>300+ Projects Wrapped Up</p>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className='card'>
                                <p className='py-2 mb-0'><i class="bi bi-check-circle-fill m-0 ps-3 pe-5"></i>100% Client Approval Score</p>
                            </div>
                        </div>
                    </div>

                    <div className="row yellow-card bg-axess-gold-3 text-dark text-center py-4 rounded-1">
                        <div className="col-4 border-end border-dark">
                            <h1 className='secondary-header'>50<sup>+</sup></h1>
                            <p className='secondary-text mb-0'>COUNTRIES</p>
                        </div>
                        <div className="col-4 border-end border-dark">
                            <h1 className='secondary-header'>300<sup>+</sup></h1>
                            <p className='secondary-text mb-0'>PROJECTS DELIVERED</p>
                        </div>
                        <div className="col-4">
                            <h1 className='secondary-header'>350<sup>+</sup></h1>
                            <p className='secondary-text mb-0'>TOTAL PROJECTS</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Award