import React, { useState } from 'react'
import Reactlogo from '../assets/images/demo/react-logo.png'
import vitelogo from '../assets/images/demo/vite-logo.png'
import watchdemo from '../assets/images/demo/watch.png'
import photodemo from '../assets/images/demo/photography.png'
import cateringdemo from '../assets/images/demo/catering.png'
import gitfdemo from '../assets/images/demo/gift.png'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import portfolio1 from '../assets/images/demo/porfolio1.png'
import portfolio2 from '../assets/images/demo/porfolio2.png'
import categoriesimg1 from '../assets/images/categories-img1.webp'
import categoriesimg2 from '../assets/images/categories-img2.webp'
import categoriesimg3 from '../assets/images/categories-img3.webp'
import categoriesimg4 from '../assets/images/categories-img4.webp'
import categoriesimg5 from '../assets/images/categories-img5.webp'
import categoriesimg6 from '../assets/images/categories-img6.webp'
import { Link } from 'react-router-dom'








export default function CategoriesIn() {

    return (
        <div>
            <Navbar />
            <Banner h1='Categories' h2='Get started with 900+ free, customizable templates, a smart drag and drop editor, tools to boost your online presence and more.' h3='Collaborate with us' />
            <div className="cat">
                <div className="" id="resume">
                    <div className="text-md-center text-center mt-5">
                    </div>
                    <div className="container">
                        <div className="row mt-5 text-content ">
                            <div className="nav-div rounded-4 ">
                                <ul className="nav nav-pills mb-3 text-center justofy-content-center" id="pills-tab" role="tablist" >
                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className=" ">
                                            <div
                                                className="nav-link active content"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                <p className='secondary-text m-0'>Ecommerce</p>
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
                                                <p className='secondary-text m-0'>Portfolio</p>
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
                                                <p className='secondary-text m-0'>Bussiness</p>
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
                                                <p className='secondary-text m-0'>Insurance</p>
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
                                                <p className='secondary-text m-0'>Hospital</p>
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
                                                <p className='secondary-text m-0'>School</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade active show"
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
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-evenly'>
                                                <div className='pt-2 demo-bts'>
                                                    <button className='gold-btn m-0 green-btn'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                </div>
                                                <div className='pt-2 '>
                                                   <Link to={"/webdevelopment"} className='text-decoration-none'><button className='gold-btn m-0 green-btn'><span className='d-block'>Pricing</span> <i className="bi bi-arrow-right"></i></button></Link> 
                                                </div>
                                                <div className='pt-2'>
                                                <Link to={"/contact"} className='text-decoration-none'> <button className='gold-btn m-0 green-btn'><span className='d-block'>BuyNow</span> <i className="bi bi-arrow-right"></i></button></Link>
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
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-evenly'>
                                                <div className='pt-2'>
                                                    <button className='gold-btn m-0'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                </div>
                                                <div className='pt-2'>
                                                    <button className='gold-btn m-0'><span className='d-block'>Pricing</span> <i className="bi bi-arrow-right"></i></button>
                                                </div>
                                                <div className='pt-2'>
                                                    <button className='gold-btn m-0'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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
                                                        <button className='gold-btn m-0'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                    </div>
                                                    <div className='pt-2'>
                                                        <button className='gold-btn m-0'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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

                                                    <div className='pt-2'>
                                                        <button className='gold-btn m-0'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                    </div>
                                                    <div className='pt-2'>
                                                        <button className='gold-btn m-0'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
                                                    </div>
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
                                                            <button className='gold-btn m-0'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
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
                                                <img src={categoriesimg1} alt="" className='img-fluid' />
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src={categoriesimg2} alt="" className='img-fluid' />
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
                                                <img src={categoriesimg3} alt="" className='img-fluid' />
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src={categoriesimg4} alt="" className='img-fluid' />
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
                                                <img src={categoriesimg5} alt="" className='img-fluid' />
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
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
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                        <div className='pt-2'>
                                                            <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Buy Now</span> <i className="bi bi-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div>
                                                    <img src={categoriesimg6} alt="" className='img-fluid' />
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
            <Footer />
        </div>
    )
}