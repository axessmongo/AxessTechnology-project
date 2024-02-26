import React from 'react'
import Awardimg from '../assets/images/Award-img1.png'

function Award() {
    return (
        <section className='container py-3 mb-5'>
            <div>
                <p className='bg-img-1 mx-auto mx-lg-0' data-aos='fade-up'>Award-winning</p>
                <h1 data-aos='fade-up'>Software Development Company</h1>
            </div>
            <div className='row g-5'>
                <div className='col-md-4'>
                    <div>
                        <img src={Awardimg} alt="" data-aos='flip-right' data-aos-duration='600' className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-8 d-flex flex-column justify-content-around'>
                    <div data-aos='fade-up' data-aos-duration='600'>
                        <p className='secondary-text'>Axess, a premier software development firm, excels in crafting bespoke enterprise solutions tailored to your company's unique requirements. Beyond mere technical expertise, we embody visionary creativity, adept at turning potential into tangible achievements.</p>
                        <p className='secondary-text'>Our mission? To furnish groundbreaking, customized software solutions that surpass expectations, propelling our clients towards unparalleled success. We remain at the forefront of industry trends and standards, ensuring our clients maintain a competitive edge in their respective markets.</p>
                    </div>
            
                    <div className='row g-3 mb-5'>
                        <div className='col-md-6'>
                            <div className='card h-100' data-aos='fade-up' data-aos-duration='400'>
                                <p className='py-2 mb-0 d-flex'><i className="bi bi-check-circle-fill m-0 px-4 ps-lg-3 pe-lg-5 h-100"></i>Years of Expertise</p>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className='card h-100' data-aos='fade-up' data-aos-duration='500'>
                                <p className='py-2 mb-0 d-flex'><i className="bi bi-check-circle-fill m-0 px-4 ps-lg-3 pe-lg-5 h-100"></i>In-House Professionals</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card h-100' data-aos='fade-up' data-aos-duration='600'>
                                <p className='py-2 mb-0 d-flex'><i className="bi bi-check-circle-fill m-0 px-4 ps-lg-3 pe-lg-5 h-100"></i>25+ Projects Wrapped Up</p>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className='card h-100' data-aos='fade-up' data-aos-duration='700'>
                                <p className='py-2 mb-0 d-flex'><i className="bi bi-check-circle-fill m-0 px-4 ps-lg-3 pe-lg-5 h-100"></i>100% Client Approval Score</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="row yellow-card bg-axess-gold-3 text-dark text-center py-4 rounded-1 g-4 g-md-0 align-items-center" data-aos='fade-left' data-aos-duration='500'>
                            <div className="col-md-4 border-end border-dark">
                                <h1 className='secondary-header'>12<sup>+</sup></h1>
                                <p className='secondary-text mb-0'>COUNTRIES</p>
                            </div>
                            <div className="col-md-4 border-end border-dark">
                                <h1 className='secondary-header'>25<sup>+</sup></h1>
                                <p className='secondary-text mb-0'>PROJECTS DELIVERED</p>
                            </div>
                            <div className="col-md-4">
                                <h1 className='secondary-header'>8<sup>+</sup></h1>
                                <p className='secondary-text mb-0'>YEARS OF EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Award