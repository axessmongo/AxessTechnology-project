import React from 'react'
import maincarimg1 from '../assets/images/software-development.jpg'

export default function Home() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={maincarimg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src= "https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?w=1380&t=st=1704976715~exp=1704977315~hmac=2f8f5383ff88556023a65bad253d1523b19efbd3c0c4b8ebad4e1f76333d93dc" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src= "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524400.jpg?w=1380&t=st=1704976785~exp=1704977385~hmac=e0e6703b6e1d0fec30d919f507bd56d199f05b8de13ca6b8f814d0c0b87d4b6c" className="d-block w-100" alt="..." />
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

            <ul className='myul'>
                <li>
                    <a href="">xsaxs</a>
                </li>
            </ul>

        </div>
    )
}
