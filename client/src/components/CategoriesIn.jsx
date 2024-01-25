import React, { useState } from 'react'
import Reactlogo from '../assets/images/demo/react-logo.png'
import vitelogo from '../assets/images/demo/vite-logo.png'
import watchdemo from '../assets/images/demo/watch screenshot.png'
import photodemo from '../assets/images/demo/photography.png'
import cateringdemo from '../assets/images/demo/catering.png'
import gitfdemo from '../assets/images/demo/gift.png'
import portfolio1 from '../assets/images/demo/porfolio1.png'
import portfolio2 from '../assets/images/demo/porfolio2.png'


export default function CategoriesIn() {
    const [activeTab, setActiveTab] = useState('pills-ecommerce')
    return (
        <div>
            {/* <section >
                <div className="container">
                    <div className="row">
                        <div className='d-flex  mt-5 text-content border-bottom border-danger'>
                            <div className="col-md-2 content">ECommerce</div>


                            
                            <div className="col-md-2 content">Portfolio</div>
                            <div className="col-md-2 content ">Bussiness</div>
                            <div className="col-md-2 content">Insurance</div>
                            <div className="col-md-2 content">Hospital</div>
                            <div className="col-md-2 content">School </div>
                        </div>

                    </div>
                </div>

            </section> */}

            <div className="cat">
                <div className="overflow-hidden" id="resume">
                    <div className="text-md-center text-center mt-5">
                        <h1> Categories</h1>
                    </div>
                    <div className="row  mt-5 text-content">
                        <div className="nav-div rounded-4 ">
                            <ul className="nav nav-pills mb-3 text-center justofy-content-center" id="pills-tab" role="tablist" >
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className=" ">
                                        <div
                                            className="nav-link active content"
                                            id="pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-ecommerce"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-ecommerce"
                                            aria-selected="true"
                                        >
                                            <h4>Ecommerce</h4>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className="  ">
                                        <div
                                            className="nav-link content"
                                            id="pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-profile"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-profile"
                                            aria-selected="true"



                                        >
                                            <h4>Portfolio</h4>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className="  ">
                                        <div
                                            className="nav-link content"
                                            id="pills-bussiness-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-bussiness"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-bussiness"
                                            aria-selected="true"

                                        >
                                            <h4>Bussiness</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className="  ">
                                        <div
                                            className="nav-link content"
                                            id="pills-insurance-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-insurance"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-insurance"
                                            aria-selected="true"

                                        >
                                            <h4>Insurance</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className="  ">
                                        <div
                                            className="nav-link content"
                                            id="pills-hospital-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-hospital"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-hospital"
                                            aria-selected="true"

                                        >
                                            <h4>Hospital</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item col-md-2" role="presentation">
                                    <div className="  ">
                                        <div
                                            className="nav-link content"
                                            id="pills-school-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-school"
                                            type="div"
                                            role="tab"
                                            aria-controls="pills-school"
                                            aria-selected="true"

                                        >
                                            <h4>School</h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade show"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                        >
                            <section>
                                <div className='container py-4 my-3'>
                                    <div className='text-center pb-2'>
                                        <h3>We Create Products That Users Love</h3>
                                        <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>

                                            <div className=' p-1' style={{ backgroundColor: ' #05463c' }}>
                                                <img src={gitfdemo} alt="" className='img-fluid' />
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='py-3'>
                                                <h3>E-Commerce</h3>
                                                <div className='py-3'>
                                                    <img src={vitelogo} alt="" className='img-fluid w-25' />
                                                </div>
                                                <div className='pt-2'>
                                                    <h3>Gift Zone</h3>
                                                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                        Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                        repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                    <div className='pt-2'>
                                                        <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='bg-green-1'>
                                <div className='container text-light py-4 my-3'>
                                    <div className='text-center'>
                                        <h3>We Create Products That Users Love</h3>
                                        <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='py-3'>
                                                <h3>E-Commerce</h3>
                                                <div className='py-3'>
                                                    <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                </div>
                                                <div className='pt-2'>
                                                    <h3>Time Zone</h3>
                                                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                        Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                        repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>

                                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='p-1' style={{ backgroundColor: 'gray' }}>
                                                <img src={watchdemo} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                        >
                            <div>
                                <section>
                                    <div className='container py-4 my-3'>
                                        <div className='text-center pb-2'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>

                                                <div className=' p-1' style={{ backgroundColor: ' #05463c' }}>
                                                    <img src={portfolio2} alt="" className='img-fluid' />
                                                </div>

                                            </div>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>Portfolio</h3>
                                                    <div className='py-3'>
                                                        <img src={vitelogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Individual</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='bg-green-1'>
                                    <div className='container text-light py-4 my-3'>
                                        <div className='text-center'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>Portfolio</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Individual</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>

                                                        <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='p-1' style={{ backgroundColor: 'gray' }}>
                                                    <img src={portfolio1} alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-bussiness"
                            role="tabpanel"
                            aria-labelledby="pills-bussiness-tab"
                            tabindex="0"
                        >
                            <div>
                                <section>
                                    <div className='container py-4 my-3'>
                                        <div className='text-center pb-2'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* <div>
                            <img src="https://maticz.com/assets/images/home/nft_img.webp" alt="" className='img-fluid' />
                        </div> */}

                                                <div className=' p-1' style={{ backgroundColor: ' #05463c' }}>
                                                    <img src={photodemo} alt="" className='img-fluid' />
                                                </div>

                                            </div>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>Business</h3>
                                                    <div className='py-3'>
                                                        <img src={vitelogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Photography</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='bg-green-1'>
                                    <div className='container text-light py-4 my-3'>
                                        <div className='text-center'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>Business</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Catering</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>

                                                        <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='p-1' style={{ backgroundColor: 'gray' }}>
                                                    <img src={cateringdemo} alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-insurance"
                            role="tabpanel"
                            aria-labelledby="pills-insurance-tab"
                            tabindex="0"
                        >
                            <div>
                                <section className='container'>
                                    <div className='py-4 my-3'>
                                        <div className='text-center pb-2'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                                                <img src="https://maticz.com/assets/images/home/launchpad_img.webp" alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Time Zone (Watch)</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section className='bg-green-1'>
                                    <div className='container text-light py-4 my-3'>
                                        <div className='text-center'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Thamil</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2 text-end'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src="https://maticz.com/assets/images/home/tokenomics_img.webp" alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-hospital"
                            role="tabpanel"
                            aria-labelledby="pills-hospital-tab"
                            tabindex="0"
                        >
                            <div>
                                <section className='container'>
                                    <div className='py-4 my-3'>
                                        <div className='text-center pb-2'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                                                <img src="https://maticz.com/assets/images/home/launchpad_img.webp" alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Time Zone (Watch)</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section className='bg-green-1'>
                                    <div className='container text-light py-4 my-3'>
                                        <div className='text-center'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Thamil</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2 text-end'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src="https://maticz.com/assets/images/home/tokenomics_img.webp" alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-school"
                            role="d"
                            aria-labelledby="pills-school-tab"
                            tabindex="0"
                        >
                            <div>
                                <section className='container'>
                                    <div className='py-4 my-3'>
                                        <div className='text-center pb-2'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                                                <img src="https://maticz.com/assets/images/home/launchpad_img.webp" alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Time Zone (Watch)</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section className='bg-green-1'>
                                    <div className='container text-light py-4 my-3'>
                                        <div className='text-center'>
                                            <h3>We Create Products That Users Love</h3>
                                            <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='py-3'>
                                                    <h3>E-Commerce</h3>
                                                    <div className='py-3'>
                                                        <img src={Reactlogo} alt="" className='img-fluid w-25' />
                                                    </div>
                                                    <div className='pt-2'>
                                                        <h3>Thamil</h3>
                                                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                                            Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                                            repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                                        <div className='pt-2 text-end'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src="https://maticz.com/assets/images/home/tokenomics_img.webp" alt="" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
