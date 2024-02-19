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
    comments: "",
    services: {},
    digitalmarketBudget: ""
  });
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
    // console.log(name, checked)
    setState((prevFormData) => ({
      ...prevFormData,
      services: {
        ...state.services,
        [name]: checked
      },
    }));
  };



  // console.log("state", state)
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
  const validateField = (name, value) => {

    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          name: value.length === 0 ? 'Name is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid name, only letters allowed' : '',
        });
        break;
      case 'company Name':
        setErrors({
          ...errors,
          name: value.length === 0 ? 'Company  is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid name, only letters allowed' : '',
        });
        break;

      // case 'website url':
      //   setErrors({
      //     ...errors,
      //     name: value.length === 0 ? 'Website url is required' : /[^A-Za-z\s]/.test(value) ? 'Invalid website url, only letters allowed' : '',
      //   });
      //   break;
      case 'website url':
        setErrors({
          ...errors,
          name: value.length === 0 ? 'Website URL is required' : !/^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})(:\d{1,5})?(\/\S*)?$/.test(value) ? 'Invalid website URL' : '',
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

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.name || errors.email || errors.phone) return
    if (!state.name.trim() || !state.email.trim() || !state.phone.trim()) {
      setErrors({
        name: !state.name ? 'Name is required.' : '',
        email: !state.email ? 'Email is required.' : '',
        phone: !state.phone ? 'Phone No is required.' : '',
        website: !state.website ? 'website url is required.' : '',
        // comments: !state.comments ? 'Comments is required' : '',
        company: !state.company ? 'CompanyName is required' : ''
      });
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/contact", state);
      if (response.status === 201) {
        console.log("201")
        showToast("Our team will connect with you", { style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } });

        var digitalServiceList = document.getElementsByName("DigitalserviceList");
        for (var i = 0; i < digitalServiceList.length; i++) {
          digitalServiceList[i].checked = false;
        }
        setState({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          comments: "",
          services: {
            // socialMedia : false
          },
          digitalmarketBudget: ""

        })
        setErrors({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          comments: "",
          services: {
            // socialMedia : false
          },
          digitalmarketBudget: ""
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


  //   const get_dat = async () => {
  //     try {
  //         let res = await axios.get('');
  //         console.log(get_dat);
  //         setState(res.data)
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };
  // useEffect(() => {
  //     get_dat();
  // }, [])

  // const handleSubmit = (event)=>{
  //   event.preventDefault()
  //   console.log(state);

  // }

  return (
    <div>
      <section className="container" >
        <div className="box1 secondary-text ">
          <form onSubmit={handleSubmit}>
            <div className="row mt-5" >
              <h3 className="secondary-header text-center">Need a Successful Project</h3>

              <h5>I'M Interested In</h5>
              <div className="col-md-6 mt-4 ">
                <input type="checkbox" name="DigitalserviceList" onChange={handleCheckboxChange} value={state.services.socialMedia} />
                <span className="fs-5"> Social Media Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="websidedevelopment"
                  name="DigitalserviceList"
                  onChange={handleCheckboxChange} value={state.services.websidedevelopment}
                />
                <span className="fs-5"> Website Development</span>
                <br />
                <input
                  type="checkbox"
                  id="influencermarketing"
                  name="DigitalserviceList"
                  onChange={handleCheckboxChange} value={state.services.influencermarketing}
                />
                <span className="fs-5"> Influencer Marketing</span>
                <br />
                <input
                  type="checkbox"
                  id="brandindsolution"
                  name="DigitalserviceList"
                  onChange={handleCheckboxChange} value={state.services.brandindsolution}
                />
                <span className="fs-5"> Branding Solution</span>
                <br />
                <input type="checkbox" id="seo" name="DigitalserviceList" />{" "}
                <span className="fs-5"> Search Engine Optimization</span>
                <br />
                <input type="checkbox" id="contentwriting" name="DigitalserviceList" onChange={handleCheckboxChange} value={state.services.contentwriting} />
                <span className="fs-5"> Content Writing</span>
                <br />
              </div>
              <div className="col-md-6 mt-4">
                <div className="col-md-6 ">
                  <input
                    type="checkbox"
                    id="performancemarketing"
                    name="DigitalserviceList"
                    onChange={handleCheckboxChange} value={state.services.performancemarketing}
                  />
                  <span className="fs-5"> Performance Marketing</span> <br />
                  <input
                    type="checkbox"
                    id="eventmarketing"
                    name="DigitalserviceList"
                    onChange={handleCheckboxChange} value={state.services.eventmarketing}
                  />
                  <span className="fs-5"> Event Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="videoproduction"
                    name="DigitalserviceList"
                    onChange={handleCheckboxChange} value={state.services.videoproduction}
                  />
                  <span className="fs-5"> Video Production</span>
                  <br />
                  <input type="checkbox" id="consultancy" name="DigitalserviceList" onChange={handleCheckboxChange} value={state.services.consultancy} />
                  <span className="fs-5"> Consultancy</span>
                  <br />
                  <input
                    type="checkbox"
                    id="instagrammarketing"
                    name="DigitalserviceList"
                    onChange={handleCheckboxChange} value={state.services.instagrammarketing}
                  />
                  <span className="fs-5"> Instagram Marketing</span>
                  <br />
                  <input
                    type="checkbox"
                    id="shopifydevelopment"
                    name="DigitalserviceList"
                    onChange={handleCheckboxChange} value={state.services.shopifydevelopment}
                  />
                  <span className="fs-5"> Shopify Development</span>
                  <br />
                </div>
              </div>
            </div>
            <div>
              <div className="row justify-content-center mt-3 g-3">
                <div className="col-md-6">
                  <div className="" >
                    <input type="text" placeholder=" Enter Your Name*" className="digicontact mt-3" name="name" value={state.name} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.name}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Mobile Number*" className="digicontact mt-3" name="phone" value={state.phone} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.phone}</div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Email*" className="digicontact mt-3" name="email" value={state.email} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.email}</div>

                  </div>
                </div>

                <div className="col-md-6">
                  <div>
                    <input type="text" placeholder=" Enter Your Company Name*" className="digicontact mt-3" name="company" value={state.company} onChange={handleInputChange} />
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.company}</div>

                  </div>
                </div>
                <h4 className="secondary-header text-center m-3">Average Monthly Marketing Budget in INR* </h4>
                <div className="col-md-12 digitalcontact"  >
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
                  <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.digitalmarketBudget}</div>

                </div>


                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      placeholder=" Enter Your Website URL*"
                      className="digicontact mt-3"
                      name="website"
                      value={state.website}
                      onChange={handleInputChange} // Add this line for handling changes
                    />
                  </div>
                  <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.website}</div>

                </div>

                <div className="col-md-6 textarea1">
                  <div>
                    <textarea
                      id="myTextarea"
                      name="comments"
                      rows="4"
                      placeholder="Comments"
                      className="digicontact"
                      value={state.comments}
                      onChange={handleInputChange}
                    ></textarea>
                    <div style={{ color: 'red', textAlign: "center", fontSize: "12px" }}>{errors.comments}</div>
                  </div>
                </div>
                {/* <div className="py-4 my-4 text-center">
                <button className="gold-btn green-btn m-5 mx-auto heading5" target="_blank">Submit Details Now</button>
              </div> */}
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
