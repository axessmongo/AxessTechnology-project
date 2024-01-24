import React from 'react'

export default function Banner({h1,h2,h3}) {
    return (
        <div className='hero-banner hero-2'>
            <div className='container text-center green-text'>
                <p className="bg-img-2 mb-5 mx-auto">{h1}</p>
                <h1 className='secondary-header mb-3'>{h2}</h1>
                <p className='mb-0 secondary-text mb-3'>{h3}</p>
                <button className='gold-btn green-btn m-5 mx-auto' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}
