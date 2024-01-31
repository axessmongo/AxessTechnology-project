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

function Development() {
  return (
    <div className="webdev">
      <Navbar />
      <Banner
        h1="Web Development"
        h2=" Crafting Websites that Captivate and Convert        "
        h3="
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
      {/* <section className="bgcolor">
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
                  data-aos-duration="600"
                  data-aos-easing="ease-in-back"
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
                  data-aos-duration="700"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="my-4">
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
                  className="col-lg-3 col-md-6 mb-3 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-back"
                >
                  <div className="card boxshadow small-card text-center">
                    <div className="my-4">
                      <p className="fw-bold">Mobile Development Frameworks:</p>
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
                  data-aos-duration="900"
                  data-aos-easing="ease-in-back"
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
      </section> */}
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
      <section className="bg-green-1 py-5 mt-5">
        <p className="bg-img-1 mx-auto ">Call to Action</p>
        <h3 className="secondary-header mx-auto text-center text-white mb-2">
          {" "}
          Get a free website audit: Identify areas for improvement and unlock your website's full potential.
        </h3>
        <p className="col-md-8 primary-text mx-auto text-center text-white mb-4">
        Browse our portfolio: See examples of the stunning websites we've created for our clients.

        </p>
        <button
          className="gold-btn mx-auto "
          data-aos="zoom-out"
          data-aos-duration="600"
        >
          <span className="d-block">Connect with us</span>{" "}
          <i className="bi bi-arrow-right"></i>
        </button>
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
