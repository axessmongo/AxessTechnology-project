import React from 'react';
import '../src/assets/css/About.scss'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import AboutImage from '../src/assets/images/About2.jpg';
import success from '../src/assets/images/about/success.svg'
import Footer from './components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <Banner h1={'About Us'} h2={'Axess Technology: Weaving Digital Successes for 8 Years'} h3={'Hello World'} />
            <div className=''>
                <div className="row mt-5 justify-content-end">
                    <div className="col-md-8 mt-5">
                       <div className="p-5 mx-5">
                       <h1 className='mt-5 text-center bg-img-1 mx-auto'>Our CEO</h1>
                        <p className='mt-3 ceo-content'>Founded by a passionate entrepreneur, Mr. Venkteshan, Axess Technology has been igniting digital dreams for the past eight years. We're not just tech wizards; we're your collaborators, crafting custom solutions that propel your brand forward.From the pixel-perfect world of website development to the rigorous realm of software testing, we cover all bases. Our experienced software developers weave lines of code into powerful applications, and our sharp-eyed testers ensure every click is glitch-free. We don't stop there; our digital marketing maestros orchestrate campaigns that drive engagement and conversions, turning clicks into loyal customers.At Axess, your success is our compass. We believe in building long-term partnerships, walking hand-in-hand with our clients, understanding their aspirations, and tailoring solutions that fit their unique needs. We're not just a service provider; we're your digital co-pilot, navigating the ever-evolving landscape with expertise and unwavering dedication.</p>
                       </div>
                    </div>
                    <div className="col-md-4">
                        <div className='aboutusimg position-relative'>
                            <div class="blur-img">
                                <img src={'https://venkatesanj.com/static/media/md-img.d3695a0cdf566e1eea34.png'} alt="Venkatesanj" />
                            </div>
                            <div class="rounded-img">
                                <img src={'https://venkatesanj.com/static/media/md-img.d3695a0cdf566e1eea34.png'} alt="Venkatesanj" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='aboutme'>
           <div className='container mt-5'>
                <div >
                    <h3 className=''>Let's talk about your digital aspirations. Whether you're a budding startup or a seasoned enterprise, Axess has the tools and vision to help you soar.</h3>
                    <div className="row dots text-center mt-5">
                        <div className="col-lg-4 aboutcase">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cards1 ">
                                        <p className='text-center'>Software Development: We craft bespoke applications that empower your business processes, enhance efficiency, and streamline operations.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Software Testing: We leave no stone unturned, ensuring your software is bug-free, reliable, and delivers a seamless user experience.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6 ">
                                    <div className="cards1">
                                        <p className='text-center'>Website Development: We create stunning, user-friendly websites that are the perfect digital canvas for your brand story.</p>
                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <div className="cards1">
                                        <p className='text-center'>Digital Marketing: We orchestrate data-driven campaigns that ignite engagement, drive conversions, and build lasting customer relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='mt-5'>
                                <img src={success} alt="success" className="about-img" style={{ width: '300px', height: '300px' }} />
                            </div>
                           
                        </div>
                        <div className="col-lg-4 mt-5">
                                <div className="cards1">
                                    <p className='text-center mt-5 py-5 fs-5'><q>Eight years of experience, countless success stories, and a burning passion for digital excellence - that's Axess Technology.</q></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           </div> */}
            <div className='container mt-5'>
                <div >
                    <h5 className='secondary-header text-center py-5'>Let's talk about your digital aspirations. Whether you're a budding startup or a seasoned enterprise, Axess has the tools and vision to help you soar.</h5>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='aboutsuccess'>
                            <img src={success} alt="success" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mt-5'>
                            <h6 className='secondary-header'>Here's a glimpse into our magic:</h6>
                        </div>
                        <div className='aboutpoints mt-3'>
                            <ul>
                                <li>Software Development: We craft bespoke applications that empower your business processes, enhance efficiency, and streamline operations.</li>
                                <li className='mt-4'>Software Testing: We leave no stone unturned, ensuring your software is bug-free, reliable, and delivers a seamless user experience.</li>
                                <li className='mt-4'>Website Development: We create stunning, user-friendly websites that are the perfect digital canvas for your brand story.</li>
                                <li className='mt-4'>Digital Marketing: We orchestrate data-driven campaigns that ignite engagement, drive conversions, and build lasting customer relationships.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;