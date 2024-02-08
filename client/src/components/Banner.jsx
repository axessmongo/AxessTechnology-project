import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Banner({ h1, h2, h3 }) {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <div className='hero-banner hero-2' data-aos='fade'>
            <div className='container text-center green-text'>
                <p className="bg-img-2 mb-5 mx-auto" data-aos='fade-up' data-aos-duration='400'>{h1}</p>
                <h1 className='secondary-header mb-3' data-aos='fade-up' data-aos-duration='600'>{h2}</h1>
                <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p>
                {isContactPage ? null : (
                    <Link to={"/contact"} className='text-decoration-none'>
                        <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>
                            <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
