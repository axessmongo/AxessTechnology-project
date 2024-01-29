import React from 'react'
import Banner from './Banner'
import bubble from '../assets/images/bubble.webp'
import success from '../assets/images/success.png'
import whychoose from  '../assets/images/why-img-1.png'
import why from '../assets/images/why-choose-img.webp'

function Testingpage() {
    return (
        <section>
            {/* Banner sec */}
            <Banner h1='Software Testing' h2='Explain The Benefits Of Automation Testing' h3='Describe our testing methodology and tools' />
            
            {/* Content sec */}
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

             {/* <div className='bg-green-1 text-light py-5'>
                <div className='text-center'>
                    <h1>Why Choose Us</h1>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div >
                            <div>
                                <div>
                                    <img src={success} alt=""className='img-fluid w-25' />
                                </div>
                                <h3>Experienced Team</h3>
                                <p>Our team has a proven track record of delivering successful software projects for clients across diverse industries.</p>
                            </div>

                            <div>
                                <div>
                                    <img src={success} alt=""className='img-fluid w-25' />
                                </div>
                                <h3>Experienced Team</h3>
                                <p>Our team has a proven track record of delivering successful software projects for clients across diverse industries.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <img src={why} alt="" />
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div>
                            <div>
                                <div>
                                    <img src={success} alt=""className='img-fluid w-25' />
                                </div>
                                <h3>Experienced Team</h3>
                                <p>Our team has a proven track record of delivering successful software projects for clients across diverse industries.</p>
                            </div>

                            <div>
                                <div>
                                    <img src={success} alt=""className='img-fluid w-25' />
                                </div>
                                <h3>Experienced Team</h3>
                                <p>Our team has a proven track record of delivering successful software projects for clients across diverse industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div> */}
             <div className='container'>
                <h3 className='text-center mt-5'>Our Expertise</h3>
                <p className='text-center'>We are a team of experienced and passionate software developers who specialize in crafting cutting-edge solutions tailored to your specific needs. We have a deep understanding of various technologies and frameworks, including
                </p>
                <div className="expertise-container">
                    <div className="expertise-section">
                        <h2>Programming Languages</h2>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                    <div className="expertise-section">
                        <h2>Web Development Frameworks</h2>
                        <ul>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Vue.js</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>And others...</li>
                        </ul>
                    </div>
                    <div className="expertise-section">
                        <h2>Mobile Development Frameworks</h2>
                        <ul>
                            <li>Flutter</li>
                            <li>React Native</li>
                            <li>Kotlin</li>
                            <li>Swift</li>
                        </ul>
                    </div>
                    <div className="expertise-section">
                        <h2>Cloud Platforms</h2>
                        <ul>
                            <li>AWS</li>
                            <li>Azure</li>
                            <li>Google Cloud Platform</li>
                            <li>And others...</li>
                        </ul>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Testingpage