import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import profile1 from '../assets/images/testing/dub-img.png'
// import step1 from '../assets/images/DigitalMarketing/step1.jpg'
// import step2 from '../assets/images/DigitalMarketing/step2.jpg'
// import step3 from '../assets/images/DigitalMarketing/step3.jpg'
// import step4 from '../assets/images/DigitalMarketing/step4.jpg'
// import step5 from '../assets/images/DigitalMarketing/step5.jpg'
// import step6 from '../assets/images/DigitalMarketing/step6.jpg'
// import step7 from '../assets/images/DigitalMarketing/step7.jpg'

export default function DigitalMarketing() {
    return (
        <div>

            <div className='digital'>
                <Navbar />
                <Banner
                    h1="Digital Marketing"
                    h2="Axess Digital Marketing: Ignite Your Brand and Dominate the Digital Landscape.
                    "
                    h3="A dazzling website that showcases your brand story and engages your audience like never before." />

                <div>
                    <div className="primary-mb">
                        <section className="whatwedo overflow-hidden" id="whatwedo">
                            <div className="container overflow-hidden overflow-lg-visible">
                                <div className="position-relative">
                                    <h6
                                        className="primary-header text-center mb-3 linear-gradient-text m-5 bg-img-1 mx-auto"
                                        data-aos="fade-up"
                                        data-aos-duration="400"
                                    >
                                        Digital Marketing Toolbox
                                    </h6>

                                    <p className='text-center m-4 fs-4'> Poven Efffective Tatics</p>
                                    <p className='secondary-text mx-auto text-center m-5'>In today's digital age, a captivating online presence is no longer a luxury, it's a necessity. At Axess Technology, we believe in the power of digital marketing to fuel brand awareness, ignite engagement, and propel conversions. Our team of expert strategists, content creators, and data-driven wizards weave the magic that takes your brand from the shadows to the spotlight.</p>
                                    <div className='carding row gx-3 align-items-stretch mt-5'>
                                        <div className="col-md-3">
                                            <div class="card-effect">
                                                <div class="card-content-effect">
                                                    <h2>A dazzling website</h2>
                                                    <p>That showcases your brand story and engages your audience like never before..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="card-effect">
                                                <div class="card-content-effect">
                                                    <h2>SEO strategies</h2>
                                                    <p>that propel your website to the top of search engine results, putting you directly in front of your ideal customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="card-effect">
                                                <div class="card-content-effect">
                                                    <h2>Targeted social media</h2>
                                                    <p>Campaigns that spark conversations, build communities, and drive traffic to your doorstep.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="card-effect">
                                                <div class="card-content-effect">
                                                    <h2>Email Marketing</h2>
                                                    <p>Campaigns that spark conversations, build communities, and drive traffic to your doorstep.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="600"
                                        className="secondary-text mx-auto text-center m-5 "
                                    >
                                        That's the Axess Digital Marketing difference. We don't just tick boxes; we craft data-driven strategies that deliver tangible results. We're your partners in digital disruption, constantly pushing boundaries and exploring new avenues to amplify your brand voice

                                    </p>

                                </div>
                            </div>
                        </section>
                    </div>

                </div>
                <div>
                    <section className='nav-banner testimonal' id="testimonial">
                        <div>
                            <div
                                className="elementor-widget-container"

                                style={{ margin: "2rem" }}
                            >
                                <div
                                    className="section-title text-center aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                >
                                    <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3 ' data-aos="fade-up" data-aos-duration="800" style={{ color: "#fd562a" }}>Testimonial</h3>

                                    <span
                                        className="subtitle sub-title text-light heading5"
                                        style={{ fontFamily: '"Montserrat", sans-serif' }} data-aos="fade-right" data-aos-duration="800"
                                    >
                                        What happy clients say about us ?
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <div className="carousel ">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                        <div className="carousel-inner container">
                                            <div className="carousel-item active" data-bs-interval="3000">
                                                <div className="row p-3">
                                                    <div className="col-md-4 mb-5">

                                                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                            <div>
                                                                <img src={profile1} alt="" className='w-50 mx-auto' />
                                                            </div>
                                                            <div className='text-light py-3 my-3' >
                                                                <h4 className='heading9 fw-bold fs-5'>John Smith</h4>
                                                                <p className='heading5'>Lead Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                        <div className="user">
                                                            <div className="card-description " >
                                                                <div className="title-area">
                                                                    <div className="title-info">
                                                                        <h3 className="title heading9">John Smith</h3>
                                                                        <span className="date"> </span>
                                                                    </div>

                                                                    <div className="rating">
                                                                        <ul className="p-0 mx-auto my-0">
                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 border"></div>
                                                                <div className="seperator"></div>
                                                                <p className="description heading5">I used to dread deployment day, fearing hidden bugs waiting to ambush my users. But since partnering with [Your Company Name], my worries have vanished! Their thorough testing ensures my software launches flawlessly, leaving me free to focus on innovation. Thanks to them, I finally have the peace of mind to code with confidence.{" "}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval="3000">
                                                <div className="row p-3">
                                                    <div className="col-md-4 mb-5">
                                                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                            <div>
                                                                <img src={profile1} alt="" className='w-50  mx-auto' />
                                                            </div>
                                                            <div className='text-light py-3 my-3'>
                                                                <h4 className='heading9 fw-bold fs-5'>Jane Doe</h4>
                                                                <p className='heading5'>CEO</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                        <div className="user">
                                                            <div className="card-description ">
                                                                <div className="title-area">
                                                                    <div className="title-info">
                                                                        <h3 className="title heading9">Jane Doe</h3>
                                                                        <span className="date"> </span>
                                                                    </div>

                                                                    <div className="rating">
                                                                        <ul className="p-0 mx-auto my-0">
                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 border"></div>
                                                                <div className="seperator"></div>
                                                                <p className="description heading5">Investing in [Your Company Name]'s testing services was one of the best decisions I've made for our company. Not only did they catch critical bugs before launch, but their insights on user experience helped us refine our product into a market winner. We've seen a significant rise in user engagement and positive reviews, directly translating to increased revenue and customer loyalty. [Your Company Name] is more than just a testing provider; they're a strategic partner in our success.{" "}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval="3000">
                                                <div className="row p-3">
                                                    <div className="col-md-4 mb-5">
                                                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                            <div>
                                                                <img src={profile1} alt="" className='w-50  mx-auto' />
                                                            </div>
                                                            <div className='text-light py-3 my-3'>
                                                                <h4 className='heading9 fw-bold fs-5'>Sarah White</h4>
                                                                <p className='heading5'>Web Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                        <div className="user">
                                                            <div className="card-description ">
                                                                <div className="title-area">
                                                                    <div className="title-info">
                                                                        <h3 className="title heading9"> Sarah White</h3>
                                                                        <span className="date"> </span>
                                                                    </div>

                                                                    <div className="rating">
                                                                        <ul className="p-0 mx-auto my-0">
                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 border"></div>
                                                                <div className="seperator"></div>
                                                                <p className="description heading5">As a user, I'm tired of buggy software that crashes and frustrates. But ever since my favorite app started using [Your Company Name] for testing, it's been a smooth ride! No more unexpected glitches or confusing interfaces. Everything works seamlessly and intuitively, making my life easier and more enjoyable. Thank you for prioritizing user experience and setting the bar high for software quality!{" "}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval="3000">
                                                <div className="row p-3">
                                                    <div className="col-md-4 mb-5">
                                                        <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                            <div>
                                                                <img src={profile1} alt="" className='w-50  mx-auto' />
                                                            </div>
                                                            <div className='text-light py-3 my-3'>
                                                                <h4 className='heading9 fw-bold fs-5'>Mark Jones</h4>
                                                                <p className='heading5'>Project Manager</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                        <div className="user">
                                                            <div className="card-description ">
                                                                <div className="title-area">
                                                                    <div className="title-info">
                                                                        <h3 className="title heading9"> Mark Jones</h3>
                                                                        <span className="date"> </span>
                                                                    </div>

                                                                    <div className="rating">
                                                                        <ul className="p-0 mx-auto my-0">
                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>

                                                                            <li className="has-rating list-inline-item">
                                                                                <i className="star-icon">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        fill="currentColor"
                                                                                        className="bi bi-star-fill"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                                    </svg>
                                                                                </i>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3 border"></div>
                                                                <div className="seperator"></div>
                                                                <p className="description heading5">Managing a large software project can be a pressure cooker. But with [Your Company Name] by my side, I can finally sleep soundly at night. Their expertise and dedication helped us meet every deadline while delivering a defect-free product. Their clear communication and proactive approach kept the project on track and everyone informed. They're the dream team for anyone looking to avoid development headaches and ensure a successful launch!{" "}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                </div>



                <div>
                    <section class="container cardish">
                        <div className="row gy-4 w-100 ">
                            <h2 className='secondary-header mx-auto text-center m-5'>Our digital marketing toolbox is stocked with proven-effective tactics.</h2>
                            <div class="col-lg-4">

                                <div className="card-cardish1">
                                    <div class="content">

                                        <h6>Web Design and Development</h6>
                                        <div class="hover_content">
                                            <p>We create stunning, user-friendly websites that are optimized for conversions and search engines.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card-cardish1 ">
                                    <div class="content">

                                        <h6>Content Marketing</h6>
                                        <div class="hover_content">
                                            <p>We craft compelling blog posts, articles, and social media content that resonates with your target audience and positions you as a thought leader.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card-cardish1">
                                    <div class="content">

                                        <h6>Social Media Marketing</h6>
                                        <div class="hover_content">
                                            <p>We manage your social media channels with engaging content, strategic advertising, and community building strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card-cardish1">
                                    <div class="content">

                                        <h6>Search Engine Optimization</h6>
                                        <div class="hover_content">
                                            <p>We leverage the power of SEO to ensure your website ranks high in search results, putting you front and center for potential customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card-cardish1">
                                    <div class="content">

                                        <h6>Paid Advertising</h6>
                                        <div class="hover_content">
                                            <p> We design and execute targeted pay-per-click (PPC) campaigns to drive high-quality traffic to your website and generate leads.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card-cardish1">
                                    <div class="content">

                                        <h6>Email Marketing</h6>
                                        <div class="hover_content">
                                            <p className='primary-text mx-auto text-center m-5'>We create personalized email campaigns that nurture leads, boost engagement, and drive conversions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='secondary-text mx-auto text-center m-5'>But we don't stop there. We believe in constant optimization and data-driven decision-making. We track your campaign performance in real-time, analyze the results, and continuously refine our strategies to maximize your return on investment (ROI).</p>

                    </section>
                </div>





                <section className='bg-green-1 py-5'>
                    <p className='bg-img-1 mx-auto '>Call to Action</p>
                    <h3 className='secondary-header mx-auto text-center text-white mb-2' > Request a custom quote for your digital marketing needs</h3>
                    <p className='col-md-8 primary-text mx-auto text-center text-white mb-4'>Ready to ignite your digital presence and watch your brand reach new heights? Let Axess Technology be your guide.
                        Contact us today for a free consultation and let's start mapping out your digital dominance strategy! </p>
                    <button className='gold-btn mx-auto ' data-aos='zoom-out' data-aos-duration='600'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>


                </section>


                <Footer />
            </div>

        </div>
    )
}


