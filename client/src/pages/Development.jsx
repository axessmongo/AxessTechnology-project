import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Technologies from "./Technologies";
import Software from "../assets/images/Our-Expertise1.jpg";
import Process from "../assets/images/Our-Process1.jpg";

import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link } from "react-router-dom";

// import contact  from '../assets/images/contact.jpg'
import "../assets/css/index.scss";
import Techsection from "../components/Techsection";
import whychooseimg from "../assets/images/whychoose-img.png";
import Profiledub from '../assets/images/testing/dub-img.png'




function Development() {
  return (
    <div className="software">
      <Navbar />
      <Banner
        h1="Software Development"
        h2="Revolutionize Your Operations: Transform with Software Tailored to Your Needs."
        h3="Utilize the power of technology with our custom software development services.
        "
      />

      <section className="container">
        <div className="row mt-3 align-items-center justify-content-center ">
          <div
            className="col-lg-10 rounded-5 col-md-3 "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="text-center">
              <p className="fs-5 mt-4">
                In today's digital age, having robust and innovative software is
                no longer a luxury, it's a necessity for businesses to thrive.
                At Axess Technology, we understand the power of software and its
                ability to transform your operations, streamline processes, and
                unlock new opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bgcolor">
        <div className=" container py-4">
          <div className="justify-content-center d-flex">
            <h1 className="text-center bg-img-1 ">Our Expertise</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div
                className="pbg1  p-3 mt-3 rounded-3 "
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <p className="text-center fs-5 p-2">
                  We are a team of experienced and passionate software
                  developers who specialize in crafting cutting-edge solutions
                  tailored to your specific needs. We have a deep understanding
                  of various technologies and frameworks, including:
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-md-5 col-sm-12 align-items-center d-flex  ">
              <div className="" data-aos="zoom-in">
                <img src={Software} className=" img-fluid w-100" alt="" />
              </div>
            </div>
            <div className="col-md-7  col-sm-12 align-items-center d-flex">
              <div className="row justify-content-around ">
                <div
                  className="col-md-3  col-sm-6 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-back"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="py-4">
                      <p className="fw-bold">Programming Languages:</p>
                      <p> Python </p>
                      <p> Java </p>
                      <p> JavaScript </p>
                      <p> C++ </p>
                      <p> C# </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="py-4">
                      <p className="fw-bold">Web Development Frameworks:</p>
                      <p>React</p>
                      <p> Angular</p>
                      <p>Vue.js</p>
                      <p>Django</p>
                      <p>Flask</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="py-4">
                      <p className="fw-bold">Mobile Development Frameworks:</p>
                      <p>Flutter</p>
                      <p> React Native</p>
                      <p>Kotlin</p>
                      <p>and Swift</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-back"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="py-4">
                      <p className="fw-bold">Cloud Platforms:</p>
                      <p>AWS</p>
                      <p>Azure</p>
                      <p> Google Cloud Platform</p>
                      <p>and others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-1 text-light mt-5">
        <div className="container">
          <div className=" pt-3">
            <h1 className="bg-img-1 mx-auto mt-3">Why Choose Us</h1>
          </div>

          <div>
            <div className="row d-flex justify-content-evenly pt-4">
              <div
                className="col-md-3"
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Experienced Team</h4>
                  <p>
                    Our team has a proven track record of delivering successful
                    software projects for clients across diverse industries.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-out-left"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Custom Solutions</h4>
                  <p>
                    We don't offer one-size- fits-all solutions. We build
                    software that is uniquely tailored to your specific
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="row justify-content-evenly">
              <div
                className="col-md-3 d-flex justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Agile Methodology</h4>
                  <p>
                    We embrace agile development practices to ensure
                    flexibility, quick iterations, and continuous improvement.
                  </p>
                </div>
              </div>
              <div
                className="col-md-4"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
              >
                <div>
                  <img src={whychooseimg} className="img-fluid" alt="" />
                </div>
              </div>
              <div
                className="col-md-3 d-flex justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Transparent Communication</h4>
                  <p>
                    We keep you informed throughout the development process and
                    value your feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="row d-flex justify-content-evenly pb-4">
              <div
                className="col-md-3"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Data-Driven Approach</h4>
                  <p>
                    We leverage data and analytics to optimize your software and
                    measure its impact on your business.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div className="small-card mt-3">
                  <h4>Experienced Team</h4>
                  <p>
                    Our team has a proven track record of delivering successful
                    software projects for clients across diverse industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <div className="justify-content-center d-flex">
          <h1 className="text-center bg-img-1">Our Process</h1>
        </div>
        <div className="row justify-content-evenly">
          <p className="text-center p-2">
            We believe in a collaborative and agile approach to software
            development. Our process involves:
          </p>
          <div
            className="col-lg-6  col-md-12 align-items-center d-flex"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <div
              className="pbg1  "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div
                className="boxshadow1  mt-4 "
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <div className=" p-4">
                  <ul>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-back"
                    >
                      <p>
                        <span className="fw-bold">Discovery & Planning:</span>{" "}
                        We work closely with you to understand your business
                        goals, challenges, and target audience.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-back"
                    >
                      <p>
                        <span className="fw-bold">Design & Prototyping:</span>{" "}
                        We create prototypes and mockups to visualize your
                        software and ensure it aligns with your needs.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-back"
                    >
                      <p>
                        <span className="fw-bold">Development & Testing:</span>{" "}
                        We write clean, efficient, and well-tested code using
                        industry-standard best practices.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-back"
                    >
                      <p>
                        <span className="fw-bold">
                          Deployment & Maintenance:
                        </span>{" "}
                        We seamlessly deploy your software and provide ongoing
                        support and maintenance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5  col-sm-12 align-items-center d-flex mt-4">
            <div className="" data-aos="fade-left" data-aos-duration="600">
              <img src={Process} className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-1 text-light">
      <div className='pt-5 mt-5'>
                                <div className="mt-0 pt-0 my-5 p-5 text-center text-white">
                                    <h1 className='secondary-header' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                        We’re More than Just Developers. We Solve Real-world Problems By Creating Better Digital Solutions.
                                    </h1>
                                    <p data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" className='primary-text fw-medium'>As a full-stack software development agency, We make some extraordinary things that engage your users.</p>
                                    <div className="col-xxl-9 col-xl-10 col-lg-12 mx-auto mt-5 mb-5">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>ERP</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>CRM</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>HR Software</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Enterprise Applications</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Data Analytics</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>IT Service Management</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Ecommerce</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Supply Chain</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Web Portals</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
      </section>

      <Techsection />
      <section className="pricing mt-5" id="pricing-section">
        <h1 className="primary-header text-center">Unlock Our New Features</h1>
        <div className="container pricing-table">
          <div className="pricing-card ">
            <h3 className="pricing-card-header">Basic</h3>
            <div className="price text-center">
              <sup>$</sup>15<span>/MO</span>
            </div>
            <ul>
              <li>
                <strong>Domain</strong>- Additional Charges (Rs.800)
              </li>
              <li>
                <strong>Hosting - 1</strong> Year FREE
              </li>
              <li>
                <strong>Single 1 </strong> Page Website
              </li>
              <li>
                <strong>SSL</strong> Certificate
              </li>
              <li>
                <strong>WhatsApp </strong> Chat
              </li>
              <li>
                <strong>Social </strong> Media Integration
              </li>
              <li>
                <strong>Static </strong> Website
              </li>
              <li>
                <strong>Premade </strong> Website
              </li>
              <li>
                <strong>3 Month FREE </strong> Tech Support
              </li>
            </ul>
            <a href="#" className="order-btn">
              Order Now
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Pro</h3>
            <div className="price text-center">
              <sup>$</sup>30<span>/MO</span>
            </div>
            <ul>
              <li>
                <strong>Domain</strong>- Additional Charges (Rs.800)
              </li>
              <li>
                <strong>Hosting - 1</strong> Year FREE
              </li>
              <li>
                <strong>4 to 6</strong> Pages
              </li>
              <li>
                <strong>WhatsApp</strong> Chat
              </li>
              <li>
                <strong>SSL </strong> Certificate
              </li>
              <li>
                <strong>Full Source </strong> Code
              </li>
              <li>
                <strong>5 Email – 5GB </strong> Quota Each
              </li>
              <li>
                <strong>Premade </strong> Website
              </li>
              <li>
                <strong>3 Month FREE </strong> Tech Support
              </li>
            </ul>
            <a href="#" className="order-btn">
              Order Now
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Premium</h3>
            <div className="price text-center">
              <sup>$</sup>50<span>/MO</span>
            </div>
            <ul>
              <li>
                <strong>Domain</strong>- Additional Charges (Rs.800)
              </li>
              <li>
                <strong>Hosting - 1</strong> Year FREE
              </li>
              <li>
                <strong>4 to 6</strong> Pages
              </li>
              <li>
                <strong>WhatsApp</strong> Chat
              </li>
              <li>
                <strong>SSL </strong> Certificate
              </li>
              <li>
                <strong>Full Source </strong> Code
              </li>
              <li>
                <strong>5 Email – 5GB </strong> Quota Each
              </li>
              <li>
                <strong>Premade </strong> Website
              </li>
              <li>
                <strong>3 Month FREE </strong> Tech Support
              </li>
            </ul>
            <a href="#" className="order-btn">
              Order Now
            </a>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Elite</h3>
            <div className="price text-center">
              <sup>$</sup>80<span>/MO</span>
            </div>
            <ul>
              <li>
                <strong>Domain</strong>- Additional Charges (Rs.800)
              </li>
              <li>
                <strong>Hosting - 1</strong> Year FREE
              </li>
              <li>
                <strong>4 to 6</strong> Pages
              </li>
              <li>
                <strong>WhatsApp</strong> Chat
              </li>
              <li>
                <strong>SSL </strong> Certificate
              </li>
              <li>
                <strong>Full Source </strong> Code
              </li>
              <li>
                <strong>5 Email – 5GB </strong> Quota Each
              </li>
              <li>
                <strong>Premade </strong> Website
              </li>
              <li>
                <strong>3 Month FREE </strong> Tech Support
              </li>
            </ul>
            <a href="#" className="order-btn">
              Order Now
            </a>
          </div>
          {/* <div className='Pay'>
						<h3>ACCEPTED PAYMENT METHODS</h3>

					</div> */}
        </div>
      </section>
      <div>
           {/* Testimonal section */}
      <div>
        <section className='nav-banner testimonal' id="testimonial">
          <div>
            <div
              className="elementor-widget-container"
              style={{ margin: "2rem" }}>
              <div
                className="section-title text-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h3 className='bg-img-1 mx-auto'>Testimonial</h3>

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
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3' >
                              <h4 className='heading9 fw-bold fs-5'>The Delighted</h4>
                              <p className='heading5'>Developer</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description " >
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title heading9">The Delighted Developer</h3>
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
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>The Satisfied</h4>
                              <p className='heading5'>CEO</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title heading9">The Satisfied CEO</h3>
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
                              <p className="description heading5">Investing in [Your Company Name]'s testing services was one of the best decisions I've made for our company. Not only did they catch critical bugs before launch, but their insights on user experience helped us refine our product into a market winner. We've seen a significant rise in user engagement and positive reviews, directly translating to increased revenue and customer loyalty. [Your Company Name] is more than just a testing provider; they're a strategic partner in our success." - Jane Doe, CEO.{" "}</p>
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
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>The Happy</h4>
                              <p className='heading5'>User</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title heading9">The Happy User</h3>
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
                              <img src={Profiledub} alt="" className='w-50 mx-auto' />
                            </div>
                            <div className='text-light py-3 my-3'>
                              <h4 className='heading9 fw-bold fs-5'>The Relieved</h4>
                              <p className='heading5'>Project Manager</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                          <div className="user">
                            <div className="card-description ">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title heading9">The Relieved Project Manager</h3>
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
      </div>

      <Footer />
    </div>
  );
}

export default Development;
