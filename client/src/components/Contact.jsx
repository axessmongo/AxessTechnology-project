import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import "../assets/css/index.scss";
import "../assets/css/contact.scss";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"



function Contact() {
    const MSG = {
        success: "Success",
        mailSended: "Mail sended successfully",
        unexpectedError: "Unexpected Error",
        unexpectedResponse: "Unexpected Response",
        incorrectMail: "Incorrect Mail"

    }
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        serviceOption: "",
    });
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        serviceOption: "",
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            value = value.replace(/\D/g, '').slice(0, 10);
        }
        if (name === 'fname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        if (name === 'lname') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }
        setContact({
            ...contact,
            [name]: value,
        });
        validateField(name, value);
    };
    const showToast = (text, options = {}) => {
        Toastify({
            text,
            duration: options.duration || 3000,
            newWindow: options.newWindow || true,
            close: options.close || true,
            gravity: options.gravity || "top",
            position: options.position || "center",
            stopOnFocus: options.stopOnFocus || true,
            style: options.style || {},
            onClick: options.onClick || function () { }
        }).showToast();
    };
    // console.log(contact)
    const validateField = (name, value) => {

        switch (name) {
            case 'fname':
                setErrors({
                    ...errors,
                    fname: value.length === 0 ? 'Firstname is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid firstname, only letters allowed' : '',
                });
                break;


            case 'lname':
                setErrors({
                    ...errors,
                    lname: value.length === 0 ? 'Lastname is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid lastname' : '',
                });
                break;
            case 'email':
                setErrors({
                    ...errors,
                    email:
                        value.length === 0 ? 'Email is required' :
                            !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
                                ? 'Invalid email'
                                : '',
                });
                break;

            case 'phone':
                setErrors({
                    ...errors,
                    phone:
                        value.length === 0
                            ? 'Phone is required'
                            : value.length !== 10 || !/^[5-9]\d+$/.test(value) ? 'Invalid phone' : '',
                });
                break;
            case 'serviceOption':
                setErrors({
                    ...errors,
                    serviceOption: value.length === 0 ? 'serviceOption is required' : /[1]/.test(value) ? 'Invalid serviceOption' : '',
                });
                break;
            default:
                break;
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("error", errors, errors.fname || errors.lname || errors.email || errors.phone || errors.address)

        if (errors.fname || errors.lname || errors.email || errors.phone) return
        if (!contact.fname.trim() || !contact.lname.trim() || !contact.email.trim() || !contact.phone.trim()) {
            setErrors({
                fname: !contact.fname ? 'FirstName is required.' : '',
                lname: !contact.lname ? 'LastName is required.' : '',
                email: !contact.email ? 'Email is required.' : '',
                phone: !contact.phone ? 'Phone.No is required.' : '',
                // address: !contact.address ? 'Address is required.' : '',
                // serviceOption: !contact.serviceOption ? 'serviceoption is required' : ''
            });
            return;
        }
        try {
            const response = await axios.post('/api/contact', contact);
            console.log("res", response)
            if (response.status === 201) {
                console.log("201")
                showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });
                var serviceOptions = document.getElementsByName("serviceOption");
                for (var i = 0; i < serviceOptions.length; i++) {
                    serviceOptions[i].checked = false;
                }
                setContact({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    address: "",
                    serviceOption: ""

                })
                setErrors({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    address: ''
                    // serviceOption: '',
                });

            } else {
                console.log('else Unexpected response:', response);
                showToast("Internal server error", { style: { border: "1px solid red" } });
            }
        } catch (error) {
            console.log("error", error);
            showToast("Unexpected error", { style: { border: "1px solid red" } });
        }
    }

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
                                <input type="text" name="fname" value={contact.fname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='First Name * ' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.fname}</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="lname" value={contact.lname} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Last Name *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.lname}</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" name="email" value={contact.email} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='E-mail *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>
                            </div>
                            {/* <div className="col-md-6 mb-4">
                                <input type="text" name="countrycode" value={contact.countryCode} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Phone *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.countryCode}</div>

                            </div> */}


                            <div className="col-md-6 mb-4">
                                <input type="text" name="phone" value={contact.phone} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Phone Number *' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>

                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" name="address" value={contact.address} className='form-control shadow-none border-0 rounded-0 border-bottom text-black' onChange={handleChange} placeholder='Address ' />
                                <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.address}</div>

                            </div>
                        </div>
                        <div className=' container mb-3 mt-3'>
                            <p className='bg-img-1 d-flex text-center'>Select service</p>
                            <div className="row">
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_1" onChange={handleChange} value={"Software Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_1">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Software Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_2" onChange={handleChange} value={"Software Testing"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_2">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Software Testing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_3" onChange={handleChange} value={"Website Development"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_3">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Website Development</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_4" onChange={handleChange} value={"Digital Marketing"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_4">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Digital Marketing</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4 checkbox-label">
                                    <div className="checkbox-animated">
                                        <input id="checkbox_animated_5" onChange={handleChange} checked value={"Others"} type="radio" name='serviceOption' />
                                        <label htmlFor="checkbox_animated_5">
                                            <span className="check"></span>
                                            <span className="box"></span>
                                            <p className='secondary-text'>Others</p>
                                            <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.others}</div>

                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="mt-3 text-center mb-3" data-aos='zoom-out' data-aos-anchor-placement="bottom-bottom">
                            <button className='gold-btn green-btn'><span className='d-block'>Submit</span> <i className="bi bi-arrow-right"></i></button>
                        </div>
                        {/* <ToastContainer /> */}
                    </form>
                </div>
            </div>
            <div className='faq'>


                <div className="container mt-5">
                    <h3 className='bg-img-1 mx-auto'> Frequently Asked Questions </h3>
                    <h4 className=' mx-auto m-5 '> General Questions:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                                    Q1: What are Axess Technology's core services?

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
                                    Q2: What sets Axess Technology apart from other digital agencies?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    We combine extensive experience with a passionate and innovative approach. We don't just deliver services; we build long-term partnerships, tailoring solutions to your unique needs and ensuring your success.
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Q3: What is your pricing structure?
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
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Q4:  Do you offer free consultations?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Absolutely! We're happy to discuss your project and answer any questions you may have during a free consultation.                                    </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <h4 className=' mx-auto m-5'> Software Development:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                                    Q1:   What types of software do you develop?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We have expertise in building custom web applications, mobile apps, enterprise software, and more.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                                    Q2: What technologies do you use?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    We are proficient in various programming languages and frameworks, including Java, Python, React, etc. We choose the best technology stack based on your specific needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                                    Q3: Do you offer ongoing maintenance and support for software?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we offer comprehensive maintenance and support plans to ensure your software runs smoothly and stays up-to-date.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h4 className='mx-auto m-5'> Software Testing:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" aria-controls="panelsStayOpen-collapseNine">
                                    Q1: What types of software testing do you offer?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We provide a wide range of testing services, including functional testing, performance testing, security testing, and usability testing.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
                                    Q2: How can your testing services benefit my business?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Our testing ensures your software is bug-free, reliable, and delivers a positive user experience, leading to increased customer satisfaction and reduced costs.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
                                    Q3: Do you offer automated testing solutions?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we leverage advanced automation tools to streamline the testing process and improve efficiency.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <h4 className=' mx-auto m-5'> Website Development:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample3">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="true" aria-controls="panelsStayOpen-collapseEleven">
                                    Q1: Do you design and develop custom websites?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    Absolutely! We create unique and user-friendly websites that reflect your brand and drive conversions.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTweleve" aria-expanded="true" aria-controls="panelsStayOpen-collapseTweleve">
                                    Q2: What platforms do you use for website development?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTweleve" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    We are proficient in various CMS platforms like WordPress and Drupal, ensuring flexibility and ease of content management.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseThirteen">
                                    Q3: Do you offer website maintenance and security services?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThirteen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we ensure your website stays up-to-date, secure, and performing optimally with our ongoing maintenance and security solutions.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h4 className=' mx-auto m-5'>Digital Marketing:</h4>
                    <div className="accordion" id="accordionPanelsStayOpenExample3">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFourteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseFourteen">
                                    Q1:  What digital marketing services do you offer?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFourteen" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    We provide a comprehensive range of services, including SEO, social media marketing, content marketing, email marketing, and paid advertising.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFifteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseFifteen">
                                    Q2: How can your digital marketing services help me reach my target audience?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFifteen" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    Our data-driven strategies and expert execution help you attract, engage, and convert your ideal customers, expanding your online reach and brand awareness.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSixteen" aria-expanded="true" aria-controls="panelsStayOpen-collapseSixteen">
                                    Q3:  Do you track and report on the results of your campaigns?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSixteen" className="accordion-collapse collapse ">
                                <div className="accordion-body">
                                    Yes, we provide detailed reports and analytics to measure the success of your campaigns and continuously refine your strategies for optimal results.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}


export default Contact;
