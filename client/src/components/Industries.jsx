import React from 'react'
import fintech from '../assets/images/fintech.webp'
import healthcare from '../assets/images/healthcare.webp'
import education from '../assets/images/Education.webp'
import insurance from '../assets/images/life-insurance.webp'
import restaurant from '../assets/images/restaurant.webp'
import shopping from '../assets/images/shopping.webp'
import manufacture from '../assets/images/manufacture.webp'
import supplychain from '../assets/images/supply-chain.webp'
import logistics from '../assets/images/logistics.webp'
import entertaining from '../assets/images/entertaining.webp'
import realestate from '../assets/images/real-estate.webp'
import socialmedia from '../assets/images/social-media.webp'


export default function Industries() {
  return (
    <div>
        <div className="bg-green-1 text-white p-1">
                <div className="container">
                      <div className="row align-items-center g-5 py-5">
                        <div className="col-md-4">
                            <p className='bg-img-2' data-aos = 'fade-up'>Industries</p>
                            <h1 className='secondary-header' data-aos='fade-up'>Transforming Industries to Become Smarter and Safer</h1>
                            <p className='secondary-text' data-aos='fade-up' data-aos-duration='600'>At Axess, We Tackle Some of the World's Biggest Challenges by Building Great Digital Products.</p>
                        </div>
                        <div className="col-md-8 text-white">
                            <div className="row gy-3">
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out'>
                                    <i className="bi bi-bank2 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                                        <p className='secondary-text mb-0'>Fintech</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-lungs-fill fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                                        <p className='secondary-text mb-0'>HealthCare</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-backpack3 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                                        <p className='secondary-text mb-0'>Education</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-cash-coin fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                                        <p className='secondary-text mb-0'>Insurance</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-shop fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                                        <p className='secondary-text mb-0'>Restaurant</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-cart-plus fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                                        <p className='secondary-text mb-0'>Shopping</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-building-fill-gear fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={manufacture} className='mb-2' alt="https://maticz.com/assets/images/home/manufacture.webp" /> */}
                                        <p className='secondary-text mb-0'>Manufacturing</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-gear-wide-connected fs-3" style={{"color":"#b5c6c4"}}></i>
                                       
                                        {/* <img src={supplychain} className='mb-2' alt="https://maticz.com/assets/images/home/supply-chain.webp" /> */}
                                        <p className='secondary-text mb-0'>Supply Chain</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-truck fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={logistics} className='mb-2' alt="https://maticz.com/assets/images/home/logistics.webp" /> */}
                                        <p className='secondary-text mb-0'>Logistics</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-dice-5 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={entertaining} className='mb-2' alt="https://maticz.com/assets/images/home/entertaining.webp" /> */}
                                        <p className='secondary-text mb-0'>Entertainment</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-buildings fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={realestate} className='mb-2' alt="https://maticz.com/assets/images/home/real-estate.webp" /> */}
                                        <p className='secondary-text mb-0'>Real Estate</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-hand-thumbs-up fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={socialmedia} className='mb-2' alt="https://maticz.com/assets/images/home/social-media.webp" /> */}
                                        <p className='secondary-text mb-0'>Social Networking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
