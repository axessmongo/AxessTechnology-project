import React from 'react'
import Awardimg from '../assets/images/Award-img.webp'

function Award() {
    return (
        <section className='container py-3'>
            <div>
                <h3>Award-winning</h3>
                <h1>Software Development <br /> Company</h1>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div>
                        <img src={Awardimg} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-8'>
                    <div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis
                                reiciendis perspiciatis voluptatem vitae ducimus dolore. Accusantium nam
                                fugiat totam ea vel quos officia neque, architecto perferendis nesciunt
                                voluptatem vitae ducimus dolore. Accusantium nam fugiat totam ea vel quos officia neque,
                                dolorem voluptatem!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur autem
                                perferendis rerum distinctio, blanditiis laboriosam optio deserunt itaque voluptatem
                                ut iure error esse voluptas, maxime quis consectetur odit
                                ut iure error esse voluptas, maxime quis consectetur odit
                                ut iure error esse voluptas, maxime quis consectetur odit laborum.</p>
                        </div>

                        <div className='row'>
                            <div className='col-6'>
                                <div className='card'>
                                    <p className='px-3 pt-2'>✔️ Years of Expertise</p>
                                </div>
                                <div className='card mt-3'>
                                    <p className='px-3 pt-2'>✔️ Years of Expertise</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='card'>
                                    <p className='px-3 pt-2'>✔️ Years of Expertise</p>
                                </div>
                                <div className='card mt-3'>
                                    <p className='px-3 pt-2'>✔️ Years of Expertise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Award