import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../assets/images/footer.svg'

function Footer() {
    return (
        <div>
            <div className='container-fluid'>
                <div className="text-capitalize mt-3">
                    <div className="row">
                        <div className="col-md-5">
                            <div className='pt-3'>
                                <img src="https://maticz.com/assets/images/home/mdu.svg" className='bg-black' alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <p>Visit Us</p>
                            <p>No.8, Sokkanadhar Street,
                                Thirunagar, Madurai -625006,
                                Tamilnadu, India</p>
                        </div>
                        <div className="col-md-4">
                            <p className='text-center'>Newsletter</p>
                            <p>Subscribe or newsletter to
                                get more
                                technology updates.</p>
                            <div class="mb-3 text-start">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="" placeholder="E-mail.com" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="bi bi-arrow-right-circle" style={{ backgroundColor: 'transparent' }}></i>
                                        </span>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-center text-capitalize mt-4">
                    <div className="col-1 col-md-2">
                        <p>Company</p>
                        <div className='d-flex justify-content-center'>
                            <ul className='list-unstyled '>
                                <li><Link to="" className='text-decoration-none'>About</Link></li>
                                <li><Link to="" className='text-decoration-none'>Portfolio</Link></li>
                                <li><Link to="" className='text-decoration-none'>Insights</Link></li>
                                <li><Link to="" className='text-decoration-none'>Terms & Conditions</Link></li>
                                <li><Link to="" className='text-decoration-none'>Privacy Policy</Link></li>
                                <li><Link to="" className='text-decoration-none'>Careers</Link></li>
                                <li><Link to="" className='text-decoration-none'>Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-2">
                        <p>Service</p>
                    </div>
                    <div className="col col-md-2">
                        <p>solution</p>
                    </div>
                    <div className="col col-md-2">
                        <p>product</p>
                    </div>
                    <div className="col col-md-4">
                        <p>social media</p>
                        <p className=''>Follow Us on Social Media.</p>
                        <div className="d-flex justify-content-center">
                            <ul className="list-unstyled d-flex">
                                <li><i class="bi bi-facebook mx-2"></i></li>
                                <li><i class="bi bi-facebook mx-2"></i></li>
                                <li><i class="bi bi-facebook mx-2"></i></li>
                                <li><i class="bi bi-facebook mx-2"></i></li>
                            </ul>
                        </div>
                        <div className='text-center '>
                            <p>Business Enquiry: +91 93845 87998</p>
                        </div>
                        <p>For Job: +91 93614 23585</p>

                    </div>
                </div>
            </div>
            <hr />
            <div className='text-center'>
                <p>Copyright © 2024 Maticz Technologies Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer