import React from 'react'
// import js from '../assets/images/main-carousel/dev/js.png'

export default function Home() {
    return (
        <section>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade main-carousel">
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <div className='main-item'>
                                <div className="row justify-content-center align-items-center h-100 text-white">
                                    <div className="col-10 col-lg-8">
                                        <h1 className='light-header'>
                                            Innovation
                                        </h1>
                                        <h1 className='primary-header mb-4'>
                                            Software Development
                                        </h1>
                                        <p className='primary-text mb-3'>
                                            In the realm of technology, software development stands as the driving force behind innovation and efficiency. It encompasses the art and science of crafting programs and applications that cater to diverse needs, from simplifying daily tasks to revolutionizing entire industries.
                                        </p>
                                        {/* <div className='border-top border-white mb-3'></div> */}
                                        <button className=' gold-btn'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className='main-item'>
                                <div className="row justify-content-center align-items-center h-100 text-white">
                                    <div className="col-10 col-lg-8">
                                        <h1 className='light-header'>
                                            Intelligent
                                        </h1>
                                        <h1 className='primary-header mb-4'>
                                            AI Development
                                        </h1>
                                        <p className='primary-text mb-3'>
                                            In the rapidly evolving landscape of technology, AI development stands at the forefront, pioneering intelligent solutions that emulate human cognitive functions. From machine learning algorithms to neural networks, AI endeavors to create systems capable of learning, reasoning, and adapting autonomously.
                                        </p>
                                        {/* <div className='border-top border-white mb-3'></div> */}
                                        <button className=' gold-btn'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className='main-item'>
                                <div className="row justify-content-center align-items-center h-100 text-white">
                                    <div className="col-10 col-lg-8">
                                        <h1 className='light-header'>
                                            Reliability
                                        </h1>
                                        <h1 className='primary-header mb-4'>

                                            Software Testing
                                        </h1>
                                        <p className='primary-text mb-3'>
                                            Software testing plays a crucial role in ensuring the reliability and optimal performance of digital solutions. By systematically evaluating each component and functionality, testing not only identifies potential bugs and vulnerabilities but also guarantees that software meets the specified requirements.
                                        </p>
                                        {/* <div className='border-top border-white mb-3'></div> */}
                                        <button className=' gold-btn'><span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
