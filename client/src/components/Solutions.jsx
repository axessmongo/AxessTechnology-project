import React from "react";
import cardimg from "../assets/images/card img.webp";

export default function Solutions() {
  return (
    <div>
      <div className="bg-green-1">
        <div className="d-flex justify-content-center pt-5 ">
          <p className=" bg-img-2" data-aos="fade-up" data-aos-duration="600">
            {" "}
            Solutions
          </p>
        </div>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-4">
              <img
                src={cardimg}
                data-aos="flip-left"
                data-aos-duration="600"
                alt=""
              />
            </div>
            <div className="col-md-8 text-white">
              <h2
                className="text-white mt-5 mb-3"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                We’re More than Just Developers. We Solve Real-world Problems By
                Creating Better Digital Solutions.
              </h2>
              <p
                className="secondary-text"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                As a full-stack software development agency, We make some
                extraordinary things that engage your users.
              </p>
              <div className="my-5">
                <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      
                      <p className="text-white mb-0">Customer Retention System</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Enterprise Resource Planning </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Customer Relationship Management</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">HR Software</p>
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Enterprise Applications</p>
                    </div>
                  </div> */}
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Data Analytics</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">IT Service Management</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Ecommerce</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Supply Chain</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="small-card"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="text-white mb-0">Web Portals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
