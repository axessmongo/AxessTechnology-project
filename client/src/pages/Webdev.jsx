import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Technologies from "./Technologies";
import Software from "../assets/images/Our-Expertise.jpg";
import Process from "../assets/images/Our-Process.jpg";
import Why from "../assets/images/Why-Choose.jpg";
import bubble from "../assets/images/bubble.webp";
import success from "../assets/images/success.png";
import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link } from "react-router-dom";
import footer from "../assets/images/footer.svg";
import frompng from "../assets/images/fromlogo.jpg";
// import contact  from '../assets/images/contact.jpg'
import "../assets/css/index.scss";
import Techsection from "../components/Techsection";
import whychooseimg from "../assets/images/whychoose-img.png";
import webdev from "../assets/images/web-dev1.png";
import Profiledub from '../assets/images/testing/dub-img.png'
import Carousel from "../components/Carousel";


function Development() {
  return (
    <div className="webdev">
      <Navbar />
      <Banner
        h1="Web Development"
        h2=" Crafting Websites that Captivate and Convert"
        h3=""
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
                In today's digital world, your website is the first impression
                you make on potential customers. It's your virtual storefront,
                your digital ambassador, and the key to unlocking online
                success. At Axess Technology, we don't just build websites; we
                craft online experiences that captivate visitors, fuel
                engagement, and seamlessly convert them into loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="justify-content-center d-flex">
          <h1 className="text-center bg-img-1">Imagine</h1>
        </div>
        <div className="row justify-content-evenly">
          <div
            className="col-lg-6  col-md-12  align-items-center d-flex"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <div className="boxshadow ">
              <div className=" p-5">
                <ul>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                      A beautifully designed website that reflects your brand's
                      unique personality and vision.
                    </p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                      A website that's so intuitive and engaging, users get lost
                      in the experience, forgetting they're even browsing.
                    </p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                      A website that seamlessly guides visitors through the
                      sales funnel, turning casual clicks into conversions with
                      effortless ease.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5  col-md-12 align-items-center d-flex">
            <div
              className="my-3"
              data-aos="fade-down-left"
              data-aos-duration="1000"
            >
              <img src={Process} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            That's the Axess web development magic. We combine creative vision
            with technical expertise to design and build websites that are not
            just visually stunning, but strategically crafted to achieve your
            business goals.
          </div>
        </div>
      </section>

      <section className=" bg-green-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="my-4">
                <div className="row justify-content-center ">
                  <div className="col-md-4 mt-3 mx-2 small-card  boxshadow">
                    <p className="p-3">
                      Custom Website Design: We collaborate with you to
                      understand your brand, target audience, and objectives,
                      then translate that into a captivating website design that
                      resonates with your users.
                    </p>
                  </div>
                  <div className="col-md-4 mx-2  mt-3 small-card boxshadow">
                    <p className="p-3">
                      Responsive Web Development: We ensure your website looks
                      flawless and functions perfectly on all devices, from
                      desktops to tablets to smartphones.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-around   ">
                  <div className="col-md-4 mt-3 small-card boxshadow">
                    <p className="p-3">
                      Content Management Systems (CMS): We implement
                      user-friendly CMS platforms that give you complete control
                      over your website content, even without technical
                      knowledge.
                    </p>
                  </div>
                  <div className="col-md-3 mt-3 small-card  boxshadow">
                    <p className="p-3">
                      E-commerce Development: We build secure, scalable online
                      stores that make online shopping a breeze for your
                      customers, and a joy for you to manage.
                    </p>
                  </div>
                  <div className="col-md-4  mt-3 small-card boxshadow">
                    <p className="p-3">
                      Website Maintenance and Security: We offer ongoing
                      maintenance and security solutions to keep your website
                      up-to-date, protected, and performing at its best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h1 className="text-light">
                <img src={webdev} alt="" />
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Carousel/>

   <div className="bg-green-1 text-light">
      <section className="container mt-5">
        <div className="justify-content-center d-flex">
          <h1 className="text-center bg-img-1">Imagine</h1>
        </div>
        <div className="row justify-content-evenly">

        <div className="col-lg-5  col-md-12 align-items-center d-flex">
            <div
              className="my-3"
              data-aos="fade-down-left"
              data-aos-duration="1000"
            >
              <img src={Process} className="img-fluid" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6  col-md-12  align-items-center d-flex"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
          >
            <div className="boxshadow ">
              <div className=" p-5">
                <ul>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                    But we don't stop at delivering a beautiful website. We believe in a holistic approach, seamlessly integrating your website with your digital marketing strategies to maximize your online impact.

                    </p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                    Ready to create a website that works as hard as you do? Let Axess Technology be your web development partner.

                    </p>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-back"
                  >
                    <p>
                    Contact us today for a free consultation and let's build your online masterpiece!

                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
       
      </section>
      </div>

      <section className="bg-green-1 pb-5">
       
        <h3 className="secondary-header mx-auto text-center text-white pt-5">
          {" "}
          Get a free website audit: Identify areas for improvement and unlock your website's full potential.
        </h3>
        <p className="col-md-8 primary-text mx-auto text-center text-white py-3">
        Browse our portfolio: See examples of the stunning websites we've created for our clients.

        </p>
        <button
          className="gold-btn mx-auto"
         
        >
          <span className="d-block">Connect with us</span>{" "}
          <i className="bi bi-arrow-right"></i>
        </button>
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

      <Footer />
    </div>
  );
}

export default Development;
