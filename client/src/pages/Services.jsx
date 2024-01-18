import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

function Services() {
    const [popup, setPopup] = useState(true)
    setTimeout(() => {
        setPopup(false)
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
    return (
        <div className='services'>
            {
                popup && <div className="layer-one">
                    <div className="row">
                        <div className="col-md-7 vh-100 bg-axess-gold-2 one">

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
            }
            <div className="layer-two max-vh-100">
                <div className="row">
                    <div className="col-md-7 vh-100 bg-green-1 overflow-auto">
                        <div className="h-100 p-5">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={'/services'} className='display-5 fw-medium text-decoration-none text-white'>Axess</Link>
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </div>

                                <h1 className='display-2 col-md-6 fw-medium text-white'>
                                    The <span className='gold-text-2'>Axess</span> Technology Approach
                                </h1>
                                <p className='primary-text text-white m-0 fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nemo impedit facilis facere sed itaque pariatur assumenda accusantium beatae aliquid dignissimos vero sunt similique totam recusandae odio, error quam praesentium!</p>
                            </div>
                        </div>
                        <div className="vh-100">

                        </div>
                    </div>
                    <div className="col-md-5 vh-100 bg-axess-gold-1">
                        hi
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services