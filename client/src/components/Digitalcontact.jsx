import React from "react";

function Digitalcontact() {
  return (
    <div>
      <section className="container">
        <div className="row " >
          <h5>I'M Interested In</h5>
          <div className="col-md-6">
            <input type="checkbox" id="Socialmedia" name="Socialmedia" />
            <span className="fs-5"> Social Media Marketing</span>
            <br />
            <input
              type="checkbox"
              id="websidedevelopment"
              name="websidedevelopment"
            />
            <span className="fs-5"> Webside Development</span>
            <br />
            <input
              type="checkbox"
              id="influencermarketing"
              name="influencermarketing"
            />
            <span className="fs-5"> Influencer Marketing</span>
            <br />
            <input
              type="checkbox"
              id="brandindsolution"
              name="brandindsolution"
            />
            <span className="fs-5"> Branding Solution</span>
            <br />
            <input type="checkbox" id="seo" name="seo" />{" "}
            <span className="fs-5"> Search Engine Optimization</span>
            <br />
            <input type="checkbox" id="contentwriting" name="contentwriting" />
            <span className="fs-5"> Content Writing</span>
            <br />
          </div>
          <div className="col-md-6">
            <div className="col-md-6 ">
              <input
                type="checkbox"
                id="performancemarketing"
                name="performancemarketing"
              />
              <span className="fs-5"> Performance Marketing</span> <br />
              <input
                type="checkbox"
                id="eventmarketing"
                name="eventmarketing"
              />
              <span className="fs-5"> Event Marketing</span>
              <br />
              <input
                type="checkbox"
                id="videoproduction"
                name="videoproduction"
              />
              <span className="fs-5"> Video Production</span>
              <br />
              <input type="checkbox" id="consultancy" name="consultancy" />
              <span className="fs-5"> Consultancy</span>
              <br />
              <input
                type="checkbox"
                id="instagrammarketing"
                name="instagrammarketing"
              />
              <span className="fs-5"> Instagram Marketing</span>
              <br />
              <input
                type="checkbox"
                id="shopifydevelopment"
                name="shopifydevelopment"
              />
              <span className="fs-5"> Shopify Development</span>
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="" >
                <input type="text" placeholder=" Enter Your Name*" className="digicontact mt-3" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text"placeholder=" Enter Your Mobile Number*" className="digicontact mt-3" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder=" Enter Your Email" className="digicontact mt-3" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder=" Enter Your Company Name" className="digicontact mt-3" />
              </div>
            </div>
            <h4>Average Monthly Marketing Budget in INR* </h4>
            <div className="col-md-12">
              <select style={{width:"100px"}}>
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
              <div>
                <input type="text" placeholder=" Enter Your Website URL" className="digicontact mt-3" />
              </div>
            </div>
            <div className="col-md-6">
             <textarea>

             </textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Digitalcontact;
