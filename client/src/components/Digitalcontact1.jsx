import React, { useState } from 'react';

function Digitalcontact1() {
    const [contact, setContact] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        serviceOption: ''
    });
    const [errors, setErrors] = useState({
        others: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Placeholder for form submission logic
        console.log('Form submitted:', contact);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container mt-3">


            <div className="container">
                <div className="card mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <p className='text-center text-capitalize bg-img-1'>Request for quote</p>
                            <p className='text-center text-capitalize fw-semibold primary-text'>discuss your project with us. We are waiting to serve you better.</p>
                        </div>

                        <div className="row container text-capitalize">
                            <div className="col-md-6 mb-4">
                                <input type="text" name="fname" value={contact.fname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='First Name * ' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="phone" value={contact.phone} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='phone *' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="email" value={contact.email} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='E-mail *' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="company" value={contact.company} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='company *' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="company" value={contact.website} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='website *' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="commands" value={contact.website} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='commands *' />
                            </div>
                        </div>
                        <div className=' container mb-3 mt-3'>
                            <p className='bg-img-1 d-flex text-center'>Select service & it's customizabilty</p>
                            <p></p>
                            <div className="row">
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_1" onChange={handleChange} value={"Social Media Marketing"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_1">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Social Media Marketing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_2" onChange={handleChange} value={"Performance Marketing"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_2">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Performance Marketing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_3" onChange={handleChange} value={"Website Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_3">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Website Development & Event Marketing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_4" onChange={handleChange} value={"Influencer Marketing"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_4">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Influencer Marketing & Video Production</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_5" onChange={handleChange} value={"Content Writing &  Shopify Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_5">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Content Writing &  Shopify Development</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_6" onChange={handleChange} value={"Instagram Marketing & Consultancy"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_6">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Instagram Marketing & Consultancy</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_7" onChange={handleChange} value={"Search Engine Optimization"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_7">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Search Engine Optimization</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_8" onChange={handleChange} value={"Branding Solution"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_8">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'> Branding Solution & Shopify Development</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-center mb-3" data-aos='zoom-out' data-aos-anchor-placement="bottom-bottom">
                            <button className='gold-btn green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Digitalcontact1;
