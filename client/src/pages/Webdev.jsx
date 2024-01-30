import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../assets/css/pricing.scss";
import { Link } from "react-router-dom";

import "../assets/css/index.scss";
import Techsection from "../components/Techsection";

function Webdev() {
  return (
    <div className="webdev">
      <Navbar />
      <Banner
        h1=" Web Development"
        h2="Crafting Websites that Captivate and Convert
            "
        h3="
            "
      />
      <section>
        <div className="container mt-5">
          <div class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" />
            </div>
            <div class="card-text">
              <p class="card-meal-type">Breakfast/Eggs</p>
              <h2 class="card-title">Délicieux Bénédicte</h2>
              <p class="card-body">
                Eggs Benedict with hollandaise sauce, crispy bacon and an
                assortment of garden herbs.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80" />
            </div>
            <div class="card-text">
              <p class="card-meal-type">Lunch/Meat</p>
              <h2 class="card-title">Du bœuf Burger</h2>
              <p class="card-body">
                A beef burger with wholewheat patty, juicy lettuce and a side of
                gluten free fries
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
            </div>
            <div class="card-text">
              <p class="card-meal-type">Soups/Meat</p>
              <h2 class="card-title">Soupe à l’oignon</h2>
              <p class="card-body">
                The traditional French soup made with onions and beef with a
                dollop of garlic and saffaron mayonise.
              </p>
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

export default Webdev;
