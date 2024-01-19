import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
// import gif from '../assets/images/logo/axess.gif';

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
                top: goTop,
                behavior: 'smooth'
            });
            let allServiceNavs = document.querySelectorAll('.service-nav');
            allServiceNavs.forEach(nav => {
                nav.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        }
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
                <div className="row">
                    <div className="col-md-7 vh-100 bg-green-1 overflow-auto" id='scroller'>
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
                        <div className="vh-100 p-5" id='softdev'>
                            <div className="d-flex flex-column h-100">
                                <h1 className='display-3 col-md-6 fw-bold text-white'>Development</h1>
                            </div>
                        </div>
                        <div className="vh-100 p-5" id='softtest'>
                            <div className="d-flex flex-column h-100">
                                <h1 className='display-3 col-md-6 fw-bold text-white'>Testing</h1>
                            </div>
                        </div>
                        <div className="vh-100 p-5" id='ai'>
                            <div className="d-flex flex-column h-100">
                                <h1 className='display-3 col-md-6 fw-bold text-white'>AI</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 vh-100 bg-axess-gold-2">
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