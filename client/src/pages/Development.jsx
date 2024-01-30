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
            <div className="col-md-8">
              <div
                className="pbg1  p-3 mt-3 rounded-3 "
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <p className="text-center p-2">
                  We are a team of experienced and passionate software
                  developers who specialize in crafting cutting-edge solutions
                  tailored to your specific needs. We have a deep understanding
                  of various technologies and frameworks, including:
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-lg-5 col-md-12 align-items-center d-flex  ">
              <div className="" data-aos="zoom-in" data-aos-duration="1000">
                <img src={Software} className=" img-fluid w-100 p-2" alt="" />
              </div>
            </div>
            <div className="col-lg-7  col-md-12 align-items-center d-flex">
              <div className="row ">
                <div
                  className="col-lg-3  col-md-6 mb-3  "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="my-4">
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
                  className="col-lg-3 col-md-6 mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="my-4">
                      <p className="fw-bold">
                        Web Development Frameworks:
                      </p>
                      <p>React</p>
                      <p> Angular</p>
                      <p>Vue.js</p>
                      <p>Django</p>
                      <p>Flask</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="my-4">
                      <p className="fw-bold">
                        Mobile Development Frameworks:
                      </p>
                      <p>Flutter</p>
                      <p> React Native</p>
                      <p>Kotlin</p>
                      <p>and Swift</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="2600"
                >
                  <div className=" card boxshadow small-card text-center">
                    <div className="my-4">
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
          <div
            className="col-lg-6  col-md-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div
              className="pbg1  my-3 "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="text-center p-2">
                We believe in a collaborative and agile approach to software
                development. Our process involves:
              </p>
            </div>
            <div className="boxshadow ">
              <div className=" p-4">
                <ul >
                  <li data-aos="fade-right" data-aos-duration="1400">
                    <p>
                      <span className="fw-bold">Discovery & Planning:</span> We
                      work closely with you to understand your business goals,
                      challenges, and target audience.
                    </p>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1800">
                    <p>
                      <span className="fw-bold">Design & Prototyping:</span> We
                      create prototypes and mockups to visualize your software
                      and ensure it aligns with your needs.
                    </p>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="2200">
                    <p>
                      <span className="fw-bold">Development & Testing:</span> We
                      write clean, efficient, and well-tested code using
                      industry-standard best practices.
                    </p>
                  </li>
                  <li data-aos="fade-right" data-aos-duration="2600">
                    <p>
                      <span className="fw-bold">Deployment & Maintenance:</span>{" "}
                      We seamlessly deploy your software and provide ongoing
                      support and maintenance.
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
                              src="https://kvramanan.com/static/media/profile1.5b0d4a80fcae1181e41b.png"
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
                              src="https://kvramanan.com/static/media/profile1.5b0d4a80fcae1181e41b.png"
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
                              src="https://kvramanan.com/static/media/profile1.5b0d4a80fcae1181e41b.png"
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
  );
}

export default Development;
