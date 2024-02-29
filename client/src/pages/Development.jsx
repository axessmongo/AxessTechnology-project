import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import Software from "../assets/images/Our-Expertise1.jpg";
import Process from "../assets/images/process.png";

import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link } from "react-router-dom";

// import contact  from '../assets/images/contact.jpg'
import Techsection from "../components/Techsection";
import whychooseimg from "../assets/images/whychoose-img.png";
import Profiledub from "../assets/images/testing/dub-img.png";
import Price from "../components/Price";

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
            className="col-lg-10 rounded-5  "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="text-center">
              <p className="secondary-text mt-4">
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
            <h1 className="text-center bg-img-1">Our Expertise</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className=" mt-3 rounded-3 "
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <p className="text-center secondary-text ">
                  We are a team of experienced and passionate software
                  developers who specialize in crafting cutting-edge solutions
                  tailored to your specific needs. We have a deep understanding
                  of various technologies and frameworks, including:
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-lg-5 col-sm-12 align-items-center d-flex  ">
              <div className="" data-aos="zoom-in">
                <img src={Software} className=" img-fluid w-100" alt="" />
              </div>
            </div>
            <div className="col-lg-7  col-sm-12 align-items-center d-flex">
              <div className="row justify-content-around ">
                <div
                  className="col-lg-3 col-md-6 col-sm-6  mb-3"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-back"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="py-4 secondary-text">
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
                  className="col-lg-3 col-md-6 col-sm-6  mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="py-4 secondary-text">
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
                  className="col-lg-3 col-md-6 col-sm-6  mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="py-4 secondary-text">
                      <p className="fw-bold">Mobile Development Frameworks:</p>
                      <p>Flutter</p>
                      <p> React Native</p>
                      <p>Kotlin</p>
                      <p>Swift</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6   mb-3"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-back"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="py-4 secondary-text">
                      <p className="fw-bold">Backend/Cloud Platforms:</p>
                      <p>Mongodb</p>
                      <p>PL/sql</p>
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
            <div className="row justify-content-evenly pt-4">
              <div
                className="col-md-5 col-lg-4 col-xl-3 py-1"
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              >
                <div className="small-card">
                  <h4>Experienced Team</h4>
                  <p className="primary-text mb-0">
                    Our team has a proven track record of delivering successful
                    software projects for clients across diverse industries.
                  </p>
                </div>
              </div>
              <div
                className="col-md-5 col-lg-4 col-xl-3 py-1"
                data-aos="zoom-out-left"
                data-aos-duration="1000"
              >
                <div className="small-card">
                  <h4>Custom Solutions</h4>
                  <p className="primary-text mb-0">
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
                className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center py-1"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="small-card h-auto">
                  <h4>Data-Driven Approach</h4>
                  <p className="primary-text mb-0">
                    We leverage data and analytics to optimize your software and
                    measure its impact on your business.
                  </p>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-9"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
              >
                <div>
                  <img src={whychooseimg} className="img-fluid" alt={whychooseimg} />
                </div>
              </div>
              <div
                className="col-md-4 col-xl-3 d-flex justify-content-center align-items-center py-1"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="small-card h-auto">
                  <h4>Transparent Communication</h4>
                  <p className="primary-text mb-0">
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
                className="col-md-5 col-lg-4 col-xl-3 py-1"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <div className="small-card">
                  <h4>Agile Methodology</h4>
                  <p className="primary-text mb-0">
                    We embrace agile development practices to ensure
                    flexibility, quick iterations, and continuous improvement.
                  </p>
                </div>
              </div>
              <div
                className="col-md-5 col-lg-4 col-xl-3 py-1"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div className="small-card">
                  <h4>Experienced Team</h4>
                  <p className="primary-text mb-0">
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
          <p className="text-center secondary-text p-2">
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
                      <p className="secondary-text">
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
                      <p className="secondary-text">
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
                      <p className="secondary-text">
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
                      <p className="secondary-text">
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
            <div className="mx-auto" data-aos="fade-left" data-aos-duration="600">
              <img src={Process} className="img-fluid w-100" alt="" style={{height:'400px'}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-1 text-light">
        <div className="pt-5 mt-5">
          <div className="mt-0 pt-0 my-5 p-5 text-center text-white">
            <h1
              className="secondary-header"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-anchor-placement="bottom-bottom"
            >
              We’re More than Just Developers. We Solve Real-world Problems By
              Creating Better Digital Solutions.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-anchor-placement="bottom-bottom"
              className="primary-text mb-0 fw-medium"
            >
              As a full-stack software development agency, We make some
              extraordinary things that engage your users.
            </p>
            <div className="col-xxl-9 col-xl-10 col-lg-12 mx-auto mt-5 mb-5">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">ERP</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">CRM</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">HR Software</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">Enterprise Applications</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">Data Analytics</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">IT Service Management</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">Ecommerce</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">Supply Chain</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="small-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="text-white mb-0">Web Portals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Techsection />
      {/* <section className="pricing mt-5" id="pricing-section">
        <h1 className="primary-header text-center">Unlock Our New Features</h1>
        <div className="container pricing-table">
          <div className="pricing-card ">
            <div className="shadow">
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
            </div>
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
          </div>
        </div>
        <div className="justify-content-center d-flex">
          <a href="/contact" className="order-btn">
            Order Now
          </a>
        </div>
      </section> */}

      <Price/>
      <div>
        {/* Testimonal section */}
        <div>
          <section className="nav-banner testimonal" id="testimonial">
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
                  <h3 className="bg-img-1 mx-auto">Testimonial</h3>

                  <span
                    className="subtitle sub-title text-light heading5"
                    style={{ fontFamily: '"Montserrat", sans-serif' }}
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    What happy clients say about us ?
                  </span>
                </div>
              </div>
              <div className="">
                <div className="carousel ">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="true"
                  >
                    <div className="carousel-inner container">
                      <div
                        className="carousel-item active"
                        data-bs-interval="3000"
                      >
                        <div className="row p-3">
                          <div className="col-md-4">
                            <div
                              className="text-center pt-3 mt-3"
                              data-aos="zoom-in"
                              data-aos-duration="600"
                            >
                              <div>
                                <img
                                  src={Profiledub}
                                  alt=""
                                  className="w-50 mx-auto"
                                />
                              </div>
                              <div className="text-light py-3 my-3">
                                <h4 className="heading9 fw-bold fs-5">
                                  Sarah Jones
                                </h4>
                                <p className="heading5">CEO</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                          >
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">
                                      Sarah Jones, CEO
                                    </h3>
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
                                <p className="description heading5">
                                  From scrappy startup to industry leader, Axess
                                  helped us scale with custom software that
                                  empowers our team and delights our customers.
                                  They truly understood our vision and
                                  translated it into a seamless, efficient
                                  solution.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <div className="row p-3">
                          <div className="col-md-4">
                            <div
                              className="text-center pt-3 mt-3"
                              data-aos="zoom-in"
                              data-aos-duration="600"
                            >
                              <div>
                                <img
                                  src={Profiledub}
                                  alt=""
                                  className="w-50 mx-auto"
                                />
                              </div>
                              <div className="text-light py-3 my-3">
                                <h4 className="heading9 fw-bold fs-5">
                                  Mark Davis
                                </h4>
                                <p className="heading5">CIO</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                          >
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">
                                      Mark Davis, CIO
                                    </h3>
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
                                <p className="description heading5">
                                  Axess went above and beyond to develop a
                                  complex enterprise software solution that met
                                  all our regulatory requirements and security
                                  needs. Their collaborative approach and
                                  technical expertise were invaluable.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <div className="row p-3">
                          <div className="col-md-4">
                            <div
                              className="text-center pt-3 mt-3"
                              data-aos="zoom-in"
                              data-aos-duration="600"
                            >
                              <div>
                                <img
                                  src={Profiledub}
                                  alt=""
                                  className="w-50 mx-auto"
                                />
                              </div>
                              <div className="text-light py-3 my-3">
                                <h4 className="heading9 fw-bold fs-5">
                                  Emily Chen
                                </h4>
                                <p className="heading5">COO</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                          >
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">
                                      Emily Chen, COO
                                    </h3>
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
                                <p className="description heading5">
                                  We were struggling with outdated software that
                                  hindered our growth. Axess modernized our
                                  entire system, boosting productivity and
                                  streamlining operations. The ROI has been
                                  incredible!{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <div className="row p-3">
                          <div className="col-md-4">
                            <div
                              className="text-center pt-3 mt-3"
                              data-aos="zoom-in"
                              data-aos-duration="600"
                            >
                              <div>
                                <img
                                  src={Profiledub}
                                  alt=""
                                  className="w-50 mx-auto"
                                />
                              </div>
                              <div className="text-light py-3 my-3">
                                <h4 className="heading9 fw-bold fs-5">
                                  Rani Singh
                                </h4>
                                <p className="heading5">CEO</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                          >
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">
                                      Rani Singh, CEO
                                    </h3>
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
                                <p className="description heading5">
                                  "From bootstrapped startup to industry leader,
                                  Axess propelled us forward with custom
                                  software that empowers our team and delights
                                  our customers. Their team truly understood our
                                  vision and translated it into a seamless,
                                  efficient solution. They were the wind beneath
                                  our wings!"{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="3000">
                        <div className="row p-3">
                          <div className="col-md-4">
                            <div
                              className="text-center pt-3 mt-3"
                              data-aos="zoom-in"
                              data-aos-duration="600"
                            >
                              <div>
                                <img
                                  src={Profiledub}
                                  alt=""
                                  className="w-50 mx-auto"
                                />
                              </div>
                              <div className="text-light py-3 my-3">
                                <h4 className="heading9 fw-bold fs-5">
                                  Akhilesh Kumar
                                </h4>
                                <p className="heading5">CIO</p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            data-aos="zoom-in"
                            data-aos-duration="600"
                          >
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">
                                      Akhilesh Kumar, CIO
                                    </h3>
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
                                <p className="description heading5">
                                  "Axess went the extra mile to develop a
                                  complex enterprise software solution that met
                                  all our regulatory requirements and security
                                  needs. Their collaborative approach and
                                  technical expertise were invaluable. They were
                                  like the missing piece to our digital puzzle!"{" "}
                                </p>
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
