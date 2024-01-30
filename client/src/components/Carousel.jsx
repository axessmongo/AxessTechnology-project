import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import project1 from '../assets/images/demo/catering.png'
import project2 from '../assets/images/demo/gift.png'
import project3 from '../assets/images/demo/photography.png'
import project4 from '../assets/images/demo/porfolio2.png'
import project5 from '../assets/images/demo/porfolio1.png'
import project6 from '../assets/images/demo/watch.png'
import { Link } from "react-router-dom";

export default function Carousel() {

  const settings = {
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerPadding: "20px",
    swipeToSlide: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  useEffect(()=>{
    AOS.refresh();
  })
  return (
    <div className="container my-5 py-5">
      <h1 className="bg-img-1 mx-auto" data-aos='fade-up'>Our works</h1>
      <Slider {...settings} data-aos = 'fade'>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project1} alt="project1" />
        </Link>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project2} alt="project1" />
        </Link>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project3} alt="project1" />
        </Link>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project4} alt="project1" />
        </Link>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project5} alt="project1" />
        </Link>
        <Link to={'/ourworks'} className="proiect-card">
          <img src={project6} alt="project1" />
        </Link>
      </Slider>
    </div>
  )
}
