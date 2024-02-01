import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../assets/images/footer.svg'
import frompng from '../assets/images/fromlogo.jpg'
// import contact  from '../assets/images/contact.jpg'
import "../assets/css/index.scss"



function Footer() {
    return (
        <div>
            <div className="container mt-4 conatctbg">
                <div className="card">
                    <div className="card-body position-relative">
                        <div className="row">
                            <div className="col-md-10">
                                <p className='text-start mx-2 fs-5 bg-img-1 gold-text-2' data-aos ='zoom-out'>Contact us</p>
                                <p data-aos ='zoom-out'>We’re excited to hear about your project. Schedule a call today and Connect with our experts. At Axess, We respect your privacy and Never share your details with anyone. Let's build together.</p>
                            </div>
                            <div className="col-md-2 position-absolute footerbg">
                                <img src={frompng} alt="" />
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input data-aos ='zoom-out' type="text" name="fname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Firstname' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input data-aos ='zoom-out' type="text" name="lastname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Lastname' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input data-aos ='zoom-out' type="email" name="email" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='E-mail' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input data-aos ='zoom-out' type="number" name="ph_no" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Phone-Number' />
                                </div>
                                <div className="col-md-12 mb-4">
                                    <input data-aos ='zoom-out' type="text" name="description" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Description' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4" data-aos ='zoom-out'>
                                    <p>Telegram Us : @axesstechnology.in</p>
                                    <p>WhatsApp : +91 93845 xxxxx</p>
                                </div>
                                <div className="col-md-4" data-aos ='zoom-out'>
                                    <p>Phone : 8825781xxxx</p>
                                    <p>Email : salesxxxx@.com</p>
                                </div>
                                <div className="col-md-4" data-aos ='zoom-out'>
                                    <button className='gold-btn m-0 green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white footercontent'>
                <div className='container'>
                    <div className="text-capitalize mt-5">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className='col-10 mx-auto'>
                                    <img src={footer} className='' data-aos = 'zoom-out' data-aos-duration='700' alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 text-center pt-4" data-aos ='fade-up' data-aos-duration='700'>
                                <p className='gold-text-2 fw-bolder'>Visit Us</p>
                                <p className='primary-text text-white'>Tidel Park,<br /> GF-04,
                                    No-4, Rajiv Gandhi Salai,
                                    Taramani,<br />
                                    Chennai - 600113.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center text-capitalize mt-0 py-md-5 my-md-5 g-4 g-md-0">
                        <div className="col-6 col-md-4" data-aos = 'fade-up' data-aos-duration='700'>
                            <p className='gold-text-2 fw-bolder'>Why Axess?</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled '>
                                    <li><Link to="/" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white' >Home</Link></li>
                                    <li><Link to="/about" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>About</Link></li>
                                    <li><Link to="/services" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Services</Link></li>
                                    <li><Link to="/ourworks" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Our Works</Link></li>
                                    <li><Link to="/contact" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-4" data-aos = 'fade-up' data-aos-duration='700'>
                            <p className='gold-text-2 fw-bolder'>Our Services</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled '>
                                    <li><Link to="/webdevelopment" className='primary-text text-decoration-none text-white'>Web development</Link></li>
                                    <li><Link to="/development" className='primary-text text-decoration-none text-white'>software development</Link></li>
                                    <li><Link to="/testing" className='primary-text text-decoration-none text-white'>software Testing</Link></li>
                                    <li><Link to="digitalmarketing" className='primary-text text-decoration-none text-white'>Digital Marketing</Link></li>
                                    {/* <li><Link to="" className='primary-text text-decoration-none text-white'>UI Desigining</Link></li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos = 'fade-up' data-aos-duration='700'>
                            <div>
                                <p className='gold-text-2 fw-bolder text-center mb-1'>Social media</p>
                                <p className='text-center primary-text mb-3'>Follow Us on Social Media.</p>
                                <ul className='list-unstyled d-flex justify-content-center'>
                                    <li><Link><i className="bi bi-facebook mx-2 mb-3 bg-img-1"></i></Link></li>
                                    <li><Link><i className="bi bi-instagram mx-2 mb-1 bg-img-1"></i></Link></li>
                                    <li><Link><i className="bi bi-whatsapp mx-2 mb-1 bg-img-1"></i></Link></li>
                                    <li><Link><i className="bi bi-linkedin mx-2 mb-1 bg-img-1"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="row text-center text-md-start">
                            <div className="col-md-6" data-aos = 'zoom-in-right' data-aos-anchor-placement="top-bottom" data-aos-duration='700'>
                                <p className='fw-semibold fs-6'> <span className='gold-text-2'>Business Enquiry</span> <span className='primary-text'>: +91 93845 xxxxx</span></p>
                            </div>
                            <div className="col-md-6" data-aos = 'zoom-in-left' data-aos-anchor-placement="top-bottom" data-aos-duration='700'>
                                <p className='fw-semibold fs-6 text-md-end'><span className='gold-text-2'>For Jobs</span><span className="primary-text"> : +91 93614 xxxxx</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='m-0' />
                <div className='text-center'>
                    <p className='mb-0 py-3 primary-text text-decoration-none text-white'>Copyright © All rights reserved 2024. Axess Technology.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer