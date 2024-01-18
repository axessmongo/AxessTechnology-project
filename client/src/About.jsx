import React from 'react';
import Navbar from './components/Navbar';
import AboutImage from '../src/assets/images/About2.jpg';

function About() {
    return (
        <div className='container'>
            <Navbar />
            <h1 className='text-center mb-3'>About Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <h1>Heading</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa corporis modi quam, quos illo. Debitis, facilis tenetur temporibus numquam maxime inventore nemo cum totam iure et, iusto unde magni obcaecati est iste quo vel distinctio beatae sequi hic quod aliquam nisi blanditiis. Sequi expedita a ea ducimus minus ipsa veritatis eligendi quidem cumque obcaecati nihil nostrum corrupti, sit deserunt hic voluptatibus possimus enim aperiam ipsam voluptatum maiores explicabo magni, earum libero. Ducimus minima vitae commodi saepe cupiditate dolore repellendus sapiente omnis sequi aut molestias debitis perspiciatis impedit et illum repellat, recusandae ipsam, voluptates tempora eligendi nulla vero quisquam fugiat.</p>
                </div>
                <div className="col-md-6">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={AboutImage} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                {/* <img src={AboutImage} className="d-block w-100" alt="..." /> */}
                                hsdjhbc
                            </div>
                            <div className="carousel-item">
                                {/* <img src={AboutImage} className="d-block w-100" alt="..." /> */}
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
                </div>
            </div>
        </div>
    );
}

export default About;
