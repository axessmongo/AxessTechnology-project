import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.scss'
import Svg1 from '../components/Svg1';
import pulse from '../assets/images/bubble.webp';
import Card from '../components/Card';
import Award from '../components/Award';
import Footer from '../components/Footer';
export default function Home() {
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
        <section>
            <div className="home">
                <div className="hero-banner">
                    <div className="px-xxl-5 mx-xxl-5 px-5 text-center text-lg-start">
                        <div className="row position-relative z-2 vh-100 justify-content-between align-items-center text-white g-5">
                            <div className="col-md-6 order-2 order-lg-1">
                                <img src={pulse} className='pulse' alt="pulse" />
                                <Svg1/>
                                <div className="hero-banner-content">
                                    <h1 className='primary-header mb-5' data-aos='fade-up' data-aos-duration='500'>Modernizing And Transforming Businesses Digitally To Move Forward</h1>
                                    <p className='primary-text mb-5' data-aos='fade-up' data-aos-duration='600'>Embrace our visionary software development services to navigate the ever-changing business landscape. We help you stay ahead of industry trends to secure your market dominance and achieve unrivaled success.</p>
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="col-md-6 order-lg-2">
                                <img src="https://maticz.com/assets/images/home/banner_img_home.webp" data-aos='flip-right' data-aos-duration='800' className='main-img' alt="https://maticz.com/assets/images/home/banner_img_home.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Award/>
            <Card/>
            <Footer/>
        </section>
    )
}
