import React from 'react'
import card1 from '../assets/images/screenshots/Cake screenshot.png'
import card2 from '../assets/images/screenshots/cattering screenshot.png'
import card3 from '../assets/images/screenshots/photo-screenshot.png'
import card4 from '../assets/images/screenshots/watch screenshot.png'
import { Link } from 'react-router-dom'
import card5 from '../assets/images/screenshots/kvr screenshot.png'
import card6 from '../assets/images/screenshots/md screenshot.png'



function Categories() {
    return (
        <>

            <section className='pt-5 m-5'>
                <div className='technical-skills'>
                    <div className='container '>

                        <div className=" mb-5 text-center">
                            <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' data-aos="fade-up" data-aos-duration="800" style={{ color: "#fd562a" }}>WORK PROJECTS</h3>

                        </div>
                        <div className='row play'>

                            <div className='col-md-2' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card1} className=' rounded-4 img1 ' alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>


                            <div className='col-md-2' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card2} className='rounded-4 img1' alt="" />
                                        </div>




                                    </div>
                                </Link>
                            </div>

                            <div className='col-md-2 ' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card3} className='rounded-4 img1' alt="" />
                                        </div>




                                    </div>
                                </Link>
                            </div>

                            <div className='col-md-2' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card4} className=' rounded-4 img1' alt="" />
                                        </div>





                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-2' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card5} className=' rounded-4 img1' alt="" />
                                        </div>





                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-2' data-aos="zoom-in" data-aos-duration="600">
                                <Link to="/categories" className='text-decoration-none'>
                                    <div className='card custom-card2 px-2 py-2 rounded-4'>
                                        <div className=''>
                                            <img src={card6} className=' rounded-4 img1' alt="" />
                                        </div>





                                    </div>
                                </Link>
                            </div>


                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Categories