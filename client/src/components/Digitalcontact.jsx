import React, { useState } from "react";
import axios from "axios";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

function Digitalcontact() {
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    digitalmarketBudget: ""
  });
  const [checkboxError,setCheckboxError] = useState("")
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    comments: "",
    services: {},
    digitalmarketBudget: ""
  })
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setState((prevFormData) => ({
      ...prevFormData,
      services: {
        ...state.services,
        [name]: checked
      },
    }));
    validateField("serviceOption", checked)
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    if (name === 'name') {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    }
    setState({
      ...state,
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
  var digitalServiceList = document.getElementsByName("DigitalserviceList");

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          name: value.length === 0 ? 'Name is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid name, only letters allowed' : '',
        });
        break;
      case 'company':
        setErrors({
          ...errors,
          company: value.length === 0 ? 'Company  is required' : /[^A-Za-z0-9\s]/.test(value) ? 'Invalid company name, only letters allowed' : '',
        });
        break;

      case 'website':
        setErrors({
          ...errors,
          website: value.length === 0 ? 'Website URL is required' : !/^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})(:\d{1,5})?(\/\S*)?$/.test(value) ? 'Invalid website URL' : '',
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
        let isChecked = false;
        for (var i = 0; i < digitalServiceList.length; i++) {
          if (digitalServiceList[i].checked) {
            isChecked = true;
            break; // If one is checked, no need to continue checking
          }
        }
        if (!isChecked) {
          setCheckboxError("Choose atleast one option")
        }
        if(value) setCheckboxError("")
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.email || errors.phone ||errors.company || errors.website || checkboxError ) return;

    if (!state.name.trim() || !state.email.trim() || !state.phone.trim() ||  !state.company.trim() ||  !state.website.trim()) {

      setErrors({
        name: !state.name ? 'Name is required.' : '',
        email: !state.email ? 'Email is required.' : '',
        phone: !state.phone ? 'Phone No is required.' : '',
        website: !state.website ? 'Website URL is required.' : '',
        company: !state.company ? 'Company name is required' : ''
      });
      validateField("serviceOption", "")

      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/digital/contact", state);
      if (response.status === 201) {
        showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });

        var digitalServiceList = document.getElementsByName("DigitalserviceList");
        for (var i = 0; i < digitalServiceList.length; i++) {
          digitalServiceList[i].value = false;
        }
        setState({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          comments: "",
          services: {},
          digitalmarketBudget: ""
        })

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
      <section className="container" >
        <div className="box1 secondary-text ">
          <form onSubmit={handleSubmit}>
            <div className="row mt-5" >
              <h3 className="secondary-header text-center pb-3">Need a Successful Project</h3>
              <h5 className="pb-3">I'M Interested In</h5>
              <div style={{ color: 'red', fontSize: "12px" }}>{checkboxError}</div>
              <div className="col-md-6">
                <input type="checkbox" name="socialMediaMarketing" onChange={handleCheckboxChange} value={state.services.socialMedia} />
                <span className="fs-5"> Social Media Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="websidedevelopment"
                  name="websiteDevelopment"
                  onChange={handleCheckboxChange} value={state.services.websiteDevelopment}
                />
                <span className="fs-5"> Website Development</span>
                <br />
                <input
                  type="checkbox"
                  id="influencerMarketing"
                  name="influencerMarketing"
                  onChange={handleCheckboxChange} value={state.services.influencerMarketing}
                />
                <span className="fs-5"> Influencer Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="brandingSolution"
                  name="brandingSolution"
                  onChange={handleCheckboxChange} value={state.services.brandingSolution}
                />
                <span className="fs-5"> Branding Solution</span>
                <br />
                <input type="checkbox" id="seo" name="searchEngineOptimization" />{" "}
                <span className="fs-5"> Search Engine Optimization</span>
                <br />
                <input type="checkbox" id="contentwriting" name="contentWriting" onChange={handleCheckboxChange} value={state.services.contentwriting} />
                <span className="fs-5"> Content Writing</span>
                <br />
              </div>
            
                <div className="col-md-6 ">
                  <input
                    type="checkbox"
                    id="performanceMarketing"
                    name="performanceMarketing"
                    onChange={handleCheckboxChange} value={state.services.performanceMarketing}
                  />
                  <span className="fs-5"> Performance Marketing</span> <br />
                  <input
                    type="checkbox"
                    id="eventMarketing"
                    name="eventMarketing"
                    onChange={handleCheckboxChange} value={state.services.eventMarketing}
                  />
                  <span className="fs-5"> Event Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="videoProduction"
                    name="videoProduction"
                    onChange={handleCheckboxChange} value={state.services.videoProduction}
                  />
                  <span className="fs-5"> Video Production</span>
                  <br />
                  <input type="checkbox" id="consultancy" name="consultancy" onChange={handleCheckboxChange} value={state.services.consultancy} />
                  <span className="fs-5"> Consultancy</span>
                  <br />
                  <input
                    type="checkbox"
                    id="instagramMarketing"
                    name="instagramMarketing"
                    onChange={handleCheckboxChange} value={state.services.instagramMarketing}
                  />
                  <span className="fs-5"> Instagram Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="shopifyDevelopment"
                    name="shopifyDevelopment"
                    onChange={handleCheckboxChange} value={state.services.shopifyDevelopment}
                  />
                  <span className="fs-5"> Shopify Development</span>
                  <br />
                </div>
            
            </div>
            <div>
              <div className="row justify-content-center mt-3 g-3">
                <div className="col-md-6">
                  <div className="position-relative">
                    <input type="text" placeholder=" Enter Your Name*" className="digicontact mb-4" name="name" value={state.name} onChange={handleInputChange} />
                    <div className="position-absolute bottom-0" style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.name}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <input type="text" placeholder=" Enter Your Mobile Number*" className="digicontact mb-4" name="phone" value={state.phone} onChange={handleInputChange} />
                    <div className="position-absolute bottom-0" style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.phone}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <input type="text" placeholder=" Enter Your Email*" className="digicontact mb-4" name="email" value={state.email} onChange={handleInputChange} />
                    <div className="position-absolute bottom-0"  style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.email}</div>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="position-relative">
                    <input type="text" placeholder=" Enter Your Company Name*" className="digicontact mb-4" name="company" value={state.company} onChange={handleInputChange} />
                    <div className="position-absolute bottom-0"  style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.company}</div>

                  </div>
                </div>
                <h4 className="secondary-header text-center m-3">Average Monthly Marketing Budget in INR* </h4>
                <div className="col-md-12 digitalcontact position-relative"  >
                  <select name="digitalmarketBudget" value={state.digitalmarketBudget}
                    onChange={handleInputChange}>
                    <option ></option>
                    <option value="Rs. 0 to Rs. 1 Lakh">Rs. 0 to Rs. 1 Lakh</option>
                    <option value="Rs. 1 Lakh to Rs. 5 Lakh">Rs. 1 Lakh to Rs. 5 Lakh</option>
                    <option value="Rs. 5 Lakh to Rs. 10 Lakh">Rs. 5 Lakh to Rs. 10 Lakh</option>
                    <option value="Rs. 10 Lakh to Rs. 25 Lakh">Rs. 10 Lakh to Rs. 25 Lakh</option>
                    <option value="Rs. 25 Lakh to Rs. 50 Lakh">Rs. 25 Lakh to Rs. 50 Lakh</option>
                    <option value="Rs. 50 Lakh to Rs. 1 Crore">Rs. 50 Lakh to Rs. 1 Crore</option>
                    <option value="More than Rs. 1 Crore">More than Rs. 1 Crore</option>
                  </select>
                </div>


                <div className="col-md-6">
                  <div className="position-relative">
                    <input
                      type="text"
                      placeholder=" Enter Your Website URL*"
                      className="digicontact mb-4"
                      name="website"
                      value={state.website}
                      onChange={handleInputChange} // Add this line for handling changes
                    />
                     <div className="position-absolute bottom-0" style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.website}</div>

                  </div>
                </div>

                <div className="col-md-6 textarea1">
                  <div>
                    <textarea
                      id="myTextarea"
                      name="comments"
                      rows="4"
                      placeholder="Comments*"
                      className="digicontact"
                      value={state.comments}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="py-4 my-4 demo-bts text-center">
                  <button className="gold-btn m-3 green-btn mx-auto heading5"><span className="d-block">Submit Details Now</span> <i className="bi bi-arrow-right"></i></button></div>
              </div>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
}

export default Digitalcontact;
