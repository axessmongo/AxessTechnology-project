import React from "react";
import "../src/assets/css/About.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import AboutImage from '../src/assets/images/About2.jpg';
import success from "../src/assets/images/about/success.png";
import whyus2 from '../src/assets/images/about/whyus2.png'
// import rightway from '../src/assets/images/about/rightway.jpg'
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <Banner
        h1={"About Us"}
        h2={"Axess Technology: Weaving Digital Successes for 8 Years"}
      />

      <div className="container-fluid bg-green-1">
        <p className="primary-header text-white text-center whyustext" data-aos="fade-up" data-aos-duration="1000"> Why Us</p>
        <div className="row d-flex ">
          <div className="col-md-6 mt-5" data-aos="fade-right" data-aos-duration="1000">
            <div className="whyusimg">
              <img src={whyus2} alt="whyus2" />
            </div>
          </div>
          {/* <div className="col-md-1 text-center text-white">
            <div className="">
              <p className="primary-header">W</p>
            </div>
            <div>
              <p className="primary-header mb-1">h</p>
            </div>
            <div>
              <p className="primary-header mb-1">y</p>
            </div>
            <div>
              <p className="primary-header mb-1">U</p>
            </div>
            <div>
              <p className="primary-header mb-1">S</p>
            </div>
          </div> */}

          <div className="col-md-6 mt-5" data-aos="fade-left" data-aos-duration="1000">
            <div className="row justify-content-center align-items-center text-white text-center">
              <div className="col-md-11 mt-5 secondary-text mx-auto">
                <p>Axess isn't just a tech company, it's your digital ecosystem architect. We weave the code that empowers your business, test the limits to ensure flawless experiences, craft websites that captivate and convert, and ignite your online presence with data-driven marketing magic. With 8 years of experience and a passionate team, we don't just deliver services, we build long-term partnerships, tailoring solutions that unlock your digital potential across software development, testing, website development, and digital marketing. Let's write your digital success story together.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" pt-3 row justify-content-end">
          <div className="col-md-8">
            <div className="p-3 mx-2" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="mt-5 text-center bg-img-1 mx-auto">Our CEO</h1>
              <p className="mt-3 ceo-content">
                Founded by a passionate entrepreneur, Mr. Venkteshan, Axess
                Technology has been igniting digital dreams for the past eight
                years. We're not just tech wizards; we're your collaborators,
                crafting custom solutions that propel your brand forward. From
                the pixel-perfect world of website development to the rigorous
                realm of software testing, we cover all bases. Our experienced
                software developers weave lines of code into powerful
                applications, and our sharp-eyed testers ensure every click is
                glitch-free. We don't stop there; our digital marketing maestros
                orchestrate campaigns that drive engagement and conversions,
                turning clicks into loyal customers. At Axess, your success is
                our compass. We believe in building long-term partnerships,
                walking hand-in-hand with our clients, understanding their
                aspirations, and tailoring solutions that fit their unique
                needs. We're not just a service provider; we're your digital
                co-pilot, navigating the ever-evolving landscape with expertise
                and unwavering dedication.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="aboutusimg position-relative" data-aos="fade-left" data-aos-duration="1000">
              <div class="blur-img aboutMdimg">
                <img
                  src={
                    "https://venkatesanj.com/static/media/md-img.d3695a0cdf566e1eea34.png"
                  }
                  alt="Venkatesanj"
                />
              </div>
              <div class="rounded-img">
                <img
                  src={
                    "https://venkatesanj.com/static/media/md-img.d3695a0cdf566e1eea34.png"
                  }
                  alt="Venkatesanj"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='aboutme'>
           <div className='container mt-5'>
                <div >
                    <h3 className=''>Let's talk about your digital aspirations. Whether you're a budding startup or a seasoned enterprise, Axess has the tools and vision to help you soar.</h3>
                    <div className="row dots text-center mt-5">
                        <div className="col-lg-4 aboutcase">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cards1 ">
                                        <p className='text-center'>Software Development: We craft bespoke applications that empower your business processes, enhance efficiency, and streamline operations.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Software Testing: We leave no stone unturned, ensuring your software is bug-free, reliable, and delivers a seamless user experience.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6 ">
                                    <div className="cards1">
                                        <p className='text-center'>Website Development: We create stunning, user-friendly websites that are the perfect digital canvas for your brand story.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Digital Marketing: We orchestrate data-driven campaigns that ignite engagement, drive conversions, and build lasting customer relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='mt-5'>
                                <img src={success} alt="success" className="about-img" style={{ width: '300px', height: '300px' }} />
                            </div>
                           
                        </div>
                        <div className="col-lg-4 mt-5">
                                <div className="cards1">
                                    <p className='text-center mt-5 py-5 fs-5'><q>Eight years of experience, countless success stories, and a burning passion for digital excellence - that's Axess Technology.</q></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </div> */}
      <div className="container mt-5">
        <div>
          <h5 className="secondary-header text-center py-5" data-aos="fade-up" data-aos-duration="1000">
            Let's talk about your digital aspirations. Whether you're a budding
            startup or a seasoned enterprise, Axess has the tools and vision to
            help you soar.
          </h5>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 " data-aos="fade-right" data-aos-duration="1000">
            <div className="d-flex justify-content-center align-items-center">
              <img src={success} alt="success" className="img-fluid w-75" />
            </div>
          </div>
          <div className="col-md-6 pt-4" data-aos="fade-left" data-aos-duration="1000">
            <div className="mt-3">
              <h6 className="secondary-header">
                Here's a glimpse into our magic:
              </h6>
            </div>
            <div className="aboutpoints mt-3 pt-3">
              <ul>
                <li>
                  <strong>Software Development:</strong> We craft bespoke
                  applications that empower your business processes, enhance
                  efficiency, and streamline operations.
                </li>
                <li className="mt-4 pt-2">
                  <strong>Software Testing:</strong> We leave no stone unturned,
                  ensuring your software is bug-free, reliable, and delivers a
                  seamless user experience.
                </li>
                <li className="mt-4 pt-2">
                  <strong>Website Development:</strong> We create stunning,
                  user-friendly websites that are the perfect digital canvas for
                  your brand story.
                </li>
                <li className="mt-4 pt-2">
                  <strong>Digital Marketing:</strong> We orchestrate data-driven
                  campaigns that ignite engagement, drive conversions, and build
                  lasting customer relationships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-green-1 py-5 mt-5">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="secondary-header mx-auto text-center text-white mb-2">
            <q>
              Eight years of experience, countless success stories, and a
              burning passion for digital excellence - that's Axess Technology.
            </q>
          </h3>
          <p className="col-md-8 fs-5 mx-auto text-center text-white mt-4">
            Ready to weave your digital success story? Let's connect!{" "}
          </p>

        </div>

        <div className="row  py-3" data-aos="fade-up" data-aos-duration="600">
          <div className="col-md-6 pt-2 d-flex justify-content-center ">
            <div className="text-center">
              <p className="secondary-text text-white"> Follow us on social media for digital insights and inspiration.</p>
              <div className=" d-flex justify-content-center align-items-center">
                <Link to={'https://www.facebook.com/axesstechnology?mibextid=ZbWKwL'} target="_blank">
                  <i className="bi bi-facebook text-primary fs-4 mx-3"></i>
                </Link>
                <Link to={'https://www.instagram.com/axess_technology?igsh=MXQ2MXdpZzJnaHo2aw=='} target="_blank">
                  <i className="bi bi-instagram text-danger fs-4 mx-3"></i>
                </Link>
                <Link>
                  <i className="bi bi-whatsapp text-success fs-4 mx-3"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-2 text-center">
            <p className="secondary-text text-white">
              Schedule a free consultation to discuss your unique needs.{" "}
            </p>
            <Link to={"/contact"} className="text-decoration-none">
              <button
                className="gold-btn mx-auto"
                data-aos="zoom-out"
                data-aos-duration="300"
              >
                <span className="d-block">Connect with us</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </button>
            </Link>

          </div>

        </div>



      </section>
      <Footer />
    </div>
  );
}

export default About;
