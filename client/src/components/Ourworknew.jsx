import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { OurWorksData } from "../store/OurWorksData";
import Carousel from "./Carousel";

export default function Ourworknew() {

    console.log(OurWorksData);

    return (
        <div>
            <Navbar />
            <Banner
                h1="Categories"
                h2="Get started with 900+ free, customizable templates, a smart drag and drop editor, tools to boost your online presence and more."
                h3="Collaborate with us"
            />
            <div className="cat">
                <div className="container">
                    <div className="row mt-5 text-content ">
                        <div className="nav-div rounded-4 ">
                            <ul
                                className="nav nav-pills mb-3 text-center justify-content-center"
                                id="pills-tab"
                                role="tablist"
                            >
                                {OurWorksData?.slice(0, 5).map((value, key) => (
                                    <li className="nav-item col-md-2" role="presentation" key={key}>
                                        <div className="">
                                            <div
                                                className={`nav-link content ${key === 0 ? "active" : ""}`}
                                                id={`pills-${value.siteId}-tab`}
                                                data-bs-toggle="pill"
                                                data-bs-target={`#${value.siteId}`}
                                                type="div"
                                                role="tab"
                                                aria-controls={value.Category}
                                                aria-selected={key === 0 ? "true" : false}
                                            >
                                                <p className="secondary-text m-0">{value.Category}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                                {OurWorksData.length > 5 &&
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle secondary-text m-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                            More
                                        </a>
                                        <ul className="dropdown-menu">
                                            {OurWorksData.slice(5).map((value, key) => (
                                                <li className="nav-item" role="presentation" key={key}>
                                                    <div className="">
                                                        <div
                                                            className={`nav-link content`}
                                                            id={`pills-${value.siteId}-tab`}
                                                            data-bs-toggle="pill"
                                                            data-bs-target={`#${value.siteId}`}
                                                            type="div"
                                                            role="tab"
                                                            aria-controls={value.Category}
                                                            aria-selected='false'
                                                        >
                                                            <p className="secondary-text m-0">{value.Category}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    OurWorksData?.map((value, key) => (
                        <div className="tab-content" id="pills-tabContent" key={key}>
                            <div className={`tab-pane fade ${key === 0 ? "active show" : ""}`} fade id={value.siteId} role="tabpanel" aria-labelledby={`pills-${value.siteId}-tab`} tabindex={value.s_no} >
                                <section>
                                    <div className="container py-4 my-3">
                                        <div className="text-center pb-2">
                                            <h3>{value.headText}</h3>
                                            <p>{value.headDescription}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mt-3">
                                                <div
                                                    className=" p-1"
                                                >
                                                    <img src={value.imageaddress} alt={value.imageaddress} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="py-3">
                                                    <h3>{value.Category}</h3>
                                                    <div className="py-3">
                                                        <p className="fw-bold text-warning">
                                                            {value.siteId}
                                                        </p>
                                                    </div>
                                                    <div className="pt-2">
                                                        <h3>{value.SiteName}</h3>
                                                        <p className="pt-2">
                                                            {value.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly">
                                                    <div className="pt-2 demo-bts">
                                                        <Link to={value.WebsiteLink} className="text-decoration-none" target="_blank"><button className="gold-btn m-0 green-btn">
                                                            <span className="d-block">Demo Live</span>{" "}
                                                            <i className="bi bi-arrow-right"></i>
                                                        </button></Link>
                                                    </div>
                                                    <div className="pt-2 ">
                                                        <Link
                                                            to={"/contact"}
                                                            className="text-decoration-none"
                                                        >
                                                            <button className="gold-btn m-0 green-btn">
                                                                <span className="d-block">Pricing</span>{" "}
                                                                <i className="bi bi-arrow-right"></i>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className="pt-2">
                                                        <Link
                                                            to={"/contact"}
                                                            className="text-decoration-none"
                                                        >
                                                            {" "}
                                                            <button className="gold-btn m-0 green-btn">
                                                                <span className="d-block">Order Now</span>{" "}
                                                                <i className="bi bi-arrow-right"></i>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    ))
                }
            </div>
            <Carousel head={"Related Works"}/>
            <Footer />
        </div>
    );
}
