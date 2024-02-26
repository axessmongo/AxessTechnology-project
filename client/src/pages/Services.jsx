import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import service from '../assets/images/services/r.png';
import bug from '../assets/images/services/bug.gif';
import cycle from '../assets/images/services/cycle.png';
import vmodel from '../assets/images/services/v-model.png';
import pmodel from '../assets/images/services/p-model.png';
import hmodel from '../assets/images/services/h-model.png';
import ai from '../assets/images/services/robot.gif';
import digi from '../assets/images/services/digi.png';
import AOS from 'aos';
function Services() {
    const [nav, setNav] = useState(false)
    const [popup, setPopup] = useState(true)
    setTimeout(() => {
        setPopup(false);
        let body = document.querySelector('body');
        let layout = document.querySelector('.layer-one')
        if (layout) {
            layout.style.display = 'none';
            body.style.overflow = '';
            AOS.refresh();
        }
    }, 2000)

    let navigation = useNavigate()

    useEffect(() => {
        let body = document.querySelector('body');
        if (window.location.pathname == '/services') {
            window.scrollTo(0, 0);
            body.style.overflow = 'hidden';
            console.log(window.location.pathname);
        } else {
            body.style.overflow = 'auto';
        }
    }, [navigation])

    let scrollTop = (getID, e) => {
        setNav(false)
        let element = document.getElementById(getID);
        if (element) {
            const goTop = element.offsetTop;
            window.scrollTo({
                top: goTop - 0,
                behavior: 'smooth'
            });
            let allServiceNavs = document.querySelectorAll('.service-nav');
            allServiceNavs.forEach(nav => {
                nav.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        }
    }

    let handleScroll = () => {
        let softdevElement1 = document.getElementById('softdev');
        let softdevElement2 = document.getElementById('softtest');
        let softdevElement3 = document.getElementById('webdev');
        let softdevElement4 = document.getElementById('digi');

        let softdevTarget1 = document.querySelector('.service-nav[data-axess-target="softdev"]');
        let softdevTarget2 = document.querySelector('.service-nav[data-axess-target="softtest"]');
        let softdevTarget3 = document.querySelector('.service-nav[data-axess-target="webdev"]');
        let softdevTarget4 = document.querySelector('.service-nav[data-axess-target="digi"]');

        if (window.scrollY >= softdevElement1.offsetTop - 0 && window.scrollY < softdevElement2.offsetTop) {
            softdevTarget1.classList.add('active');
            softdevTarget2.classList.remove('active');
            softdevTarget3.classList.remove('active');
            softdevTarget4.classList.remove('active');
            softdevElement1.classList.add('active');
            softdevElement2.classList.remove('active');
            softdevElement3.classList.remove('active');
            softdevElement4.classList.remove('active');
        } else if (window.scrollY >= softdevElement2.offsetTop - 50 && window.scrollY < softdevElement3.offsetTop) {
            softdevTarget1.classList.remove('active');
            softdevTarget2.classList.add('active');
            softdevTarget3.classList.remove('active');
            softdevTarget4.classList.remove('active');
            softdevElement1.classList.remove('active');
            softdevElement2.classList.add('active');
            softdevElement3.classList.remove('active');
            softdevElement4.classList.remove('active');
        } else if (window.scrollY >= softdevElement3.offsetTop - 50 && window.scrollY < softdevElement4.offsetTop) {
            softdevTarget1.classList.remove('active');
            softdevTarget2.classList.remove('active');
            softdevTarget3.classList.add('active');
            softdevTarget4.classList.remove('active');
            softdevElement1.classList.remove('active');
            softdevElement2.classList.remove('active');
            softdevElement3.classList.add('active');
            softdevElement4.classList.remove('active');
        }
        else if (window.scrollY + 50 >= softdevElement4.offsetTop) {
            softdevTarget1.classList.remove('active');
            softdevTarget2.classList.remove('active');
            softdevTarget3.classList.remove('active');
            softdevTarget4.classList.add('active');
            softdevElement1.classList.remove('active');
            softdevElement2.classList.remove('active');
            softdevElement3.classList.remove('active');
            softdevElement4.classList.add('active');
        }
        else {
            document.querySelectorAll('.service-nav[data-axess-target]').forEach(element => {
                element.classList.remove('active');
                softdevElement1.classList.remove('active');
                softdevElement2.classList.remove('active');
                softdevElement3.classList.remove('active');
                softdevElement4.classList.remove('active');
            });
        }
    };

    window.addEventListener('scroll', handleScroll);



    return (
        <div className='services'><div className="layer-one">
            <div className="row">
                <div className="col-md-7 vh-100 bg-axess-gold-3 one d-none d-md-block">
                    <div className="d-flex vh-100 justify-content-center align-items-center">
                        {/* <img src={gif} alt="gif" style={{width:`300px`}}/> */}
                    </div>
                </div>
                <div className="col-md-5">
                    <p className='popup-letters two'>
                        <span>l</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </p>
                </div>
            </div>
        </div>
            <div className="layer-two min-vh-100">
                <div className="fixed-nav d-block d-md-none">
                    <button
                        className={`shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'}`}
                        type="button" onClick={() => setNav(!nav)}>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>{/*  */}
                </div>
                <div className="row gx-0">
                    <div className={`col-md-8 bg-green-1`} id='scroller'>
                        <div className="vh-100 py-3 px-4 p-md-5">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="d-flex justify-content-between align-items-center" data-aos="fade-down">
                                    <Link to={'/'} className='display-6 fw-medium text-decoration-none text-white d-none d-md-block'>Axess Technology</Link>
                                    <img src={logo} alt="logo" className='img-fluid logo' />
                                    <button
                                        className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'} d-block d-md-none`}
                                        type="button" onClick={() => setNav(!nav)}>
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                                <div className="pattern d-none">

                                </div>
                                {/* <h1 className='display-3 col-md-10 fw-bold text-white' data-aos="fade-up" data-aos-duration='700'>
                                    The <span className='gold-text-2'>Axess</span> Technology Services
                                </h1> */}
                                <div data-aos="fade-up" data-aos-duration='700' data-aos-anchor-placement="bottom-bottom">
                                    <h2 className=' text-white m-0 col-xxl-8 col-lg-10'>Code with <span className='gold-text-2'>Confidence</span>,<br></br> Click with <span className='gold-text-2'>Precision</span>,<br></br> Convert with <span className='gold-text-2'>Conviction</span>: Partner with Us for <span className='gold-text-2'>Digital Mastery</span></h2>
                                </div>
                                <div data-aos="fade-up" data-aos-duration='700' data-aos-anchor-placement="bottom-bottom">
                                    <p className='primary-text text-white m-0 col-xxl-8 col-lg-10'>Unshackle your digital potential. Code flawlessly, drive clicks strategically, convert with unwavering certainty. We're your partners in digital mastery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 roller-container softdev" id='softdev'>
                            <div className="min-vh-100 d-flex flex-column h-100 text-white justify-content-center p-5">
                                <div className=" position-relative z-3">
                                    <h1 className='light-header'>
                                        Innovation
                                    </h1>
                                    <h1 className='primary-header mb-4' data-aos='fade-up' data-aos-duration='600'>
                                        Software Development
                                    </h1>
                                    <h4 className=' mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" >
                                        Craft Software That Captivates: From Pixel to Profit
                                    </h4>
                                    <p className='primary-text mb-3 text-white mb-5' data-aos='fade-up' data-aos-duration='600'>
                                        We don't just code, we build digital dreams. Unleash the power of custom software with our expert developers and innovative approach.
                                    </p>
                                    <div className='col-md-8 mx-auto mb-3' data-aos='zoom-in' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                        <img src={service} className='w-100 animatedimg' alt="service" />
                                    </div>
                                    <h4 className=' mb-4 pt-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Become a Software Symphony Conductor:</h4>
                                    <p className='primary-text mb-3 text-white mb-5' data-aos='fade-up' data-aos-duration='600'>
                                        Instead of juggling multiple agencies for design, development, and deployment, harmonize your project with our all-encompassing approach. We're your one-stop shop, conducting every stage from conception to launch, ensuring your software sings in perfect pitch.
                                    </p>
                                    <p className='primary-text mb-3 text-white mb-5' data-aos='fade-up' data-aos-duration='600'>
                                        This collaborative and streamlined process means seamless communication, reduced friction, and a beautiful symphony of software at the end. So, ditch the cacophony of fragmented services and let us orchestrate your digital masterpiece.
                                    </p>

                                    {/* <div className="row gy-3 pt-5 mt-5">
                                        <h1 className='text-center primary-header-2 mb-3' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Web Development Services</h1>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Custom Web Development</h6>
                                                <p className='primary-text mb-0'>Revitalize your business by leveraging our expertise in crafting custom-built, responsive websites. Enhance key facets of your operations with our meticulously designed solutions.</p>
                                                <div className='order'>
                                                    <span>01</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Web UI/UX Development </h6>
                                                <p className='primary-text mb-0'>Energize your business with conversion-oriented websites that deliver striking designs, seamless navigation, intuitive interfaces, and exceptional customer experiences.</p>
                                                <div className='order'>
                                                    <span>02</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="services-card" data-aos='zoom-in' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Web App Development </h6>
                                                <p className='primary-text mb-0'>Experience a paradigm shift in your business operations with our cutting-edge, interactive, and customer-focused web applications. Our tailored solutions and seamless integration propel your business to new heights and drive unparalleled success in the digital arena.</p>
                                                <div className='order'>
                                                    <span>03</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>CMS Development </h6>
                                                <p className='primary-text mb-0'>Establish a flourishing online presence with our CMS-driven Web content management, putting you in full command of your websites. Streamline and organize your digital narrative with a dynamic and user-friendly platform for sustained digital excellence.</p>
                                                <div className='order'>
                                                    <span>04</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>E-commerce Web Development</h6>
                                                <p className='primary-text mb-0'>Entice a vast audience with tailor-made storefronts and digital solutions designed exclusively for your e-commerce business operations. Our solutions blend next-gen technology with intuitive design, delivering a lucrative digital storefront to drive sales.</p>
                                                <div className='order'>
                                                    <span>05</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <Link to={"/development"} className='gold-btn' data-aos='fade' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom"><span className='d-block'>Know More</span> <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>

                            {/* <div className=' mb-5'>
                                <div className="mt-0 pt-0 my-5 p-5 text-center text-white">
                                    <h1 className='secondary-header' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                        We’re More than Just Developers. We Solve Real-world Problems By Creating Better Digital Solutions.
                                    </h1>
                                    <p data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" className='primary-text fw-medium'>As a full-stack software development agency, We make some extraordinary things that engage your users.</p>
                                    <div className="col-xxl-9 col-xl-10 col-lg-12 mx-auto mt-5 mb-5">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>ERP</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>CRM</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>HR Software</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Enterprise Applications</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Data Analytics</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>IT Service Management</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Ecommerce</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Supply Chain</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="small-card" data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                    <p className='text-white mb-0'>Web Portals</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div> */}

                        </div>
                        <div className="my-5 text-white softtest mb-5" id='softtest'>
                            <div className="p-5">
                                <div className=" position-relative z-3">
                                    <h1 className='light-header'>
                                        Reliability
                                    </h1>
                                    <h1 className='primary-header mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" >
                                        Software Testing
                                    </h1>
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className=' mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" >
                                                Shield Your Software: Bulletproof Testing for a Flawless User Experience

                                            </h4>
                                            <p className='primary-text mb-0' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                Bugs be gone! Our comprehensive software testing services identify and eradicate defects before they impact your users. Deliver confidence and quality with every release.  </p>
                                        </div>
                                        <div className='col-md-4'>
                                            <img src={bug} className='w-100 animatedimg' alt="service" data-aos='zoom-in' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" />
                                        </div>
                                    </div>

                                    <h1 className='text-center primary-header mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Software Testing Life Cycle</h1>
                                    <div className="row gx-2 justify-content-center">
                                        <div className="col-md-2 test-card-container">
                                            <div className="test-card" data-aos='fade-right' data-aos-duration='800' data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-back">
                                                <div className="logo"><i className="bi bi-search"></i></div>
                                                <p className="number ">01.</p>
                                                <p className="content mb-0">Requirement <br />Analysis</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 test-card-container" data-aos='fade-right' data-aos-duration='700' data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-back">
                                            <div className="test-card ">
                                                <div className="logo"><i className="bi bi-card-checklist"></i></div>
                                                <p className="number ">02.</p>
                                                <p className="content mb-0">Test <br />Planning</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 test-card-container" data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-back">
                                            <div className="test-card ">
                                                <div className="logo"><i className="bi bi-code-slash"></i></div>
                                                <p className="number ">03.</p>
                                                <p className="content mb-0">Test Case <br />Development</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 test-card-container" data-aos='fade-right' data-aos-duration='500' data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-back">
                                            <div className="test-card ">
                                                <div className="logo"><i className="bi bi-gear"></i></div>
                                                <p className="number ">04.</p>
                                                <p className="content mb-0">Test <br />Execution</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 test-card-container" data-aos='fade-right' data-aos-duration='400' data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-back">
                                            <div className="test-card ">
                                                <div className="logo"><i className="bi bi-check2-circle"></i></div>
                                                <p className="number ">05.</p>
                                                <p className="content mb-0">Test <br />Deployment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gy-3 my-5">
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Requirement Analysis</h6>
                                                <p className='primary-text mb-0'>In this stage, software testers work with stakeholders involved in the development process to identify and understand test requirements. The insights from this discussion, consolidated into the Requirement Traceability Matrix (RTM) document, will be the foundation to build the test strategy.

                                                </p>
                                                <div className='order'>
                                                    <span>01</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Test Planning </h6>
                                                <p className='primary-text mb-0'>After thorough analysis, a test plan is created. Test planning involves aligning with relevant stakeholders on the test strategy.</p>
                                                <div className='order'>
                                                    <span>02</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='zoom-in' data-aos-duration='500' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Test Case Development </h6>
                                                <p className='primary-text mb-0'>After defining the scenarios and functionalities to be tested, we'll write the test cases. For manual test cases, test management tools like Xray can be used to note down details of what was performed, the results, findings, and suggestions for developers to reproduce those bugs. For automated tests, intuitive UIs provided by tools like Katalon, Ranorex, or TestComplete are available. Open-source options like Selenium, Cypress, and Playwright are also popular for building custom frameworks. </p>
                                                <div className='order'>
                                                    <span>03</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={cycle} className='cycle' alt="cycle.png" data-aos='zoom-in' data-aos-duration='500' data-aos-anchor-placement="bottom-bottom" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Test Execution </h6>
                                                <p className='primary-text mb-0'>With clear objectives in mind, the QA team writes test cases, test scripts, and prepares necessary test data for execution.</p>
                                                <div className='order'>
                                                    <span>04</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card" data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                <h6 className='card-header'>Test Deployment</h6>
                                                <p className='primary-text mb-0'>This is the final phase of Software Testing. Software testers will gather to analyze what they found from the tests, evaluate the effectiveness, and document key takeaways for future reference.</p>
                                                <div className='order'>
                                                    <span>05</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row gx-5 justify-content-evenly align-items-end mb-5">
                                        <div className="col-12 text-center">
                                            <h1 className='primary-header' data-aos='fade-up' data-aos-duration='400' data-aos-anchor-placement="bottom-bottom">Popular Software Testing Models</h1>
                                        </div>
                                        <div className="col-10 col-sm-6 col-lg-3">
                                            <img src={vmodel} alt="vmodel" data-aos='fade-up' data-aos-duration='400' data-aos-anchor-placement="bottom-bottom" />
                                        </div>
                                        <div className="col-10 col-sm-6 col-lg-3">
                                            <img src={pmodel} alt="pmodel" data-aos='fade-down' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" />
                                        </div>
                                        <div className="col-10 col-sm-6 col-lg-3">
                                            <img src={hmodel} alt="hmodel" data-aos='flip-right' data-aos-duration='800' data-aos-anchor-placement="bottom-bottom" />
                                        </div>
                                    </div>
                                    <Link to={"/testing"} className='gold-btn' data-aos='fade' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom"><span className='d-block'>Know More</span> <i className="bi bi-arrow-right"></i></Link>

                                </div>
                            </div>
                        </div>
                        <div className="my-5 roller-container text-white webdev" id='webdev'>
                            <div className="min-vh-100 p-5">
                                <div className=" position-relative z-3">
                                    <h1 className='light-header'>
                                        intelligent
                                    </h1>
                                    <h1 className='primary-header mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                        Web Development
                                    </h1>
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className=' mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" >
                                                Crafting Websites that Captivate and Convert</h4>
                                            <p className='primary-text mb-0' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                In today's digital world, your website is the first impression you make on potential customers. It's your virtual storefront, your digital ambassador, and the key to unlocking online success. At Axess Technology, we don't just build websites; we craft online experiences that captivate visitors, fuel engagement, and seamlessly convert them into loyal customers.
                                            </p>
                                        </div>
                                        <div className='col-md-4' data-aos='zoom-out' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                            <img src={ai} className='w-100 animatedimg' alt="service" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <Link to={"/webdevelopment"} className='gold-btn' data-aos='fade' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom"><span className='d-block'>Know More</span> <i className="bi bi-arrow-right"></i></Link>
                                </div>

                            </div>
                        </div>
                        <div className="mt-5 roller-container text-white digi" id='digi'>
                            <div className="min-vh-100 p-5">
                                <div className="position-relative">
                                    <h1 className='light-header'>
                                        Socializing
                                    </h1>
                                    <h1 className='primary-header mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                        Digital Marketing
                                    </h1>
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4 className=' mb-4' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom" >
                                                Ignite Your Brand and Dominate the Digital Landscape
                                            </h4>
                                            <p className='primary-text mb-0' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                                In today's digital age, a captivating online presence is no longer a luxury, it's a necessity. At Axess Technology, we believe in the power of digital marketing to fuel brand awareness, ignite engagement, and propel conversions. Our team of expert strategists, content creators, and data-driven wizards weave the magic that takes your brand from the shadows to the spotlight.
                                            </p>
                                        </div>
                                        <div className='col-md-4' data-aos='zoom-out' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">
                                            <img src={digi} className='w-100 animatedimg' alt="service" />
                                        </div>
                                    </div>
                                    <br></br>
                                    <Link to={"/digitalmarketing"} className='gold-btn' data-aos='fade' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom"><span className='d-block'>Know More</span> <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 vh-100 bg-axess-gold-2 position-fixed end-0 second-nav ${nav && 'is-active'}`}>
                        {/* <div className='d-md-none d-flex justify-content-between align-items-center bg-white px-2'>
                            <Link to={'/'} className='text-decoration-none'>
                                <img src={logo} alt="logo" className='img-fluid logo p-2' /></Link>
                            <button
                                className={`shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'} d-block d-md-none mt-2`}
                                type="button" onClick={() => setNav(!nav)}>
                                <span class="hamburger-box text-danger">
                                    <span class="hamburger-inner text-danger"></span>
                                </span>
                            </button>
                        </div> */}
                        <div className="services-right-side d-flex h-100 justify-content-center align-items-end flex-column position-relative">
                            <button data-aos='fade-left' className="service-nav" data-axess-target="softdev" onClick={(e) => { scrollTop('softdev', e) }}>
                                <span>Software Development</span>
                            </button>
                            <button data-aos='fade-left' className="service-nav" data-axess-target="softtest" onClick={(e) => { scrollTop('softtest', e) }}>
                                <span>Software Testing</span>
                            </button>
                            <button data-aos='fade-left' className="service-nav" data-axess-target="webdev" onClick={(e) => { scrollTop('webdev', e) }}>
                                <span>Web Development</span>
                            </button>
                            <button data-aos='fade-left' className="service-nav" data-axess-target="digi" onClick={(e) => { scrollTop('digi', e) }}>
                                <span>Digital Marketing</span>
                            </button>
                            <Link to='/' className='service-hover-nav' data-aos='fade'>
                                <span>Home</span>
                            </Link>
                            <Link to='/ourworks' className='service-hover-nav two' data-aos='fade'>
                                <span>Our Works</span>
                            </Link>
                            <Link to='/contact' className='service-hover-nav three' data-aos='fade'>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services