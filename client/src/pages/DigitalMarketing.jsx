import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
// import step1 from '../assets/images/DigitalMarketing/step1.jpg'
// import step2 from '../assets/images/DigitalMarketing/step2.jpg'
// import step3 from '../assets/images/DigitalMarketing/step3.jpg'
// import step4 from '../assets/images/DigitalMarketing/step4.jpg'
// import step5 from '../assets/images/DigitalMarketing/step5.jpg'
// import step6 from '../assets/images/DigitalMarketing/step6.jpg'
// import step7 from '../assets/images/DigitalMarketing/step7.jpg'
import Profiledub from '../assets/images/testing/dub-img.png'
import axios from "axios";

export default function DigitalMarketing() {
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    comments: "",
    services: {
      // socialMedia : false
    },
    digitalmarketing: ""
  });
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    comments: "",
    services: {
      // socialMedia : false
    },
    digitalmarketing: ""



  })
  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   console.log(name, checked)
  //   setState((prevFormData) => ({
  //     ...prevFormData,
  //     services: {
  //       ...state.services,
  //       [name]: checked
  //     },
  //   }));
  // };
  // console.log("state", state)
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
        value = value.replace(/\D/g, '').slice(0, 10);
    }
    if (name === 'name') {
        value = value.replace(/[^a-zA-Z\s]/g, '');
    }
   
    setState({
        ...state,
        [name]: value,
    });
    validateField(name, value);
};
  const showToast = (text, options = {}) => {
    Toastify({
      text,
      duration: options.duration || 3000,
      newWindow: options.newWindow || true,
      close: options.close || true,
      gravity: options.gravity || "top",
      position: options.position || "center",
      stopOnFocus: options.stopOnFocus || true,
      style: options.style || {},
      onClick: options.onClick || function () { }
    }).showToast();
  };
  const validateField = (name, value) => {

    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          name: value.length === 0 ? 'Firstname is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid firstname, only letters allowed' : '',
        });
        break;



      case 'email':
        setErrors({
          ...errors,
          email:
            value.length === 0 ? 'Email is required' :
              !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
                ? 'Invalid email'
                : '',
        });
        break;

      case 'phone':
        setErrors({
          ...errors,
          phone:
            value.length === 0
              ? 'Phone is required'
              : value.length !== 10 || !/^[6-9]\d+$/.test(value) ? 'Invalid phone' : '',
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

  //  console.log("error", errors, errors.name ||  errors.email || errors.phone )

    if (errors.name || errors.email || errors.phone) return
    if (!state.name.trim() || !state.email.trim() || !state.phone.trim() ||!state.email.trim() ||!state.email.trim() ) {
      setErrors({
        name: !state.name ? 'FirstName is required.' : '',email: !state.email ? 'Email is required.' : '',
        phone: !state.phone ? 'Phone.No is required.' : '',
        // address: !contact.address ? 'Address is required.' : '',
        // serviceOption: !contact.serviceOption ? 'serviceoption is required' : ''
      });
      return;
    }
    try {
      const response = await axios.post();

      console.log("res", response)
      if (response.status === 201) {
        console.log("201")
        showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });

        setContact({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          comments: "",
          services: {
            // socialMedia : false
          },
          digitalmarketing: ""

        })
        setErrors({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          comments: "",
          services: {
            // socialMedia : false
          },
          digitalmarketing: ""
        });

      } else {
        console.log('else Unexpected response:', response);
        showToast("Internal server error", { style: { border: "1px solid red" } });
      }
    } catch (error) {
      console.log("error", error);
      showToast("Unexpected error", { style: { border: "1px solid red" } });
    }
  }


  //   const get_dat = async () => {
  //     try {
  //         let res = await axios.get('');
  //         console.log(get_dat);
  //         setState(res.data)
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };
  // useEffect(() => {
  //     get_dat();
  // }, [])

  // const handleSubmit = (event)=>{
  //   event.preventDefault()
  //   console.log(state);

  // }


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
                      <div class="card-effect ">
                        <div class="card-content-effect mt-3">
                          <h2>A dazzling website</h2>
                          <p className="secondary-text">
                            That showcases your brand story and engages your
                            audience like never before..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div class="card-effect">
                        <div class="card-content-effect">
                          <h1>SEO strategies</h1>
                          <p className="secondary-text">
                            that propel your website to the top of search engine
                            results, putting you directly in front of your ideal
                            customers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div class="card-effect">
                        <div class="card-content-effect">
                          <h2>Targeted social media</h2>
                          <p className="secondary-text">
                            Campaigns that spark conversations, build
                            communities, and drive traffic to your doorstep.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mt-4">
                      <div class="card-effect">
                        <div class="card-content-effect">
                          <h2>Email Marketing</h2>
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
          <section class="container cardish">
            <div className="row gy-4 w-100 ">
              <h2 className="secondary-header mx-auto text-center m-5">
                Our digital marketing toolbox is stocked with proven-effective
                tactics.
              </h2>
              <div class="col-lg-4">
                <div className="card-cardish1">
                  <div class="content">
                    <h6>Web Design and Development</h6>
                    <div class="hover_content">
                      <p className="secondary-text">
                        We create stunning, user-friendly websites that are
                        optimized for conversions and search engines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card-cardish1 ">
                  <div class="content">
                    <h6>Content Marketing</h6>
                    <div class="hover_content">
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
                <div class="card-cardish1">
                  <div class="content">
                    <h6>Social Media Marketing</h6>
                    <div class="hover_content">
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
                <div class="card-cardish1">
                  <div class="content">
                    <h6>Search Engine Optimization</h6>
                    <div class="hover_content">
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
                <div class="card-cardish1">
                  <div class="content">
                    <h6>Paid Advertising</h6>
                    <div class="hover_content">
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
                <div class="card-cardish1">
                  <div class="content">
                    <h6>Email Marketing</h6>
                    <div class="hover_content">
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

        <section className="container box1" >
          <form onSubmit={handleSubmit}>
            {/* <div className="row mt-5" >
              <h5>I'M Interested In</h5>
              <div className="col-md-6">
                <input type="checkbox" name="Socialmedia" onChange={handleCheckboxChange} value={state.services.socialMedia} />
                <span className="fs-5"> Social Media Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="websidedevelopment"
                  name="websidedevelopment"
                  onChange={handleCheckboxChange} value={state.services.websidedevelopment}
                />
                <span className="fs-5"> Webside Development</span>
                <br />
                <input
                  type="checkbox"
                  id="influencermarketing"
                  name="influencermarketing"
                  onChange={handleCheckboxChange} value={state.services.influencermarketing}
                />
                <span className="fs-5"> Influencer Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="brandindsolution"
                  name="brandindsolution"
                  onChange={handleCheckboxChange} value={state.services.brandindsolution}
                />
                <span className="fs-5"> Branding Solution</span>
                <br />
                <input type="checkbox" id="seo" name="seo" />{" "}
                <span className="fs-5"> Search Engine Optimization</span>
                <br />
                <input type="checkbox" id="contentwriting" name="contentwriting" onChange={handleCheckboxChange} value={state.services.contentwriting} />
                <span className="fs-5"> Content Writing</span>
                <br />
              </div>
              <div className="col-md-6">
                <div className="col-md-6 ">
                  <input
                    type="checkbox"
                    id="performancemarketing"
                    name="performancemarketing"
                    onChange={handleCheckboxChange} value={state.services.performancemarketing}
                  />
                  <span className="fs-5"> Performance Marketing</span> <br />
                  <input
                    type="checkbox"
                    id="eventmarketing"
                    name="eventmarketing"
                    onChange={handleCheckboxChange} value={state.services.eventmarketing}
                  />
                  <span className="fs-5"> Event Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="videoproduction"
                    name="videoproduction"
                    onChange={handleCheckboxChange} value={state.services.videoproduction}
                  />
                  <span className="fs-5"> Video Production</span>
                  <br />
                  <input type="checkbox" id="consultancy" name="consultancy" onChange={handleCheckboxChange} value={state.services.consultancy} />
                  <span className="fs-5"> Consultancy</span>
                  <br />
                  <input
                    type="checkbox"
                    id="instagrammarketing"
                    name="instagrammarketing"
                    onChange={handleCheckboxChange} value={state.services.instagrammarketing}
                  />
                  <span className="fs-5"> Instagram Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="shopifydevelopment"
                    name="shopifydevelopment"
                    onChange={handleCheckboxChange} value={state.services.shopifydevelopment}
                  />
                  <span className="fs-5"> Shopify Development</span>
                  <br />
                </div>
              </div>
            </div> */}
            <div>
              <div className="row justify-content-center mt-3 g-3">
                <div className="col-md-6">
                  <div className="" >
                    <input type="text" placeholder=" Enter Your Name*" className="digicontact mt-3" name="name" value={state.name} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.name}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Mobile Number*" className="digicontact mt-3" name="phone" value={state.phone} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Email*" className="digicontact mt-3" name="email" value={state.email} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.Email}</div>

                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Company Name*" className="digicontact mt-3" name="company" value={state.company} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.company}</div>

                  </div>
                </div>
                <h4>Average Monthly Marketing Budget in INR* </h4>
                <div className="col-md-12 digitalcontact"  >
                  <select name="digitalmarketing" value={state.digitalmarketing}
                    onChange={handleInputChange}>
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.digitalmarketing}</div>

                    <option ></option>
                    <option value="Rs. 0 to Rs. 1 Lakh">Rs. 0 to Rs. 1 Lakh</option>
                    <option value="Rs. 1 Lakh to Rs. 5 Lakh">Rs. 1 Lakh to Rs. 5 Lakh</option>
                    <option value="Rs. 5 Lakh to Rs. 10 Lakh">Rs. 5 Lakh to Rs. 10 Lakh</option>
                    <option value="Rs. 10 Lakh to Rs. 25 Lakh">Rs. 10 Lakh to Rs. 25 Lakh</option>
                    <option value="Rs. 25 Lakh to Rs. 50 Lakh">Rs. 25 Lakh to Rs. 50 Lakh</option>
                    <option value="Rs. 50 Lakh to Rs. 1 Crore">Rs. 50 Lakh to Rs. 1 Crore</option>
                    <option value="More than Rs. 1 Crore">More than Rs. 1 Crore</option>
                  </select>
                </div>


                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      placeholder=" Enter Your Website URL*"
                      className="digicontact mt-3"
                      name="website"
                      value={state.website}
                      onChange={handleInputChange} // Add this line for handling changes
                    />
                  </div>
                  <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.website}</div>

                </div>

                <div className="col-md-6 textarea1">
                  <div>
                    <textarea
                      id="myTextarea"
                      name="comments"
                      rows="4"
                      placeholder="Comments*"
                      className="digicontact"
                      value={state.comments}
                      onChange={handleInputChange}
                    ></textarea>
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.comments}</div>
                  </div>
                </div>
                <div class="py-4 my-4 text-center">
                  <button class="banner-bts fw-bold fs-5 heading5" target="_blank">SUBMIT DETAILS NOW</button>
                </div>


              </div>
            </div>
          </form>
        </section>

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

        <Footer />
      </div>
    </div>
  );
}
