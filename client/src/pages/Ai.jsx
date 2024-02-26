import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import Software from "../assets/images/Our-Expertise.jpg";
import Process from "../assets/images/Process.jpg"
import Why from "../assets/images/Why-Choose.jpg";
import bubble from "../assets/images/bubble.webp";
import success from "../assets/images/success.png";
import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link } from "react-router-dom";
import footer from "../assets/images/footer.svg";
import frompng from "../assets/images/fromlogo.jpg";
// import contact  from '../assets/images/contact.jpg'
// import "../assets/css/index.scss";
import kvrprofile from '../assets/images/kvr profile.png'



function Ai() {
  return (
    <div className="software">
    <Navbar />
    <Banner
      h1="AI Development"
      h2="Revolutionize Your Operations: Transform with Software Tailored to Your Needs."
      h3="Utilize the power of technology with our custom software development services.
      "
    />
    <section className="container ">
      <div className="text-center">
        <p className="fs-5 mt-4">
          In today's digital age, having robust and innovative software is no
          longer a luxury, it's a necessity for businesses to thrive. At Axess
          Technology, we understand the power of software and its ability to
          transform your operations, streamline processes, and unlock new
          opportunities for growth.
        </p>
      </div>
      <div className="row align-items-center mt-5">
        <div
          className="col-md-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div>
            <img src={Software} className="rounded-start-circle " alt="" />
          </div>
        </div>
        <div className="col-md-8" data-aos="fade" data-aos-duration="1000">
          <div className="pbg p-4">
            <h1 className="bg-img-1">Our Expertise:</h1>
            <p>
              We are a team of experienced and passionate software developers
              who specialize in crafting cutting-edge solutions tailored to
              your specific needs. We have a deep understanding of various
              technologies and frameworks, including:
            </p>
            <ul>
              <li>
                <div className="d-flex align-items-center">
                  <span className="li-border">1</span>
                  <span className="fw-bold p-2">Programming Languages:</span>
                  Python, Java, JavaScript, C++, C#, and more.
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-1">
                  <span className="li-border">2</span>
                  <span className="fw-bold p-2">
                    Web Development Frameworks:
                  </span>{" "}
                  React, Angular, Vue.js, Django, Flask, and others.
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center mt-1">
                  <span className="li-border">3</span>
                  <span className="fw-bold p-2">
                    Web Development Frameworks:
                  </span>{" "}
                  React, Angular, Vue.js, Django, Flask, and others.
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-1">
                  <span className="li-border">4</span>
                  <span className="fw-bold p-2">
                    Web Development Frameworks:
                  </span>{" "}
                  React, Angular, Vue.js, Django, Flask, and others.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8" data-aos="fade" data-aos-duration="1000">
          <div className="pbg p-4">
            <h1 className="bg-img-1">Our Process:</h1>
            <p>
              We believe in a collaborative and agile approach to software
              development. Our process involves:
            </p>
            <div className="d-flex">
              <span className="li-border"></span>
              <ul>
                <li>
                  <span className="fw-bold">Discovery & Planning:</span> We
                  work closely with you to understand your business goals,
                  challenges, and target audience.
                </li>
                <li>
                  <span className="fw-bold">Design & Prototyping: </span> We
                  create prototypes and mockups to visualize your software and
                  ensure it aligns with your needs.
                </li>
                <li>
                  <span className="fw-bold">Development & Testing:</span>We
                  write clean, efficient, and well-tested code using
                  industry-standard best practices.
                </li>
                <li>
                  <span className="fw-bold">Deployment & Maintenance:</span>We
                  seamlessly deploy your software and provide ongoing support
                  and maintenance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-md-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={Process} className="rounded-end-circle" alt="" />
        </div>
        <div
          className="col-md-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={Why} className="rounded-start-circle" alt="" />
        </div>
        <div
          className="col-md-8 rounded-4 "
          data-aos="fade"
          data-aos-duration="1000"
        >
          <div className="pbg p-4">
            <h1 className="bg-img-1">Why Choose Us:</h1>

            <ul>
              <li>
                <span className="fw-bold">Experienced Team:</span> Our team
                has a proven track record of delivering successful software
                projects for clients across diverse industries.
              </li>
              <li>
                <span className="fw-bold">Custom Solutions: </span> We don't
                offer one-size-fits-all solutions. We build software that is
                uniquely tailored to your specific requirements.
              </li>
              <li>
                <span className="fw-bold">Agile Methodology:</span>We embrace
                agile development practices to ensure flexibility, quick
                iterations, and continuous improvement.
              </li>
              <li>
                <span className="fw-bold">Transparent Communication:</span>We
                keep you informed throughout the development process and value
                your feedback.
              </li>
              <li>
                <span className="fw-bold">Data-Driven Approach:</span>We
                leverage data and analytics to optimize your software and
                measure its impact on your business.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<div className="bg-green-1 text-light">
    <section className="container py-3">
      <div className="text-center">
        <h1>Our Process</h1>
        <p>
          We believe in a collaborative and agile approach to software
          development. Our process involves:{" "}
        </p>
      </div>

      <div>
        <div className="row py-2">
          <div className="col-md-5 text-end d-flex justify-content-center align-items-center">
            <div>
              <h3>Discovery & Planning</h3>
              <p>
                We work closely with you to understand your business goals,
                challenges, and target audience.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="">
              <img src={bubble} alt="" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>

      <div>
        <div className="row py-2">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="">
              <img src={success} alt="" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div>
              <h3>Design & Prototyping</h3>
              <p>
                We create prototypes and mockups to visualize your software
                and ensure it aligns with your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row py-2">
          <div className="col-md-5 text-end d-flex justify-content-center align-align-items-center">
            <div>
              <h3>Development & Testing</h3>
              <p>
                We write clean, efficient, and well-tested code using
                industry-standard best practices.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="">
              <img src={bubble} alt="" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>

      <div>
        <div className="row py-2">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="">
              <img src={success} alt="" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div>
              <h3>Deployment & Maintenance</h3>
              <p>
                We seamlessly deploy your software and provide ongoing support
                and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
    <section>
      <div className="container">
        <h3 className="text-center mt-5">Our Expertise</h3>
        <p className="text-center">
          We are a team of experienced and passionate software developers who
          specialize in crafting cutting-edge solutions tailored to your
          specific needs. We have a deep understanding of various technologies
          and frameworks, including
        </p>
        <div className="expertise">
          <div className="expertise-section">
            <h2>Programming Languages</h2>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>C#</li>
              <li>And more...</li>
            </ul>
          </div>
          <div className="expertise-section">
            <h2>Web Development Frameworks</h2>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>Vue.js</li>
              <li>Django</li>
              <li>Flask</li>
              <li>And others...</li>
            </ul>
          </div>
          <div className="expertise-section">
            <h2>Mobile Development Frameworks</h2>
            <ul>
              <li>Flutter</li>
              <li>React Native</li>
              <li>Kotlin</li>
              <li>Swift</li>
            </ul>
          </div>
          <div className="expertise-section">
            <h2>Cloud Platforms</h2>
            <ul>
              <li>AWS</li>
              <li>Azure</li>
              <li>Google Cloud Platform</li>
              <li>And others...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Techsection />
    <section className="pricing mt-5">
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
    <section className="testimonal">
      <div className="container">
        <h1 className="section-header text-white">
          client review <span> Lorem ipsum dolor sit amet.</span>
        </h1>
        <div className="testimonals">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src={kvrprofile}
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2> Dave Wood</h2>
                          <h4> Web Developer</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content1">
                        <p>
                          {" "}
                          <span>
                            <i class="bi bi-quote"></i>
                          </span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt, reiciendis! Autem optio quaerat
                          culpa recusandae. Magnam dolorum ea necessitatibus
                          magni?
                        </p>
                        <p className="socials">
                          <i class="bi bi-youtube"></i>
                          <i class="bi bi-twitter"></i>
                          <i class="bi bi-whatsapp"></i>

                          <i class="bi bi-behance"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                           src={kvrprofile}
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2> martin</h2>
                          <h4> Web Developer</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content1">
                        <p>
                          {" "}
                          <span>
                            <i class="bi bi-quote"></i>
                          </span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt, reiciendis! Autem optio quaerat
                          culpa recusandae. Magnam dolorum ea necessitatibus
                          magni?
                        </p>
                        <p className="socials">
                          <i class="bi bi-youtube"></i>
                          <i class="bi bi-twitter"></i>
                          <i class="bi bi-whatsapp"></i>
                          <i class="bi bi-behance"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <div className="single-item">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="profile">
                        <div className="img-area">
                          <img
                            src={kvrprofile}
                            alt=""
                          />
                        </div>
                        <div className="bio">
                          <h2> sara</h2>
                          <h4> Web Developer</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content1">
                        <p>
                          {" "}
                          <span>
                            <i class="bi bi-quote"></i>
                          </span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt, reiciendis! Autem optio quaerat
                          culpa recusandae. Magnam dolorum ea necessitatibus
                          magni?
                        </p>
                        <p className="socials">
                          <i class="bi bi-youtube"></i>
                          <i class="bi bi-twitter"></i>
                          <i class="bi bi-whatsapp"></i>

                          <i class="bi bi-behance"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
  )
}

export default Ai