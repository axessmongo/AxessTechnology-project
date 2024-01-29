import React from 'react';
import '../src/assets/css/About.scss'
import vision from '../src/assets/images/about/vision.png'
import mission from '../src/assets/images/about/mission.png'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutImage from '../src/assets/images/About2.jpg';
import Footer from './components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <Banner h1={'About Us'} h2={'Revolutionize Your Operations: Transform with Software Tailored to Your Needs.'} h3={'Hello World'} />
            <div className='container'>
                <h1 className='text-center mb-3'>About Us</h1>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1>Heading</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe non qui, repellendus quod sequi asperiores neque aliquam necessitatibus, amet reiciendis delectus beatae voluptatem excepturi ratione ducimus sapiente odit debitis! Provident laboriosam non consequatur facere debitis unde cum exercitationem quia beatae voluptate odio, omnis distinctio dolores suscipit ab. Asperiores ipsam illo provident laudantium. Doloremque natus facere ab voluptatem labore non similique rerum corporis error distinctio eum, incidunt deleniti cumque illo, perferendis tempore asperiores amet quia excepturi nam dolorum sint esse enim aperiam. Necessitatibus doloremque atque quam officiis autem soluta accusantium nisi doloribus consequuntur praesentium ex ducimus, delectus, quisquam a architecto suscipit nulla sequi pariatur voluptates, tenetur voluptatem. Facere harum, dolores magni ipsa eaque minus sint ducimus tenetur laborum voluptatibus sequi voluptatem iste distinctio, quasi sed libero adipisci nemo laboriosam, eos debitis. Animi expedita reprehenderit odio fugit asperiores, illo dignissimos temporibus sit earum excepturi dolores magni omnis libero dolorem consequuntur dolor assumenda ad possimus mollitia corrupti molestias. Saepe natus nam suscipit rem id odit veritatis provident fuga laborum ipsa minima non aspernatur placeat expedita consequatur beatae voluptatibus, quas praesentium. Totam quisquam magni in aliquam? Enim sed incidunt dolores amet, obcaecati facilis non possimus illo soluta ipsa deserunt, commodi adipisci! Numquam, vel?</p>
                    </div>
                    {/* <div className="col-md-6">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={AboutImage} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    hsdjhbc
                                </div>
                                <div className="carousel-item">
                                    gshsd
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> */}
                    <div className='col-md-6 dot '>
                        <div className="row dots text-center">
                            <div className="col-lg-6 aboutcase">
                                <div className="cards1">
                                    <h1 className='text-center py-3'>Perfect Event</h1>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="cards1 mt-2">
                                    <h1 className='text-center py-3'>Every Detail Matter</h1>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className='col-md-6 aboutcase'>
                                <div className="cards1 mt-4">
                                    <h1 className='text-center py-3'>Flawless Execution</h1>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="cards1 mt-2">
                                    <h1 className='text-center py-3'>Remembered Always</h1>
                                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='aboutcards mt-5'>
                    <div className="aboutcardbody">
                        <div class="about-card-title-container py-4">
                            <img className='aboutimg' src={vision} alt="vision" />
                            <h5 className="about-card-title primary-header">Our Vision</h5>
                        </div>
                        <p className="about-card-text">
                            Our vision is to offer effectual crypto and blockchain solutions. We frame our vision to assist global entrepreneurs in launching their profitable businesses by assisting them with our development services. We assist everyone with the best development services to enrich their business by bringing them together under a successful path of blockchain journey. We are still in the building process to establish the strength by focusing on creating a new Silicon Valley and rapidly in progress to emerge as a glorious blockchain hub.
                        </p>
                    </div>
                    <div className="aboutcardbody">
                        <div class="about-card-title-container py-4">
                            <img className='aboutimg' src={mission} alt="mission" />
                            <h5 className="about-card-title primary-header">Our Mission</h5>
                        </div>
                        <p className="about-card-text">
                            Our mission is to provide the best blockchain development services all over the world as per our vision to step forward to create several significant impacts in the blockchain territory. Our main potency is that we go ahead of the industry to meet the latest trends and advancements. We have energetic teams to work on each project with much involvement, more advanced, and as so creative. We extend our support to versatile entrepreneurs and startups in the market
                        </p>
                    </div>
                </div>
                <div className='aboutworks mt-5'>
                    <h1 className='text-center mt-3'>How It Works</h1>
                    <h4 className='text-center mt-3'>Find out everything you need to know about creating a business process model.</h4>
                    <div className='mt-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <img src={AboutImage} alt="AboutImage" />
                                </div>
                            </div>
                            <div className='col-md-6 text-center'>
                                <div>
                                    <h2>Our Paths</h2>
                                    <p>Curabitur nec orci orci. Ut fringilla nisl quis consectetur ultrices. Morbi mattis nisl vitae fringilla volutpat. Ut molestie metus vitae imperdiet. Maecenas ornare ut lectus ac volutpat. Vestibulum erat massa finibus.</p>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>Aenean eu leo quam ornare</li>
                                        <li>Aenean eu leo quam ornare</li>
                                        <li>Aenean eu leo quam ornare</li>
                                        <li>Aenean eu leo quam ornare</li>
                                        <li>Aenean eu leo quam ornare</li>
                                        <li>Aenean eu leo quam ornare</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aboutCompany mt-4'>
                    <h1 className='text-center'>Company Progress</h1>
                    <div className='row'>
                        <div className='col-md-3'>Hello</div>
                        <div className='col-md-3'>Hello</div>
                        <div className='col-md-3'>Hello</div>
                        <div className='col-md-3'>Hello</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;