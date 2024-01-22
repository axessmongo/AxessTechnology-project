import React from 'react'
import { useState } from 'react'
import "../assets/css/Technologies.scss"
import html from '../assets/images/main-carousel/dev/html.png';
import css from '../assets/images/main-carousel/dev/css.png';
import js from '../assets/images/main-carousel/dev/js.png';

const Technologies = () => {
    const [Technactive,setTechActive] = useState(0);


  return (
    <div className='container tech-navpills' >

        <div className='primary-header text-center'>
            Tech Tools
        </div>
        <div className='text-center tech-buttons'>
            <button onClick={()=>setTechActive(0)}>ALL</button>
            <button onClick={()=>setTechActive(1)}>Framework</button>
            <button onClick={()=>setTechActive(2)}>Language</button>
        </div>
        <div className='technology-list'>
            <div className="row align-items-center justify-content-center">
                <div  className={`col-md-3 col-lg-2 ${Technactive === 0 || Technactive === 1 ? "" : "d-none"}`}>
                    <img src={html}></img>
                </div>
                <div  className={`col-md-3 col-lg-2 ${Technactive === 0 || Technactive === 2 ? "" : "d-none"}`}>
                    <img src={js}></img>
                </div>
                <div  className={`col-md-3 col-lg-2 ${Technactive === 0 || Technactive === 3 ? "" : "d-none"}`}>       
                    <img src={css}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies