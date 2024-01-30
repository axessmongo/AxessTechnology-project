import React, { useState } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import "../assets/css/index.scss";
import "../assets/css/contact.scss";

function Contact() {
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        service: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/contact', contact)
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Navbar />
            <Banner h1={'Talk to a Human'} h2={'we check our emails everyday and reply even if we are at dinner. You are not going to hit a ridiculously long phone menu when you call us.'} />
            <div className="container">
                <div className="card mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <p className='text-center text-capitalize bg-img-1'>Request for quote</p>
                            <p className='text-center text-capitalize fw-semibold primary-text'>discuss your project with us. We are waiting to serve you better.</p>
                        </div>

                        <div className="row container text-capitalize">
                            <div className="col-md-6 mb-4">
                                <input type="text" name="fname" value={contact.fname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Firstname' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="lname" value={contact.lname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Lastname' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="email" value={contact.email} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='E-mail' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="phone" value={contact.phone} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Phone' />
                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" name="address" value={contact.address} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Address' />
                            </div>
                        </div>
                        <div className=' container mb-3 mt-3'>
                            <p className='bg-img-1 d-flex text-center'>Select service</p>
                            <div className="row">
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_1" value={contact.service} type="radio" name='service-option' />
                                        <label htmlFor="checkbox_animated_1">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Software Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_2" value={contact.service} type="radio" name='service-option' />
                                        <label htmlFor="checkbox_animated_2">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Software Testing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_3" value={contact.service} type="radio" name='service-option' />
                                        <label htmlFor="checkbox_animated_3">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Website Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_4" value={contact.service} type="radio" name='service-option' />
                                        <label htmlFor="checkbox_animated_4">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Digital Marketing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_5" value={contact.service} type="radio" name='service-option' />
                                        <label htmlFor="checkbox_animated_5">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Others</p>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="mt-3 text-center mb-3">
                            <button className='gold-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='faq'>
                <div className="container">

                    <div className="container mt-5">
                        <h3 className='bg-img-1 mx-auto'> Frequently Asked Questions </h3>
                        <p className='secondary-text mx-auto m-5'> General Questions:</p>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        What are Axess Technology's core services?

                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        We are a one-stop shop for all your digital needs, offering software development, software testing, website development, and digital marketing services.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        What sets Axess Technology apart from other digital agencies?

                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        We combine extensive experience with a passionate and innovative approach. We don't just deliver services; we build long-term partnerships, tailoring solutions to your unique needs and ensuring your success.                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        What is your pricing structure?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        Our pricing varies depending on the specific project requirements and scope. We offer transparent quotes and flexible payment options to fit your budget.
                                    </div>
                                </div>

                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        Do you offer free consultations?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        Absolutely! We're happy to discuss your project and answer any questions you may have during a free consultation.                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
               
                <Footer />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
