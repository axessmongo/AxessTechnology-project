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
                <div class="card">
                    <div class="card-body position-relative">
                        <div className="row">
                            <div className="col-md-10">
                                <p className='text-start mx-2 fs-5 bg-img-1 gold-text-2'>Contact us</p>
                                <p>We’re excited to hear about your project. Schedule a call today and Connect with our experts. At Maticz, We respect your privacy and Never share your details with anyone. Let's build together.</p>
                            </div>
                            <div className="col-md-2 position-absolute footerbg">
                                <img src={frompng} alt="" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <input type="text" name="fname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Firstname' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="text" name="lname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Lastname' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="email" name="lname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='E-mail' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <input type="number" name="lname" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Phone-Number' />
                                </div>
                                <div className="col-md-12 mb-4">
                                    <input type="text" name="description" className='form-control shadow-none border-0 rounded-0 border-bottom text-black;' placeholder='Description' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p>Telegram Us : @axesstechnology.in</p>
                                    <p>WhatsApp : +91 93845 87998</p>
                                </div>
                                <div className="col-md-4">
                                    <p>Phone : 8825781xxxx</p>
                                    <p>Email : salesxxxx@.com</p>
                                </div>
                                <div className="col-md-4">
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black text-white footercontent'>
                <div className='container'>
                    <div className="text-capitalize mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='pt-3'>
                                    <img src={footer} className='bg-black w-75 h-75 mx-5' alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 text-center pt-4">
                                <p className='gold-text-2 fw-bolder'>Visit Us</p>
                                <p className='primary-text text-white'>Tidel Park, GF-04,
                                    No-4, Rajiv Gandhi Salai,
                                    Taramani,
                                    Chennai - 600113.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center text-capitalize mt-4">
                        <div className="col-md-3">
                            <p className='gold-text-2 fw-bolder'>Company</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled '>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white' >About</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Portfolio</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Insights</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Terms & Conditions</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Privacy Policy</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Careers</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-whitetext-decoration-none text-white'>Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className='gold-text-2 fw-bolder'>Service</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled '>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>Web</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>software</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>mobile App</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>IT services</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>Blockchain</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>Metaverse</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>Game</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className='gold-text-2 fw-bolder'>technology</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled text-white '>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>Web 3</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>NFT</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>M2E</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>DeFi</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>DAO</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>IDO</Link></li>
                                    <li><Link to="" className='primary-text text-decoration-none text-white'>AI</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className='gold-text-2 fw-bolder'>Collaborate with us</p>
                            <div className='d-flex justify-content-center'>
                                <ul className='list-unstyled '>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Crypto Exchange</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Crypto Wallet</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>NFT Marketplace</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Binance like Exchange</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Pancakeswap like DEX</Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Opensea like Marketplace
                                    </Link></li>
                                    <li><Link to="" className=' primary-text text-decoration-none text-white'>Launchpad</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <p className='gold-text-2 fw-bolder text-center'>Social media</p>
                                <p className='fw-semibold mt-3 mb-5 text-center'>Follow Us on Social Media.</p>
                                <ul className='list-unstyled d-flex justify-content-center'>
                                    <li><Link><i class="bi bi-facebook mx-2 mb-3 bg-img-1"></i></Link></li>
                                    <li><Link><i class="bi bi-instagram mx-2 mb-1 bg-img-1"></i></Link></li>
                                    <li><Link><i class="bi bi-whatsapp mx-2 mb-1 bg-img-1"></i></Link></li>
                                    <li><Link><i class="bi bi-linkedin mx-2 mb-1 bg-img-1"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <p className='fw-semibold fs-6'> <span className='gold-text-2'>Business Enquiry</span>: +91 93845 87998</p>
                            </div>
                            <div className="col-md-6">
                            <p className='fw-semibold fs-6 text-end'><span className='gold-text-2'>For Job</span>: +91 93614 23585</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-center'>
                    <p className='mb-0 primary-text text-decoration-none text-white'>Copyright © All rights reserved 2024. Axess Technology.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer