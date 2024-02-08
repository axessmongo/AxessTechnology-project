
import React from 'react'
import Reactlogo from '../assets/images/demo/react-logo.png'
import vitelogo from '../assets/images/demo/vite-logo.png'
import watchdemo from '../assets/images/demo/watch.png'
import photodemo from '../assets/images/demo/photography.png'
import cateringdemo from '../assets/images/demo/catering.png'
import gitfdemo from '../assets/images/demo/gift.png'
import portfolio1 from '../assets/images/demo/porfolio1.png'
import portfolio2 from '../assets/images/demo/porfolio2.png'
import Categories from './Categories'
import categoriesimg1 from '../assets/images/categories-img1.webp'
import categoriesimg2 from '../assets/images/categories-img2.webp'


function Demo() {
    return (
        <div>
            {/* demo page */}
        <section className='container'>
            <div className='py-4 my-3'>
                <div className='text-center pb-2'>
                    <h3>We Create Products That Users Love</h3>
                    <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        {/* <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={watchdemo} alt="" className='img-fluid' />
                        </div> */}
                        <img src={categoriesimg1} alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <div className='py-3'>
                            <h3>E-Commerce</h3>
                            <div className='py-3'>
                                <img src={Reactlogo} alt="" className='img-fluid w-25' />
                            </div>
                            <div className='pt-2'>
                                <h3>Time Zone (Watch)</h3>
                                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                    Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                    repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                <div className='pt-2'>
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='bg-green-1'>
             <div className='container text-light py-4 my-3'>
            <div className='text-center'>
                <h3>We Create Products That Users Love</h3>
                <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='py-3'>
                        <h3>E-Commerce</h3>
                        <div className='py-3'>
                            <img src={Reactlogo} alt="" className='img-fluid w-25' />
                        </div>
                        <div className='pt-2'>
                            <h3>Thamil</h3>
                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                            <div className='pt-2 text-end'>
                                <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <img src={categoriesimg2} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            </div>
        </section>

         {/* Business demo page */}
        <section>
              <div className='container py-4 my-3'>
                <div className='text-center pb-2'>
                    <h3>We Create Products That Users Love</h3>
                    <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        {/* <div>
                            <img src="https://maticz.com/assets/images/home/nft_img.webp" alt="" className='img-fluid' />
                        </div> */}
                        
                        <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={photodemo} alt="" className='img-fluid' />
                        </div>
                    
                    </div>
                    <div className='col-md-6'>
                        <div className='py-3'>
                            <h3>Business</h3>
                            <div className='py-3'>
                                <img src={vitelogo} alt="" className='img-fluid w-25' />
                            </div>
                            <div className='pt-2'>
                                <h3>Photography</h3>
                                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                    Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                    repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                <div className='pt-2'>
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-green-1'>
             <div className='container text-light py-4 my-3'>
            <div className='text-center'>
                <h3>We Create Products That Users Love</h3>
                <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='py-3'>
                        <h3>Business</h3>
                        <div className='py-3'>
                            <img src={Reactlogo} alt="" className='img-fluid w-25' />
                        </div>
                        <div className='pt-2'>
                            <h3>Catering</h3>
                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                            
                                <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='p-1' style={{backgroundColor:'gray'}}>
                        <img src={cateringdemo} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            </div>
        </section>

         {/* E-commece demo page */}
        <section>
              <div className='container py-4 my-3'>
                <div className='text-center pb-2'>
                    <h3>We Create Products That Users Love</h3>
                    <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                                             
                        <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={gitfdemo} alt="" className='img-fluid' />
                        </div>
                    
                    </div>
                    <div className='col-md-6'>
                        <div className='py-3'>
                            <h3>E-Commerce</h3>
                            <div className='py-3'>
                                <img src={vitelogo} alt="" className='img-fluid w-25' />
                            </div>
                            <div className='pt-2'>
                                <h3>Gift Zone</h3>
                                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                    Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                    repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                <div className='pt-2'>
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-green-1'>
             <div className='container text-light py-4 my-3'>
            <div className='text-center'>
                <h3>We Create Products That Users Love</h3>
                <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='py-3'>
                        <h3>E-Commerce</h3>
                        <div className='py-3'>
                            <img src={Reactlogo} alt="" className='img-fluid w-25' />
                        </div>
                        <div className='pt-2'>
                            <h3>Time Zone</h3>
                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                            
                                <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='p-1' style={{backgroundColor:'gray'}}>
                        <img src={watchdemo} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Portfolio demo page */}
        <section>
              <div className='container py-4 my-3'>
                <div className='text-center pb-2'>
                    <h3>We Create Products That Users Love</h3>
                    <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                                             
                        <div className=' p-1' style={{backgroundColor:' #05463c'}}>
                            <img src={portfolio2} alt="" className='img-fluid' />
                        </div>
                    
                    </div>
                    <div className='col-md-6'>
                        <div className='py-3'>
                            <h3>Portfolio</h3>
                            <div className='py-3'>
                                <img src={vitelogo} alt="" className='img-fluid w-25' />
                            </div>
                            <div className='pt-2'>
                                <h3>Individual</h3>
                                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                    Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                    repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                                <div className='pt-2'>
                                    <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-green-1'>
             <div className='container text-light py-4 my-3'>
            <div className='text-center'>
                <h3>We Create Products That Users Love</h3>
                <p>Explore Our Award-winning Products Used by Millions Around the World.</p>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='py-3'>
                        <h3>Portfolio</h3>
                        <div className='py-3'>
                            <img src={Reactlogo} alt="" className='img-fluid w-25' />
                        </div>
                        <div className='pt-2'>
                            <h3>Individual</h3>
                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, pariatur esse.
                                Consectetur earum architecto impedit eveniet porro harum rerum id ab ratione
                                repudiandae eum error, nostrum sed, dignissimos, aliquam quia?</p>
                            
                                <button className='gold-btn m-0' data-aos='fade-right' data-aos-duration='800'><span className='d-block'>Demo Live</span> <i className="bi bi-arrow-right"></i></button>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='p-1' style={{backgroundColor:'gray'}}>
                        <img src={portfolio1} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
            </div>
        </section>

        </div>
    )
}

export default Demo