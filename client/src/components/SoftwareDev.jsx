import React from 'react'
import bubble from '../assets/images/bubble.webp'
import success from '../assets/images/success.png'
import kvrprofile from '../assets/images/kvr profile.png'

import Banner from './Banner'
export default function SoftwareDev() {
    return (
        <div>
            {/* Banner img */}
            <Banner h1='Software Development ' h2='Explain The Benefits Of Automation Testing' h3='Describe our testing methodology and tools' />

            <section>
                
            </section>
            <section className='container py-3'>
                <div className='text-center'>
                    <h1>Our Process</h1>
                    <p>We believe in a collaborative and agile approach to software development. Our process involves: </p>
                </div>

                <div>
                    <div className='row py-2'>
                        <div className='col-md-5 text-end d-flex justify-content-center align-items-center'>
                            <div>
                            <h3>Discovery & Planning</h3>
                            <p>We work closely with you to understand your business goals, challenges, and target audience.</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className=''>
                                <img src={bubble} alt="" className='img-fluid w-75' />
                            </div>
                        </div>
                        <div className='col-md-5'></div>
                    </div>
                </div>

                <div>
                    <div className='row py-2'>
                        <div className='col-md-5'></div>
                        <div className='col-md-2'>
                        <div className=''>
                                <img src={success} alt="" className='img-fluid w-75' />
                            </div>
                        </div>
                        <div className='col-md-5 d-flex justify-content-center align-items-center'>
                            <div>
                        <h3>Design & Prototyping</h3>
                            <p>We create prototypes and mockups to visualize your software and ensure it aligns with your needs.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='row py-2'>
                        <div className='col-md-5 text-end d-flex justify-content-center align-align-items-center'>
                            <div>
                            <h3>Development & Testing</h3>
                            <p>We write clean, efficient, and well-tested code using industry-standard best practices.</p>
                            </div>

                        </div>
                        <div className='col-md-2'>
                            <div className=''>
                                <img src={bubble} alt="" className='img-fluid w-75' />
                            </div>
                        </div>
                        <div className='col-md-5'></div>
                    </div>
                </div>
                
                <div>
                    <div className='row py-2'>
                        <div className='col-md-5'></div>
                        <div className='col-md-2'>
                        <div className=''>
                                <img src={success} alt="" className='img-fluid w-75' />
                            </div>
                        </div>
                        <div className='col-md-5 d-flex justify-content-center align-items-center'>
                            <div>
                        <h3>Deployment & Maintenance</h3>
                            <p>We seamlessly deploy your software and provide ongoing support and maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='testimonal'>

                <div className="container">
                    <h1 className="section-header text-white">
                        client review <span> Lorem ipsum dolor sit amet.</span>
                    </h1>
                    <div className="testimonals">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"     >
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={kvrprofile} alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> Dave Wood</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>

                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={kvrprofile}alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> martin</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>
                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={kvrprofile} alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> sara</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>

                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
