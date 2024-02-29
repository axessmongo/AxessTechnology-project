import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import Techsection from '../components/Techsection';
import techtools1 from "../assets/images/Technologies/testing_tool.gif"
import testimg from '../assets/images/testing/testing-img-3.jpg'
import performicon from '../assets/images/testing/performance.png'
import compatibility from '../assets/images/testing/compatibility.png'
import security from '../assets/images/testing/system-secure.png'
import usability from '../assets/images/testing/usability.png'
import testimgs from '../assets/images/testing/testing-img-2.png'
import Profiledub from '../assets/images/testing/dub-img.png'
import Process from "../assets/images/STLC.png";
import TestingTools from '../components/TestingTools';
import Price from '../components/Price';



function Testing() {
  return (
    <div className="">
      <div>
        <Navbar />
        <Banner
          h1="Software Testing"
          h2="Shield Your Software: Bulletproof Testing for a Flawless User Experience"
          h3="Bugs be gone! Our comprehensive software testing services identify and eradicate defects before they impact your users. Deliver confidence and quality with every release."
        />
      </div>

      {/* Bug Squashing section */}
      <section>
        <div className='container'>
          <div className='text-center pt-3'>
            <h1 className='bg-img-1 mx-auto'>Bug Squashing</h1>
            <p className='secondary-text'>We go beyond basic functionality checks. Our testing dives deep, encompassing:</p>
          </div>
          <div className='row pb-3'>
            <div className='col py-1 mt-3'>

              <div>
                <div className='row'>
                  <div className='col-md-6 col-xl-3  pt-3' data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="400">
                    <div className='small-card bug-card'>
                      <div className="row justify-content-center">
                      <div className='test-order col-4 '>
                        <img src={performicon} alt="" className='w-75' />
                      </div>
                      <div className='test-head col-9 text-center  '>
                        <h3>Performance</h3>
                      </div>
                      </div>
                      <p className='secondary-text'>Load testing, stress testing, and scalability analysis ensure your software handles real-world usage.</p>
                    </div>
                  </div>
                  <div className='col-md-6 col-xl-3  pt-3' data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="500">
                    <div className='small-card bug-card'>
                      <div className="row justify-content-center">
                      <div className='test-order col-4'>
                        <img src={security} alt="" className='w-75' />
                      </div>
                      <div className='test-head col-9 text-center'>
                        <h3>Security</h3>
                      </div>
                      </div>
                      <p className='secondary-text'> Penetration testing, vulnerability assessments, and secure coding practices safeguard your users' data.</p>
                    </div>
                  </div>
                  
                  <div className='col-md-6 col-xl-3  pt-3' data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="600">
                    <div className='small-card bug-card'>
                     <div className="row justify-content-center">
                     <div className='test-order col-4'>
                        <img src={usability} alt="" className='w-75' />
                      </div>
                      <div className='test-head col-9 text-center '>
                        <h3>Usability</h3>
                      </div>
                     </div>
                      <p className='secondary-text'>A/B testing, user interface reviews, and accessibility evaluations guarantee a smooth and intuitive user experience.</p>
                    </div>
                  </div>
                  <div className='col-md-6 col-xl-3  pt-3' data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="700">
                    <div className='small-card bug-card'>
                      <div className="row justify-content-center">
                      <div className='test-order col-4'>
                        <img src={compatibility} alt="" className='w-75' />
                      </div>
                      <div className='test-head col-9 text-center'>
                        <h3>Compatibility</h3>
                      </div>
                      </div>
                      <p className='secondary-text'>We test across browsers, devices, and operating systems for seamless performance on a any platform.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='col-md-5 mt-3 d-flex justify-content-center align-items-center d-none'>

              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1800">
                <img src={testimg} alt="" className='img-fluid' />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Multi-layered section */}
      <section className='bg-green-1 text-light'>
        <div className='container pt-5 mt-3'>
        <div className='text-center'>
                <h1 className='bg-img-1 mx-auto'>Multi-Layered</h1>
                <p className='secondary-text'>With our multi-layered approach, you get:</p>
              </div>
          <div className='row'>
            {/* <div className='col-md-5'>
              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1800">
                <img src={testimgs} alt="" className='img-fluid' />
              </div>
            </div> */}
            <div className='col text-center mb-5'>
              
              <div className='pt-5'>
                <div data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="bottom-bottom">
                  <p className='secondary-text'> <span className='fw-bold' style={{ color: ' #ffce05' }}>✅ Reduced costs: </span> Early bug detection saves time and resources compared to fixing issues post-launch.</p>
                </div>

                <div data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-anchor-placement="bottom-bottom">
                  <p className='secondary-text'> <span  className='fw-bold' style={{ color: ' #ffce05' }}> ✅ Enhanced user satisfaction: </span> Happy users mean better brand reputation and increased loyalty.</p>
                </div>

                <div data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-anchor-placement="bottom-bottom">
                  <p className='secondary-text'> <span  className='fw-bold' style={{ color: ' #ffce05' }}> ✅ Competitive edge: </span> Delivering a polished, bug-free product sets you apart in the market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-green-1 pb-5'>
        
        <h5 className=' mx-auto text-center text-white mb-2'
          data-aos="fade-up"
          
          data-aos-anchor-placement="bottom-bottom">Ready to shield your software and delight your users? <span className='d-block'></span> Contact us today for a free consultation!.
        </h5>
        <Link to={"/contact"} className='text-decoration-none'> <button className='gold-btn mx-auto' data-aos='zoom-out' data-aos-duration='600'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button></Link>
      </section>
      <section className="container mt-5">
        <div className="justify-content-center d-flex">
          <h1 className="text-center bg-img-1">Our Process</h1>
        </div>
        <div className="row justify-content-evenly">
          <p className="text-center secondary-text p-2">
            We believe in a collaborative and agile approach to software
            testing. Our process involves:
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
                className="boxshadow1 mt-4 "
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
                        <span className="fw-bold">Requirement Analysis:</span>{" "}
                        We engage with stakeholders to gather, comprehend, and document test requirements essential for shaping the testing strategy.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-back"
                    >
                      <p className="secondary-text">
                        <span className="fw-bold">Testplan creation:</span>{" "}
                        We outline the comprehensive strategy and approach for testing, including scope, objectives, resources, schedule, and deliverables.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-back"
                    >
                      <p className="secondary-text">
                        <span className="fw-bold"> Environment setup:</span>{" "}
                        We configure the necessary hardware, software, and network components to create a controlled testing environment that mirrors the production environment.
                      </p>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-easing="ease-in-back"
                    >
                      <p className="secondary-text">
                        <span className="fw-bold">
                        Defect logging:
                        </span>{" "}
                        We document identified issues or discrepancies found during testing, including details such as severity, steps to reproduce, and relevant attachments, to facilitate resolution and tracking.
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
      <Techsection />

   

      {/* Technology section */}
      <div className='tech-tools-section bg-green-1 py-5 '>
        <div className='container'>
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className='tech-tools-header d-flex justify-content-center'>
                <p className='bg-img-1'>Technologies</p>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-5">
              <div className="row align-items-center justify-content-center">
                <div className='techtoolsimg'>
                  <img src={techtools1} ></img>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-7">
              <div>

                <div className='text-white'>
                  <h2 className='text-center text-lg-start'>Huge Spectrum of Next-Gen Technologies Under One Roof</h2>
                  <p className='text-center  text-lg-start'>Leverage our in-depth technical expertise to bring your stunning ideas to Life.</p>
                </div>
                <div className='row align-items-center justify-content-center text-white tech-tools-container'>
                  <div className='col-6 col-md-4 col-lg-3 '>
                    <div className=' tech-tools'>
                      <h6 className='text-center py-3'>Language</h6>
                      <ul className="">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Java Script</li>
                        <li>Type Script</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-6 col-md-4 col-lg-3'>
                    <div className=' tech-tools'>
                      <h6 className='text-center py-3'>Automation Tool</h6>
                      <ul className="">
                        <li>Selenium</li>
                        <li>PlayWright</li>
                        <li>Cypress</li>
                        <li>RestAPI</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-6 col-md-4 col-lg-3'>
                    <div className=' tech-tools'>
                      <h6 className='text-center py-3'>FrameWork</h6>
                      <ul className="">
                        <li>Cucumber</li>
                        <li>Behave</li>
                        <li>Pytest</li>
                        <li>TestNG</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-6 col-md-4 col-lg-3'>
                    <div className=' tech-tools'>
                      <h6 className='text-center py-3'>DataBase</h6>
                      <ul className="">
                        <li>SQL</li>
                        <li>PLSQL</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-6 col-md-4 col-lg-3'>
                    <div className=' tech-tools'>
                      <h6 className='text-center py-3'>DevOps</h6>
                      <ul className="">
                        <li>Azure</li>
                        <li>AWS</li>
                        <li>Google cloud</li>
                        <li>Lambda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <TestingTools/>
      {/* Price section */}
      {/* <section className='pricing mt-5' id="pricing-section">
        <h1 className='primary-header text-center'>Unlock Our New Features</h1>
        <div className="container pricing-table">
          <div className="pricing-card ">
            <div className='shadow'>
              <h3 className="pricing-card-header">Basic</h3>
              <div className="price text-center"><sup>$</sup>15<span>/MO</span></div>
              <ul>
                <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
                <li><strong>Hosting - 1</strong> Year FREE</li>
                <li><strong>Single 1 </strong> Page Website</li>
                <li><strong>SSL</strong> Certificate</li>
                <li><strong>WhatsApp </strong> Chat</li>
                <li><strong>Social </strong> Media Integration</li>
                <li><strong>Static </strong> Website</li>
                <li><strong>Premade  </strong> Website</li>
                <li><strong>3 Month FREE </strong> Tech Support</li>
              </ul>
            </div>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Pro</h3>
            <div className="price text-center"><sup>$</sup>30<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Premium</h3>
            <div className="price text-center"><sup>$</sup>50<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-card-header">Elite</h3>
            <div className="price text-center"><sup>$</sup>80<span>/MO</span></div>
            <ul>
              <li><strong>Domain</strong>- Additional Charges (Rs.800)</li>
              <li><strong>Hosting - 1</strong> Year FREE</li>
              <li><strong>4 to 6</strong> Pages</li>
              <li><strong>WhatsApp</strong> Chat</li>
              <li><strong>SSL </strong> Certificate</li>
              <li><strong>Full Source </strong> Code</li>
              <li><strong>5 Email – 5GB </strong> Quota Each</li>
              <li><strong>Premade  </strong> Website</li>
              <li><strong>3 Month FREE </strong> Tech Support</li>
            </ul>
          </div>
        </div>
        <div className="justify-content-center d-flex">
          <a href="/contact" className="order-btn">Order Now</a>
        </div>
      </section > */}
      <Price/>

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
                              <p className="description heading5">I used to dread deployment day, fearing hidden bugs waiting to ambush my users. But since partnering with axess, my worries have vanished! Their thorough testing ensures my software launches flawlessly, leaving me free to focus on innovation. Thanks to them, I finally have the peace of mind to code with confidence.{" "}</p>
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
                              <h4 className='heading9 fw-bold fs-5'> Jane Doe</h4>
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
                              <p className="description heading5">Investing in axess testing services was one of the best decisions I've made for our company. Not only did they catch critical bugs before launch, but their insights on user experience helped us refine our product into a market winner. We've seen a significant rise in user engagement and positive reviews, directly translating to increased revenue and customer loyalty. Axess is more than just a testing provider; they're a strategic partner in our success."{" "}</p>
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
                              <h4 className='heading9 fw-bold fs-5'>Sarah White</h4>
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
                              <p className="description heading5">As a user, I'm tired of buggy software that crashes and frustrates. But ever since my favorite app started using axess for testing, it's been a smooth ride! No more unexpected glitches or confusing interfaces. Everything works seamlessly and intuitively, making my life easier and more enjoyable. Thank you for prioritizing user experience and setting the bar high for software quality!{" "}</p>
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
                              <p className="description heading5">Managing a large software project can be a pressure cooker. But with axess by my side, I can finally sleep soundly at night. Their expertise and dedication helped us meet every deadline while delivering a defect-free product. Their clear communication and proactive approach kept the project on track and everyone informed. They're the dream team for anyone looking to avoid development headaches and ensure a successful launch!{" "}</p>
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
  )
}

export default Testing