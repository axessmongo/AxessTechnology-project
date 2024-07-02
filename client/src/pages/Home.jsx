import React, { useEffect } from 'react'
 import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.scss'
import Svg1 from '../components/Svg1';
import pulse from '../assets/images/bubble.webp';
import Solutions from '../components/Solutions';
import Award from '../components/Award';
import Footer from '../components/Footer';
import Industries from '../components/Industries';
import Techsection from '../components/Techsection';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Development from './Development';
import bannerimg from '../assets/images/homeimg.png'
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
            <Navbar/>
            <div className="home">
                <div className="hero-banner mt-5 pt-5">
                    <div className="px-xxl-5 mx-xxl-5 px-5 text-center text-lg-start">
                        <div className="row position-relative z-2 min-vh-100 jus justify-content-lg-between align-items-center text-white g-lg-5">
                            <div className="col-md-12 col-lg-6 order-2 order-lg-1">
                                <img src={pulse} className='pulse' alt="pulse" />
                                <Svg1/>
                                <div className="hero-banner-content">
                                    <h1 className='mb-5' data-aos='fade-up' data-aos-duration='500'>Forget fragmented services. Axess builds your digital ecosystem - seamless, powerful, designed to win.</h1>
                                    <p className='primary-text mb-5' data-aos='fade-up' data-aos-duration='600'>Software crafted to empower. Websites that captivate and convert. Marketing that ignites engagement. Testing that ensures flawless experiences.</p>
                                    {/* <button className='gold-btn mb-5 mb-lg-0 mx-auto mx-lg-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button> */}
                                    <Link to={"/contact"} className='text-decoration-none'> <button className='gold-btn mb-5 mb-lg-0 mx-auto mx-lg-0' data-aos='zoom-out' data-aos-duration='600'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button></Link>
                                </div>
                            </div>
                            <div className="col-md-12 mx-auto col-lg-6 order-lg-2" data-aos='flip-right' data-aos-duration='800' >
                                <img src={bannerimg}className='main-img animatedimg' alt="bannerimg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Award/>
            <Solutions/>
            <Techsection/>
            <Industries/>
            <Carousel head={"Our Works"}/>
            <Footer/>
            
        </section>
    )
}
