import React from "react";
import Reactlogo from "../assets/images/demo/react-logo.png";
import vitelogo from "../assets/images/demo/vite-logo.png";
import watchdemo from "../assets/images/demo/watch screenshot.png";
import photodemo from "../assets/images/demo/photography.png";
import cateringdemo from "../assets/images/demo/catering.png";
import gitfdemo from "../assets/images/demo/gift.png";

export default function CategoriesIn() {
  return (
    <div>
      {/* <section >
                <div className="container">
                    <div className="row">
                        <div className='d-flex  mt-5 text-content border-bottom border-danger'>
                            <div className="col-md-2 content">ECommerce</div>
                            <div className="col-md-2 content">Portfolio</div>
                            <div className="col-md-2 content ">Bussiness</div>
                            <div className="col-md-2 content">Insurance</div>
                            <div className="col-md-2 content">Hospital</div>
                            <div className="col-md-2 content">School </div>
                        </div>

                    </div>
                </div>

            </section> */}

      <div className="">
        <div className="overflow-hidden" id="resume">
          <div className="text-md-center text-center mt-5">
            <h1> Categories</h1>
          </div>
          <div className="row  mt-5 text-content ">
            <div className="nav-div rounded-4 ">
              <ul
                className="nav nav-pills mb-3 text-center justofy-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item col-md-2" role="presentation">
                  <div className=" ">
                    <div
                      className="nav-link active"
                      id="pills-ecommerce-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-ecommerce"
                      type="div"
                      role="tab"
                      aria-controls="pills-ecommerce"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>Ecommerce</h4>
                    </div>
                  </div>
                </li>

                <li className="nav-item col-md-2" role="presentation">
                  <div className="  ">
                    <div
                      className="nav-link"
                      id="pills-Portfolio-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Portfolio"
                      type="div"
                      role="tab"
                      aria-controls="pills-Portfolio"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>Portfolio</h4>
                    </div>
                  </div>
                </li>
import React, { useState } from 'react'
import Reactlogo from '../assets/images/demo/react-logo.png'
import vitelogo from '../assets/images/demo/vite-logo.png'
import watchdemo from '../assets/images/demo/watch screenshot.png'
import photodemo from '../assets/images/demo/photography.png'
import cateringdemo from '../assets/images/demo/catering.png'
import gitfdemo from '../assets/images/demo/gift.png'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'


export default function CategoriesIn() {
    const [activeTab, setActiveTab] = useState('pills-ecommerce')
    return (
        <div>
            <Navbar />
            <Banner h1='Categories' h2='Get started with 900+ free, customizable templates, a smart drag and drop editor, tools to boost your online presence and more.' h3='Collaborate with us' />
            <div className="cat">
                <div className="" id="resume">
                    <div className="text-md-center text-center mt-5">
                    </div>
                    <div className="container">
                        <div className="row mt-5 text-content ">
                            <div className="nav-div rounded-4 ">
                                <ul className="nav nav-pills mb-3 text-center justofy-content-center" id="pills-tab" role="tablist" >
                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className=" ">
                                            <div
                                                className="nav-link active content"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                <p className='secondary-text m-0'>Ecommerce</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className="  ">
                                            <div
                                                className="nav-link content"
                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="true"



                                            >
                                                <p className='secondary-text m-0'>Portfolio</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className="  ">
                                            <div
                                                className="nav-link content"
                                                id="pills-bussiness-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-bussiness"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-bussiness"
                                                aria-selected="true"

                                            >
                                                <p className='secondary-text m-0'>Bussiness</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className="  ">
                                            <div
                                                className="nav-link content"
                                                id="pills-insurance-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-insurance"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-insurance"
                                                aria-selected="true"

                                            >
                                                <p className='secondary-text m-0'>Insurance</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className="  ">
                                            <div
                                                className="nav-link content"
                                                id="pills-hospital-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-hospital"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-hospital"
                                                aria-selected="true"

                                            >
                                                <p className='secondary-text m-0'>Hospital</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item col-md-2" role="presentation">
                                        <div className="  ">
                                            <div
                                                className="nav-link content"
                                                id="pills-school-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-school"
                                                type="div"
                                                role="tab"
                                                aria-controls="pills-school"
                                                aria-selected="true"

                                            >
                                                <p className='secondary-text m-0'>School</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade active show"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                        >
                            <section>
                                <div className='container py-4 my-3'>
                                    <div className='text-center pb-2'>
                                        <h3>We Create Products That Users Love</h3>
                                        <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>

                <li className="nav-item col-md-2" role="presentation">
                  <div className="  ">
                    <div
                      className="nav-link"
                      id="pills-bussiness-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bussiness"
                      type="div"
                      role="tab"
                      aria-controls="pills-bussiness"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>Bussiness</h4>
                    </div>
                  </div>
                </li>
                <li className="nav-item col-md-2" role="presentation">
                  <div className="  ">
                    <div
                      className="nav-link"
                      id="pills-insurance-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-insurance"
                      type="div"
                      role="tab"
                      aria-controls="pills-insurance"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>Insurance</h4>
                    </div>
                  </div>
                </li>
                <li className="nav-item col-md-2" role="presentation">
                  <div className="  ">
                    <div
                      className="nav-link"
                      id="pills-hospital-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-hospital"
                      type="div"
                      role="tab"
                      aria-controls="pills-hospital"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>Hospital</h4>
                    </div>
                  </div>
                </li>
                <li className="nav-item col-md-2" role="presentation">
                  <div className="  ">
                    <div
                      className="nav-link"
                      id="pills-school-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-school"
                      type="div"
                      role="tab"
                      aria-controls="pills-school"
                      aria-selected="true"
                      class="content"
                    >
                      <h4>School</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <section>
                <div className="container py-4 my-3">
                  <div className="text-center pb-2">
                    <h3>We Create Products That Users Love</h3>
                    <p>
                      Explore Our Award-winning Products Used by Millions Around
                      the World.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className=" p-1"
                        style={{ backgroundColor: " #05463c" }}
                      >
                        <img src={gitfdemo} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="py-3">
                        <h3>E-Commerce</h3>
                        <div className="py-3">
                          <img
                            src={vitelogo}
                            alt=""
                            className="img-fluid w-25"
                          />
                        </div>
                        <div className="pt-2">
                          <h3>Gift Zone</h3>
                          <p className="pt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias, pariatur esse. Consectetur earum
                            architecto impedit eveniet porro harum rerum id ab
                            ratione repudiandae eum error, nostrum sed,
                            dignissimos, aliquam quia?
                          </p>
                          <div className="pt-2">
                            <button
                              className="gold-btn m-0"
                              data-aos="fade-right"
                              data-aos-duration="800"
                            >
                              <span className="d-block">Demo Live</span>{" "}
                              <i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti delectus sed reiciendis voluptatibus at inventore saepe iste modi, voluptates consectetur expedita, veniam, tempore est ex rerum harum distinctio praesentium.
                                Aperiam magni libero, facilis, necessitatibus, sunt exercitationem repellendus officia nisi quidem corrupti porro! Dolorum, nemo. Magnam pariatur amet officiis! Neque, iste! Praesentium quasi similique autem corporis numquam placeat? Rerum, alias.
                                Sequi earum odio minima corrupti voluptatibus esse voluptatum magnam dignissimos, voluptas velit natus ratione repellat eius similique error odit tenetur dicta molestiae saepe at sapiente qui quisquam cupiditate id! Aut.
                                Pariatur, facere. Fugiat, laboriosam eaque, doloremque ducimus nobis placeat ullam minima natus libero vel sed quisquam quam vero itaque iste alias repudiandae omnis numquam perspiciatis dignissimos repellendus soluta voluptate modi?
                                Repudiandae corrupti error sint ut commodi sapiente totam odit nulla enim accusantium ipsam provident exercitationem quasi, qui doloremque cum. Quidem molestiae fugiat aperiam sapiente laboriosam corrupti eveniet dicta quae cum.
                                A minima cumque itaque tempore voluptate similique quae ipsam est at ratione, perferendis mollitia tenetur aut quis reiciendis officia, delectus optio sed accusamus iusto sit temporibus veritatis! Aperiam, nisi saepe?
                                Cumque ducimus quod tempora dolor ex similique quas doloribus, nihil libero nemo, eveniet rerum aliquid voluptatum delectus veritatis facilis atque dolores, accusantium cum labore quaerat saepe. Incidunt, dignissimos. Aut, praesentium.
                                Commodi beatae expedita eius inventore cupiditate quidem fuga ratione quia perspiciatis itaque porro sit id repudiandae quod ut maiores vitae aspernatur dolores magnam nihil velit, odit amet officiis iusto? Voluptatibus!
                                Quo, itaque, eum dolore reprehenderit et, non aperiam delectus quas totam ex accusamus impedit fuga quidem nam deleniti! Doloremque nobis neque eos reiciendis libero maxime laudantium nulla ab debitis repellat?
                                Sapiente ratione nulla atque amet odit vel omnis quo, blanditiis maiores ad excepturi aliquam reprehenderit aliquid necessitatibus harum, optio beatae aperiam asperiores quam hic accusamus? Cupiditate aperiam recusandae hic blanditiis.
                                Perspiciatis, voluptate deserunt in unde natus suscipit ut modi, culpa ad cumque, incidunt optio numquam ea commodi quaerat enim sapiente maiores voluptatum earum! Corrupti harum quasi, necessitatibus illo laboriosam dolorum!
                                Dolore quisquam totam blanditiis labore corrupti provident ab sint rem sapiente, assumenda soluta quos corporis alias obcaecati explicabo esse, voluptatem quis? Amet aspernatur doloribus saepe consequuntur officia ullam maxime asperiores.
                                Soluta temporibus itaque alias. Culpa unde suscipit ad, illum sequi commodi consequatur et possimus omnis, minima officiis fugiat eius sunt quisquam quibusdam quam dolorem maxime voluptatum. Doloremque expedita dolores id!
                                Doloribus quae tenetur pariatur alias laboriosam? Consequatur veniam impedit est quos amet facere natus dolorem soluta animi sed ducimus ut necessitatibus, nihil ullam, nam reprehenderit maxime tempora sit voluptates a.
                                Accusantium numquam voluptatem ea saepe quasi libero, dignissimos molestias totam mollitia sunt consequuntur sequi alias aut nesciunt, perspiciatis, nulla est optio similique ratione beatae? Nam molestiae similique doloremque deserunt quae?
                                Ipsam tempora neque ipsum delectus consequatur ut reprehenderit atque repellat consectetur est? Ut iure quae aliquid corporis numquam architecto aspernatur necessitatibus ex ipsam, incidunt aut veniam minima earum deleniti minus.
                                Fuga cumque ad eaque repellendus hic nostrum. Necessitatibus quibusdam quod inventore dolor, quisquam similique illum explicabo quae mollitia. Iusto fugit architecto esse. Nisi ea itaque, excepturi a voluptatibus unde obcaecati!
                                Fuga sed ipsa sunt ex minima deserunt voluptatum inventore odit eos, adipisci fugit quo aliquam aliquid suscipit. Ducimus facilis blanditiis eos assumenda quod id veritatis reiciendis placeat provident, illo harum?
                                Inventore obcaecati neque dolore incidunt architecto tempora delectus veritatis, nisi qui nihil sapiente nam facilis perspiciatis cupiditate natus quasi suscipit voluptates consectetur maxime ipsa quod assumenda doloribus labore. Laborum, iure.
                            </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-green-1">
                <div className="container text-light py-4 my-3">
                  <div className="text-center">
                    <h3>We Create Products That Users Love</h3>
                    <p>
                      Explore Our Award-winning Products Used by Millions Around
                      the World.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="py-3">
                        <h3>E-Commerce</h3>
                        <div className="py-3">
                          <img
                            src={Reactlogo}
                            alt=""
                            className="img-fluid w-25"
                          />
                        </div>
                        <div className="pt-2">
                          <h3>Time Zone</h3>
                          <p className="pt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias, pariatur esse. Consectetur earum
                            architecto impedit eveniet porro harum rerum id ab
                            ratione repudiandae eum error, nostrum sed,
                            dignissimos, aliquam quia?
                          </p>

                          <button
                            className="gold-btn m-0"
                            data-aos="fade-right"
                            data-aos-duration="800"
                          >
                            <span className="d-block">Demo Live</span>{" "}
                            <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-1" style={{ backgroundColor: "gray" }}>
                        <img src={watchdemo} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <section className="container">sangu</section>
            </div>
            <div
              className="tab-pane fade"
              id="pills-bussiness"
              role="tabpanel"
              aria-labelledby="pills-bussiness-tab"
              tabindex="0"
            >
              <div>
                <section>
                  <div className="container py-4 my-3">
                    <div className="text-center pb-2">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <div>
                            <img src="https://maticz.com/assets/images/home/nft_img.webp" alt="" className='img-fluid' />
                        </div> */}

                        <div
                          className=" p-1"
                          style={{ backgroundColor: " #05463c" }}
                        >
                          <img src={photodemo} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>Business</h3>
                          <div className="py-3">
                            <img
                              src={vitelogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Photography</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-green-1">
                  <div className="container text-light py-4 my-3">
                    <div className="text-center">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>Business</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Catering</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>

                            <button
                              className="gold-btn m-0"
                              data-aos="fade-right"
                              data-aos-duration="800"
                            >
                              <span className="d-block">Demo Live</span>{" "}
                              <i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="p-1"
                          style={{ backgroundColor: "gray" }}
                        >
                          <img
                            src={cateringdemo}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-insurance"
              role="tabpanel"
              aria-labelledby="pills-insurance-tab"
              tabindex="0"
            >
              <div>
                <section className="container">
                  <div className="py-4 my-3">
                    <div className="text-center pb-2">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                        <img
                          src="https://maticz.com/assets/images/home/launchpad_img.webp"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Time Zone (Watch)</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-green-1">
                  <div className="container text-light py-4 my-3">
                    <div className="text-center">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Thamil</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2 text-end">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <img
                            src="https://maticz.com/assets/images/home/tokenomics_img.webp"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-hospital"
              role="tabpanel"
              aria-labelledby="pills-hospital-tab"
              tabindex="0"
            >
              <div>
                <section className="container">
                  <div className="py-4 my-3">
                    <div className="text-center pb-2">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                        <img
                          src="https://maticz.com/assets/images/home/launchpad_img.webp"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Time Zone (Watch)</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-green-1">
                  <div className="container text-light py-4 my-3">
                    <div className="text-center">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Thamil</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2 text-end">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <img
                            src="https://maticz.com/assets/images/home/tokenomics_img.webp"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-school"
              role="d"
              aria-labelledby="pills-school-tab"
              tabindex="0"
            >
              <div>
                <section className="container">
                  <div className="py-4 my-3">
                    <div className="text-center pb-2">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                        <img
                          src="https://maticz.com/assets/images/home/launchpad_img.webp"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Time Zone (Watch)</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-green-1">
                  <div className="container text-light py-4 my-3">
                    <div className="text-center">
                      <h3>We Create Products That Users Love</h3>
                      <p>
                        Explore Our Award-winning Products Used by Millions
                        Around the World.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="py-3">
                          <h3>E-Commerce</h3>
                          <div className="py-3">
                            <img
                              src={Reactlogo}
                              alt=""
                              className="img-fluid w-25"
                            />
                          </div>
                          <div className="pt-2">
                            <h3>Thamil</h3>
                            <p className="pt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Alias, pariatur esse. Consectetur earum
                              architecto impedit eveniet porro harum rerum id ab
                              ratione repudiandae eum error, nostrum sed,
                              dignissimos, aliquam quia?
                            </p>
                            <div className="pt-2 text-end">
                              <button
                                className="gold-btn m-0"
                                data-aos="fade-right"
                                data-aos-duration="800"
                              >
                                <span className="d-block">Demo Live</span>{" "}
                                <i className="bi bi-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <img
                            src="https://maticz.com/assets/images/home/tokenomics_img.webp"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
            <Footer/>
        </div>
      </div>
    </div>
  );
}
