import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Profiledub from '../assets/images/testing/dub-img.png'
// import Digitalcontact from "../components/Digitalcontact";
import Digitalcontact from "../components/Digitalcontact";
import Price from "../components/Price";
// import axios from "axios";

export default function DigitalMarketing() {


  return (
    <div>
      <div className="digital">
        <Navbar />
        <Banner
          h1="Digital Marketing"
          h2="Axess Digital Marketing: Ignite Your Brand and Dominate the Digital Landscape.
                    "
          h3="A dazzling website that showcases your brand story and engages your audience like never before."
        />

        <div>
          <div className="primary-mb">
            <section className="whatwedo overflow-hidden" id="whatwedo">
              <div className="container overflow-hidden overflow-lg-visible">
                <div className="position-relative">
                  <h6
                    className="secondary-header text-center mb-3 linear-gradient-text m-5 bg-img-1 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="400"
                  >
                    Digital Marketing Toolbox
                  </h6>

                  <p className="text-center secondary-text m-4 fs-4">
                    {" "}
                    Poven Efffective Tatics
                  </p>
                  <p className="secondary-text mx-auto text-center m-5">
                    In today's digital age, a captivating online presence is no
                    longer a luxury, it's a necessity. At Axess Technology, we
                    believe in the power of digital marketing to fuel brand
                    awareness, ignite engagement, and propel conversions. Our
                    team of expert strategists, content creators, and
                    data-driven wizards weave the magic that takes your brand
                    from the shadows to the spotlight.
                  </p>
                  <div className="carding row gx-3 align-items-stretch mt-5">
                    <div className="col-md-3 mt-4">
                      <div className="card-effect ">
                        <div className="card-content-effect">
                          <h3>A dazzling website</h3>
                          <p className="secondary-text">
                            That showcases your brand story and engages your
                            audience like never before..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div className="card-effect">
                        <div className="card-content-effect">
                          <h3>SEO strategies</h3>
                          <p className="secondary-text">
                            That propel your website to the top of search engine
                            results, putting you directly in front of your ideal
                            customers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div className="card-effect">
                        <div className="card-content-effect">
                          <h3>Targeted social media</h3>
                          <p className="secondary-text">
                            Campaigns that spark conversations, build
                            communities, and drive traffic to your doorstep.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div className="card-effect">
                        <div className="card-content-effect">
                          <h3>Email Marketing</h3>
                          <p className="secondary-text">
                            Campaigns that spark conversations, build
                            communities, and drive traffic to your doorstep.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="secondary-text mx-auto text-center m-5 "
                  >
                    That's the Axess Digital Marketing difference. We don't just
                    tick boxes; we craft data-driven strategies that deliver
                    tangible results. We're your partners in digital disruption,
                    constantly pushing boundaries and exploring new avenues to
                    amplify your brand voice
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-green-1 py-5">
          <h3 className="secondary-header mx-auto text-center text-white mb-2">
            {" "}
            Request a custom quote for your digital marketing needs
          </h3>
          <p className="col-md-8 primary-text mx-auto text-center text-white mb-4">
            Ready to ignite your digital presence and watch your brand reach new
            heights? Let Axess Technology be your guide. Contact us today for a
            free consultation and let's start mapping out your digital dominance
            strategy!{" "}
          </p>
          <Link to={"/contact"} className='text-decoration-none'> <button className='gold-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button></Link>
        </section>

        <div>
          <section className="container cardish">
            <div className="row gy-4 w-100 ">
              <h2 className="secondary-header mx-auto text-center m-5">
                Our digital marketing toolbox is stocked with proven-effective
                tactics.
              </h2>
              <div className="col-lg-4">
                <div className="card-cardish1">
                  <div className="content">
                    <h6>Web Design and Development</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        We create stunning, user-friendly websites that are
                        optimized for conversions and search engines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-cardish1 ">
                  <div className="content">
                    <h6>Content Marketing</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        We craft compelling blog posts, articles, and social
                        media content that resonates with your target audience
                        and positions you as a thought leader.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-cardish1">
                  <div className="content">
                    <h6>Social Media Marketing</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        We manage your social media channels with engaging
                        content, strategic advertising, and community building
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-cardish1">
                  <div className="content">
                    <h6>Search Engine Optimization</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        We leverage the power of SEO to ensure your website
                        ranks high in search results, putting you front and
                        center for potential customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-cardish1">
                  <div className="content">
                    <h6>Paid Advertising</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        {" "}
                        We design and execute targeted pay-per-click (PPC)
                        campaigns to drive high-quality traffic to your website
                        and generate leads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-cardish1">
                  <div className="content">
                    <h6>Email Marketing</h6>
                    <div className="hover_content">
                      <p className="secondary-text">
                        {" "}
                        We create personalized email campaigns that nurture
                        leads, boost engagement, and drive conversions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="secondary-text mx-auto text-center m-5">
              But we don't stop there. We believe in constant optimization and
              data-driven decision-making. We track your campaign performance in
              real-time, analyze the results, and continuously refine our
              strategies to maximize your return on investment (ROI).
            </p>
          </section>
        </div>
        <Price/>
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
                                <h4 className='heading9 fw-bold fs-5'>Rajeev Malhotra</h4>
                                <p className='heading5'>CEO</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                            <div className="user">
                              <div className="card-description " >
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">Technomind Solutions</h3>
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
                                <p className="description heading5">Search engine heroics! Thanks to Axess' SEO expertise, our website now ranks at the top for relevant keywords. Organic traffic has skyrocketed, and leads from our website have tripled. They truly understand the magic of search engines!{" "}</p>
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
                                <h4 className='heading9 fw-bold fs-5'>Anjali Desai</h4>
                                <p className='heading5'>Owner</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">Organic Beauty Essentials</h3>
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
                                <p className="description heading5">Email marketing magic! Our email open rates used to be dismal. Axess' personalized email campaigns transformed that. Now, our subscribers are engaged, clicking through with enthusiasm. We've even seen a significant increase in repeat purchases thanks to targeted email nurture sequences{" "}</p>
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
                                <h4 className='heading9 fw-bold fs-5'> Vikram Singh</h4>
                                <p className='heading5'>Head of Growth</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9"> EdTech Startup</h3>
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
                                <p className="description heading5">Data-driven decisions, real results! Axess doesn't just throw darts in the dark. They strategically analyze data to make informed decisions about our online marketing campaigns. This data-driven approach has led to a 20% increase in our conversion rate and a 15% reduction in our advertising costs. They're true marketing wizards!{" "}</p>
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
                                <h4 className='heading9 fw-bold fs-5'>Meenakshi Rao</h4>
                                <p className='heading5'>Marketing Director</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                            <div className="user">
                              <div className="card-description ">
                                <div className="title-area">
                                  <div className="title-info">
                                    <h3 className="title heading9">Healthcare Company</h3>
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
                                <p className="description heading5">Holistic approach, exceptional results! Axess doesn't just focus on one aspect of digital marketing. They take a holistic approach, integrating different strategies seamlessly. This has resulted in a cohesive online presence that attracts, engages, and converts our target audience effectively. We're incredibly happy with their comprehensive approach!{" "}</p>
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
        <div id="pricing-section" className="mt-5 py-5">
          <Digitalcontact />
        </div>
        <Footer displayContact={true} />
      </div>
    </div>
  );
}
