import React, { useState } from "react";
import axios from "axios";

function Digitalcontact1() {
    const [contact, setContact] = useState({
        fname: '',
        email: '',
        company: '',
        website: '',
        commands: '',
        phone: '',
        digitalmarketBudget: '',
        SocialMediaMarketing: false,
        WebsiteDevelopment: false,
        InfluencerMarketing: false,
        BrandingSolution: false,
        SearchEngineOptimization: false,
        ContentWriting: false,
        PerformanceMarketing: false,
        EventMarketing: false,
        VideoProduction: false,
        Consultancy: false,
        InstagramMarketing: false,
        ShopifyDevelopment: false,

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contact);
        axios.post("api/post", contact)
            .then((res) => {
                console.log('Form submitted:', contact);
                // Optionally, you can reset the form after submission
                setContact({
                    fname: '',
                    email: '',
                    company: '',
                    website: '',
                    commands: '',
                    phone: '',
                    digitalmarketBudget: '',
                    SocialMediaMarketing: false,
                    WebsiteDevelopment: false,
                    InfluencerMarketing: false,
                    BrandingSolution: false,
                    SearchEngineOptimization: false,
                    ContentWriting: false,
                    PerformanceMarketing: false,
                    EventMarketing: false,
                    VideoProduction: false,
                    Consultancy: false,
                    InstagramMarketing: false,
                    ShopifyDevelopment: false,
                });
                alert("successfully created");
            })
            .catch((err) => {
                console.log('error:', err);
                // Handle errors if necessary
            });
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setContact(prevState => ({
                ...prevState,
                [name]: checked // Assigning boolean value directly
            }));
        } else {
            setContact(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
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
                                <input type="text" name="website" value={contact.website} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='website *' />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="commands" value={contact.commands} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='commands *' />
                            </div>
                        </div>
                        <h4 className="secondary-header text-center m-3">Average Monthly Marketing Budget in INR* </h4>
                        <div className="col-md-12 digitalcontact position-relative"  >
                            <select
                                name="digitalmarketBudget"
                                value={contact.digitalmarketBudget} // Assigning the value from state
                                onChange={handleChange}
                                className='form-control shadow-none border-0 rounded-0 border-bottom text-black'
                            >
                                <option value="">Select any one option</option>
                                <option value="Rs. 0 to Rs. 1 Lakh">Rs. 0 to Rs. 1 Lakh</option>
                                <option value="Rs. 1 Lakh to Rs. 5 Lakh">Rs. 1 Lakh to Rs. 5 Lakh</option>
                                <option value="Rs. 5 Lakh to Rs. 10 Lakh">Rs. 5 Lakh to Rs. 10 Lakh</option>
                                <option value="Rs. 10 Lakh to Rs. 25 Lakh">Rs. 10 Lakh to Rs. 25 Lakh</option>
                                <option value="Rs. 25 Lakh to Rs. 50 Lakh">Rs. 25 Lakh to Rs. 50 Lakh</option>
                                <option value="Rs. 50 Lakh to Rs. 1 Crore">Rs. 50 Lakh to Rs. 1 Crore</option>
                                <option value="More than Rs. 1 Crore">More than Rs. 1 Crore</option>
                            </select>
                        </div>
                        {/* <div className="">
                            <h3 className="secondary-header text-center pb-3 mt-3">Need a Successful Project</h3>
                            <div className="row mt-3 mx-5">
                                <div className="col-md-6">
                                    <input type="checkbox" className="digiCheckBox"
                                        name="SocialMediaMarketing" onChange={handleChange} checked={contact["SocialMediaMarketing"]} />
                                    <span className="fs-5"> Social Media Marketing</span>
                                    <br />
                                    <input
                                        type="checkbox"
                                        className="digiCheckBox"
                                        id="WebsiteDevelopment"
                                        name="WebsiteDevelopment"
                                        onChange={handleChange} checked={contact["WebsiteDevelopment"]}
                                    />
                                    <span className="fs-5"> Website Development</span>
                                    <br />
                                    <input
                                        type="checkbox"
                                        className="digiCheckBox"
                                        id="InfluencerMarketing"
                                        name="InfluencerMarketing"
                                        onChange={handleChange} checked={contact["InfluencerMarketing"]}
                                    />
                                    <span className="fs-5"> Influencer Marketing</span>
                                    <br />
                                    <input
                                        type="checkbox"
                                        className="digiCheckBox"
                                        id="BrandingSolution"
                                        name="BrandingSolution"
                                        onChange={handleChange} checked={contact["BrandingSolution"]}
                                    />
                                    <span className="fs-5"> Branding Solution</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="seo" name="SearchEngineOptimization"
                                        onChange={handleChange} checked={contact["SearchEngineOptimization"]} />{" "}
                                    <span className="fs-5"> Search Engine Optimization</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="contentwriting" name="ContentWriting" onChange={handleChange}
                                        checked={contact["ContentWriting"]} />
                                    <span className="fs-5"> Content Writing</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="contentwriting" name="PerformanceMarketing" onChange={handleChange}
                                        checked={contact["PerformanceMarketing"]} />
                                    <span className="fs-5"> PerformanceMarketing</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="VideoProduction" name="VideoProduction" onChange={handleChange}
                                        checked={contact["VideoProduction"]} />
                                    <span className="fs-5">VideoProduction</span>
                                    <br />
                                </div>
                                <div className="col-md-6">
                                    <input type="checkbox" className="digiCheckBox" id="Consultancy" name="Consultancy" onChange={handleChange}
                                        checked={contact["Consultancy"]} />
                                    <span className="fs-5">Consultancy</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="InstagramMarketing" name="InstagramMarketing" onChange={handleChange}
                                        checked={contact["InstagramMarketing"]} />
                                    <span className="fs-5">InstagramMarketing</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="ShopifyDevelopment" name="ShopifyDevelopment" onChange={handleChange}
                                        checked={contact["ShopifyDevelopment"]} />
                                    <span className="fs-5">ShopifyDevelopment</span>
                                    <br />
                                    <input type="checkbox" className="digiCheckBox" id="EventMarketing" name="EventMarketing" onChange={handleChange}
                                        checked={contact["EventMarketing"]} />
                                    <span className="fs-5">Event Marketing</span>
                                    <br />
                                </div>
                            </div>
                        </div> */}

                        <div className="">
                            <h3 className="secondary-header text-center pb-3 mt-3">Need a Successful Project</h3>
                            <div className="row mt-3 mx-2">
                                <div className="col-md-6">
                                    <input type="radio" id="SocialMediaMarketing" name="SocialMediaMarketing" />
                                    <span className="fs-5 mx-2">Social Media Marketing & Website Development</span>
                                    <br />

                                    <input type="radio" id="InfluencerMarketing" name="InfluencerMarketing" />
                                    <span className="fs-5 mx-2">Influencer Marketing & Branding Solution</span>
                                    <br />

                                    <input type="radio" id="SearchEngineOptimization" name="SearchEngineOptimization" />
                                    <span className="fs-5 mx-2">Search Engine Optimization & Content Writing</span>
                                    <br />

                                    <input type="radio" id="PerformanceMarketing" name="PerformanceMarketing" />
                                    <span className="fs-5 mx-2">Performance Marketing & Video Production</span>
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <input type="radio" id="Consultancy" name="Consultancy" />
                                    <span className="fs-5 mx-2">Consultancy & Instagram Marketing</span>
                                    <br />

                                    <input type="radio" id="ShopifyDevelopment" name="ShopifyDevelopment" />
                                    <span className="fs-5 mx-2">Shopify Development & Instagram Marketing</span>
                                    <br />

                                    <input type="radio" id="EventMarketing" name="EventMarketing" />
                                    <span className="fs-5 mx-2">Event Marketing</span>
                                    <br />

                                </div>
                            </div>
                        </div>

                        <div className="mt-3 text-center mb-3" data-aos='zoom-out' data-aos-anchor-placement="bottom-bottom">
                            <button type="submit" className='gold-btn green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Digitalcontact1;
