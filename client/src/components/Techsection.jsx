import React from 'react'
import techstack from '../assets/images/tech_stack_1.webp'
import techstack2 from '../assets/images/tech_stack_2.webp'
import techstack3 from '../assets/images/tech_stack_3.webp'
import techstack4 from '../assets/images/tech_stack_4.webp'
import techstack5 from '../assets/images/tech_stack_5.webp'
import techstack6 from '../assets/images/tech_stack_6.webp'
import techstack7 from '../assets/images/tech_stack_7.webp'
import techstack8 from '../assets/images/tech_stack_8.webp'

export default function Techsection() {
    return (
        <div className='container'>
            <div className="technstack_wrapper text-center">
                <h1 className='primary-header mb-4' data-aos='fade-up' data-aos-duration='600'>A Glimpse of Our Technology <br className='d-none d-lg-block' /> Prowess!</h1>
                <p className='secondary-text mb-5 col-lg-10 mx-auto' data-aos='fade-right' data-aos-duration='600'>Our proficiency in the realm of technology stacks is unparalleled. We are well-versed in the latest advancements and techniques that allow us to deliver top-quality solutions to our clients. Our experience in this field is vast, and we constantly update our knowledge to stay ahead of the curve.</p>
                <div className="row g-5">
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='100'
                            data-aos-easing="ease-in-back">
                            <img src={techstack} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='200'
                            data-aos-easing="ease-in-back">
                            <img src={techstack2} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='300'
                            data-aos-easing="ease-in-back">
                    <img src={techstack3} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='400'
                            data-aos-easing="ease-in-back">
                            <img src={techstack4} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='500'
                            data-aos-easing="ease-in-back">
                            <img src={techstack5} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='600'
                            data-aos-easing="ease-in-back">
                            <img src={techstack6} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='700'
                            data-aos-easing="ease-in-back">
                            <img src={techstack7} alt="" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 icon-holder">
                        <div className="icon-container" data-aos='fade' data-aos-duration='800'
                            data-aos-easing="ease-in-back">
                            <img src={techstack8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
