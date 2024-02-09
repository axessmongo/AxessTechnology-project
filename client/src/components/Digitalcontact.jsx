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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Digitalcontact;
