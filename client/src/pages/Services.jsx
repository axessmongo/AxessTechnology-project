import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import service from '../assets/images/services/r.png';

function Services() {
    const [popup, setPopup] = useState(true)
    setTimeout(() => {
        setPopup(false);
        let layout = document.querySelector('.layer-one')
        if (layout) {
            layout.style.display = 'none'
        }
    }, 3000)

    let nav = useNavigate()

    useEffect(() => {
        let body = document.querySelector('body');
        if (window.location.pathname == '/services') {
            body.style.overflow = 'hidden';
            console.log(window.location.pathname);
        } else {
            body.style.overflow = 'auto';
        }
    }, [nav])

    let scrollContainer = document.getElementById('scroller');

    let scrollTop = (getID, e) => {
        let element = document.getElementById(getID);
        if (element && scrollContainer) {
            const goTop = element.offsetTop;
            scrollContainer.scrollTo({
                top: goTop - 50,
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
        let softdevElement3 = document.getElementById('ai');

        let softdevTarget1 = document.querySelector('.service-nav[data-axess-target="softdev"]');
        let softdevTarget2 = document.querySelector('.service-nav[data-axess-target="softtest"]');
        let softdevTarget3 = document.querySelector('.service-nav[data-axess-target="ai"]');

        if (scrollContainer.scrollTop >= softdevElement1.offsetTop - 50 && scrollContainer.scrollTop < softdevElement2.offsetTop) {
            softdevTarget1.classList.add('active');
            softdevTarget2.classList.remove('active');
            softdevTarget3.classList.remove('active');
        } else if (scrollContainer.scrollTop >= softdevElement2.offsetTop - 50 && scrollContainer.scrollTop < softdevElement3.offsetTop) {
            softdevTarget1.classList.remove('active');
            softdevTarget2.classList.add('active');
            softdevTarget3.classList.remove('active');
        } else if (scrollContainer.scrollTop - 50 >= softdevElement3.offsetTop) {
            softdevTarget1.classList.remove('active');
            softdevTarget2.classList.remove('active');
            softdevTarget3.classList.add('active');
        } else {
            document.querySelectorAll('.service-nav[data-axess-target]').forEach(element => {
                element.classList.remove('active');
            });
        }
    };


    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
    }

    return (
        <div className='services'><div className="layer-one">
            <div className="row">
                <div className="col-md-7 vh-100 bg-axess-gold-3 one">
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
            <div className="layer-two max-vh-100">
                <div className="row gx-0">
                    <div className="col-md-8 vh-100 bg-green-1 overflow-auto" id='scroller'>
                        <div className="h-100 p-5">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={'/'} className='display-6 fw-medium text-decoration-none text-white'>Axess</Link>
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </div>

                                <h1 className='display-3 col-md-6 fw-bold text-white'>
                                    The <span className='gold-text-2'>Axess</span> Technology Approach
                                </h1>
                                <p className='primary-text text-white m-0 col-xxl-6 col-lg-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nemo impedit facilis facere sed itaque pariatur assumenda accusantium beatae aliquid dignissimos vero sunt similique totam recusandae odio, error quam praesentium!</p>
                            </div>
                        </div>
                        <div className="p-5 my-5 roller-container" id='softdev'>
                            <div className="min-vh-100 d-flex flex-column h-100 text-white justify-content-center">
                                <div className=" position-relative z-3">
                                    <h1 className='light-header'>
                                        Innovation
                                    </h1>
                                    <h1 className='primary-header mb-4'>
                                        Software Development
                                    </h1>
                                    <p className='primary-text mb-3'>
                                        In the realm of technology, software development stands as the driving force behind innovation and efficiency. It encompasses the art and science of crafting programs and applications that cater to diverse needs, from simplifying daily tasks to revolutionizing entire industries.
                                    </p>
                                    <div className='col-md-8 mx-auto mb-3'>
                                        <img src={service} className='w-100' alt="service" />
                                    </div>

                                    <div className="row gy-3 py-5 mt-5">
                                        <h1 className='text-center primary-header gold-text-2 mb-3'>Web Development Services</h1>
                                        <div className="col-md-6">
                                            <div className="services-card">
                                                <h6 className='card-header'>Custom Web Development</h6>
                                                <p className='primary-text mb-0'>Revitalize your business by leveraging our expertise in crafting custom-built, responsive websites. Enhance key facets of your operations with our meticulously designed solutions.</p>
                                                <div className='order'>
                                                    <span>01</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card">
                                                <h6 className='card-header'>Web UI/UX Development </h6>
                                                <p className='primary-text mb-0'>Energize your business with conversion-oriented websites that deliver striking designs, seamless navigation, intuitive interfaces, and exceptional customer experiences.</p>
                                                <div className='order'>
                                                    <span>02</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="services-card">
                                                <h6 className='card-header'>Web App Development </h6>
                                                <p className='primary-text mb-0'>Experience a paradigm shift in your business operations with our cutting-edge, interactive, and customer-focused web applications. Our tailored solutions and seamless integration propel your business to new heights and drive unparalleled success in the digital arena.</p>
                                                <div className='order'>
                                                    <span>03</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card">
                                                <h6 className='card-header'>CMS Development </h6>
                                                <p className='primary-text mb-0'>Establish a flourishing online presence with our CMS-driven Web content management, putting you in full command of your websites. Streamline and organize your digital narrative with a dynamic and user-friendly platform for sustained digital excellence.</p>
                                                <div className='order'>
                                                    <span>04</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-card">
                                                <h6 className='card-header'>E-commerce Web Development</h6>
                                                <p className='primary-text mb-0'>Entice a vast audience with tailor-made storefronts and digital solutions designed exclusively for your e-commerce business operations. Our solutions blend next-gen technology with intuitive design, delivering a lucrative digital storefront to drive sales.</p>
                                                <div className='order'>
                                                    <span>05</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className=' gold-btn'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className='bg-axess-gold-3'>
                            <div className="my-5 p-5">
                                <h1 className='secondary-header text-dark'>
                                    We’re More than Just Developers. We Solve Real-world Problems By Creating Better Digital Solutions.
                                </h1>
                                <p className='primary-text fw-medium'>As a full-stack software development agency, We make some extraordinary things that engage your users.</p>
                                <div className="col-xxl-8 col-xl-10 col-lg-10 mx-auto mt-5">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>ERP</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>CRM</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>HR Software</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>Enterprise Applications</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>Data Analytics</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>IT Service Management</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>Ecommerce</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>Supply Chain</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="small-card">
                                                <p className='text-white mb-0'>Web Portals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="vh-100 p-5" id='softtest'>
                            <div className="d-flex flex-column h-100">
                                <h1 className='display-3 col-md-6 fw-bold text-white'>Testing</h1>
                            </div>
                        </div>
                        <div className="vh-100 p-5 roller-container" id='ai'>
                            <div className="d-flex flex-column h-100">
                                <h1 className='display-3 col-md-6 fw-bold text-white'>AI</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 vh-100 bg-axess-gold-2">
                        <div className="services-right-side d-flex h-100 justify-content-center align-items-end flex-column position-relative">
                            <button className="service-nav" data-axess-target="softdev" onClick={(e) => { scrollTop('softdev', e) }}>
                                <span>Software Development</span>
                            </button>
                            <button className='service-hover-nav'>
                                <span>Technologies</span>
                            </button>
                            <button className="service-nav" data-axess-target="softtest" onClick={(e) => { scrollTop('softtest', e) }}>
                                <span>Software Testing</span>
                            </button>
                            <button className='service-hover-nav two'>
                                <span>Contact</span>
                            </button>
                            <button className="service-nav" data-axess-target="ai" onClick={(e) => { scrollTop('ai', e) }}>
                                <span>AI</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services