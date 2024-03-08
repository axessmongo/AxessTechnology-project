import React, { useState } from "react";
import axios from "axios";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

function Digitalcontact() {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceOption: '',
  });
  const [checkboxError, setCheckboxError] = useState("");
  const [state, setState] = useState({
    fname: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    digitalmarketBudget: '',
    comments: '',
    services: {},
  });
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      services: {
        ...prevState.services,
        [name]: checked,
      },
    }));
    validateField("serviceOption", checked);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
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
      duration: options.duration || 5000,
      newWindow: options.newWindow || true,
      close: options.close || true,
      gravity: options.gravity || "top",
      position: options.position || "center",
      stopOnFocus: options.stopOnFocus || true,
      style: options.style || {},
      onClick: options.onClick || function () { },
    }).showToast();
  };
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: value.length === 0 ? 'Name is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid name, only letters allowed' : '',
        }));
        break;
      case 'company':
        setErrors((prevErrors) => ({
          ...prevErrors,
          company: value.length === 0 ? 'Company is required' : /[^A-Za-z0-9\s]/.test(value) ? 'Invalid company name, only letters allowed' : '',
        }));
        break;
      case 'website':
        setErrors((prevErrors) => ({
          ...prevErrors,
          website: value.length === 0 ? 'Website URL is required' : !/^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})(:\d{1,5})?(\/\S*)?$/.test(value) ? 'Invalid website URL' : '',
        }));
        break;
      case 'email':
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: value.length === 0 ? 'Email is required' : !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value) ? 'Invalid email' : '',
        }));
        break;
      case 'phone':
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: value.length === 0 ? 'Phone is required' : (value.length !== 10 || !/^[5-9]\d+$/.test(value)) ? 'Invalid phone' : '',
        }));
        break;
      case 'serviceOption':
        let isChecked = false;
        for (let serviceName in state.services) {
          if (state.services[serviceName]) {
            isChecked = true;
            break; // If one is checked, no need to continue checking
          }
        }
        if (!isChecked) {
          setCheckboxError("Choose at least one option");
        } else {
          setCheckboxError("");
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are any errors before submitting
    if (Object.values(errors).some((error) => error !== '') || checkboxError !== '') {
      showToast("Please fill in all required fields and correct any errors", { style: { border: "1px solid red" } });
      return;
    }
    try {
      const response = await axios.post("/jaykumar", state);

      if (response.status === 201) {
        // Handle success
        // Reset form fields
        const checkboxes = document.getElementsByClassName("digiCheckBox");
        for (let checkbox of checkboxes) {
          checkbox.checked = false;
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
        });
        // Show success message
         showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });
      } else {
        // Handle unexpected response status
        alert("Unable to connect")
        console.log('Unexpected response:', response);
        // Show error message
        // showToast("Internal server error", { style: { border: "1px solid red" } });
      }
    } catch (error) {
      // Handle request error
      console.log("Error occurred:", error);
      // Show error message
      // showToast("Error occurred while submitting form", { style: { border: "1px solid red" } });
    }
  };

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
                <input type="checkbox" className="digiCheckBox" name="socialMediaMarketing" onChange={handleCheckboxChange} value={state.services.socialMedia} />
                <span className="fs-5"> Social Media Marketing</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="websidedevelopment"
                  name="websiteDevelopment"
                  onChange={handleCheckboxChange} value={state.services.websiteDevelopment}
                />
                <span className="fs-5"> Website Development</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="influencerMarketing"
                  name="influencerMarketing"
                  onChange={handleCheckboxChange} value={state.services.influencerMarketing}
                />
                <span className="fs-5"> Influencer Marketing</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="brandingSolution"
                  name="brandingSolution"
                  onChange={handleCheckboxChange} value={state.services.brandingSolution}
                />
                <span className="fs-5"> Branding Solution</span>
                <br />
                <input type="checkbox" className="digiCheckBox" id="seo" name="searchEngineOptimization" />{" "}
                <span className="fs-5"> Search Engine Optimization</span>
                <br />
                <input type="checkbox" className="digiCheckBox" id="contentwriting" name="contentWriting" onChange={handleCheckboxChange} value={state.services.contentwriting} />
                <span className="fs-5"> Content Writing</span>
                <br />
              </div>

              <div className="col-md-6 ">
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="performanceMarketing"
                  name="performanceMarketing"
                  onChange={handleCheckboxChange} value={state.services.performanceMarketing}
                />
                <span className="fs-5"> Performance Marketing</span> <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="eventMarketing"
                  name="eventMarketing"
                  onChange={handleCheckboxChange} value={state.services.eventMarketing}
                />
                <span className="fs-5"> Event Marketing</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="videoProduction"
                  name="videoProduction"
                  onChange={handleCheckboxChange} value={state.services.videoProduction}
                />
                <span className="fs-5"> Video Production</span>
                <br />
                <input type="checkbox" className="digiCheckBox" id="consultancy" name="consultancy" onChange={handleCheckboxChange} value={state.services.consultancy} />
                <span className="fs-5"> Consultancy</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
                  id="instagramMarketing"
                  name="instagramMarketing"
                  onChange={handleCheckboxChange} value={state.services.instagramMarketing}
                />
                <span className="fs-5"> Instagram Marketing</span>
                <br />
                <input
                  type="checkbox"
                  className="digiCheckBox"
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
                    <input type="text" placeholder=" Enter Your Name*" className="digicontact mb-4" name="fname" value={state.fname} onChange={handleInputChange} />
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
                    <div className="position-absolute bottom-0" style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.email}</div>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="position-relative">
                    <input type="text" placeholder=" Enter Your Company Name*" className="digicontact mb-4" name="company" value={state.company} onChange={handleInputChange} />
                    <div className="position-absolute bottom-0" style={{ color: 'red', textAlign: "center", fontSize: "14px" }}>{errors.company}</div>

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
