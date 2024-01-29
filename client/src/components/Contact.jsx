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
        service:""
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
                                    <input id="checkbox_animated_2" value={contact.service} type="radio"  name='service-option' />
                                    <label htmlFor="checkbox_animated_2">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Software Testing</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_3" value={contact.service} type="radio"  name='service-option' />
                                    <label htmlFor="checkbox_animated_3">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Website Development</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_4" value={contact.service} type="radio"  name='service-option' />
                                    <label htmlFor="checkbox_animated_4">
                                        <span className="check"></span>
                                        <span className="box"></span>
                                        <p className='secondary-text'>Digital Marketing</p>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 checkbox-label">
                                <div className="checkbox-animated">
                                    <input id="checkbox_animated_5" value={contact.service} type="radio"  name='service-option'/>
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
            <Footer />
        </div>
    );
}

export default Contact;
