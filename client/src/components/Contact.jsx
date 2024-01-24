import React from 'react'
import "../assets/css/index.scss"
import "../assets/css/contact.scss"
import Navbar from './Navbar'
import Footer from './Footer'


function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div class="card mt-4 ">
                    <div class="card-body ">
                        <p className='text-center text-capitalize bg-img-1'>request for quote</p>
                        <p className='text-center text-capitalize fw-semibold primary-text'>discuss your project with us.we are waiting to serve your better</p>
                    </div>
                    <div className="row container">
                        <div className="col-md-6 mb-4">
                            <input type="text" name="fname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Firstname' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" name="lname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='lastname' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" name="email" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='E-mail' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" name="phone" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='phone' />
                        </div>
                        <div className="col-12 mb-4">
                            <input type="password" name="password" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Password' />
                        </div>
                    </div>
                    <div className=' container mb-3 mt-3'>
                        <p className='bg-img-1 d-flex text-center'>select service</p>
                        <div className="row">
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_1" type="checkbox" />
                                    <label htmlFor="checkbox_animated_1">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_2" type="checkbox" />
                                    <label htmlFor="checkbox_animated_2">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_3" type="checkbox" />
                                    <label htmlFor="checkbox_animated_3">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_4" type="checkbox" />
                                    <label htmlFor="checkbox_animated_4">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_5" type="checkbox" />
                                    <label htmlFor="checkbox_animated_5">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4  checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_6" type="checkbox" />
                                    <label htmlFor="checkbox_animated_6">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Crypto Exchange Development</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row container mt-2">
                        <div className="col-md-12">
                            <input type="text" name="fname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Project Description' />
                        </div>
                        <div className="mt-3 text-center mb-3" >
                            <button className='gold-btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact