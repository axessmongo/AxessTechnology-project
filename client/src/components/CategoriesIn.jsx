import React from 'react'

export default function CategoriesIn() {
    return (
        <div>
            {/* <section >
                <div className="container">
                    <div className="row">
                        <div className='d-flex  mt-5 text-content border-bottom border-danger'>
                            <div className="col-md-2 content">ECommerce</div>
                            <div className="col-md-2 content">Portfolio</div>
                            <div className="col-md-2 content ">Bussiness</div>
                            <div className="col-md-2 content">Insurance</div>
                            <div className="col-md-2 content">Hospital</div>
                            <div className="col-md-2 content">School </div>
                        </div>

                    </div>
                </div>

            </section> */}

            <div className="container">
                <div className="overflow-hidden" id="resume">
                    <div className="text-md-center text-center mt-5">
                        <h1> Categories</h1>
                    </div>
                    <div className="row  mt-5 text-content border-bottom border-danger">
                        <div className="nav-div rounded-4 ">
                            <ul class="nav nav-pills mb-3 justify-content-around" id="pills-tab" role="tablist" >
                                <li class="nav-item" role="presentation">
                                   <div className="col-md-2 ">
                                   <div
                                        class="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        className='content'
                                    >
                                        <h4>Ecommerce</h4>
                                    </div>
                                   </div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <div className="col-md-2  ">
                                    <div
                                        class="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="true"
                                        className='content'



                                    >
                                        <h4>Portfolio</h4>
                                    </div>
                                    </div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <div className="col-md-2  ">
                                    <div
                                        class="nav-link"
                                        id="pills-bussiness-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-bussiness"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-bussiness"
                                        aria-selected="true"
                                        className='content'

                                    >
                                        <h4>Bussiness</h4>
                                    </div>
                                    </div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <div className="col-md-2  ">
                                    <div
                                        class="nav-link"
                                        id="pills-insurance-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-insurance"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-insurance"
                                        aria-selected="true"
                                        className='content'

                                    >
                                        <h4>Insurance</h4>
                                    </div>
                                    </div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <div className="col-md-2  ">
                                    <div
                                        class="nav-link"
                                        id="pills-hospital-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-hospital"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-hospital"
                                        aria-selected="true"
                                        className='content'

                                    >
                                        <h4>Hospital</h4>
                                    </div>
                                    </div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <div className="col-md-2  ">
                                    <div
                                        class="nav-link"
                                        id="pills-school-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-school"
                                        type="div"
                                        role="tab"
                                        aria-controls="pills-school"
                                        aria-selected="true"
                                        className='content'

                                    >
                                        <h4>School</h4>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade show"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                        >
                            <section>
                                sara
                            </section>

                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                sangu
                            </section>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-bussiness"
                            role="tabpanel"
                            aria-labelledby="pills-bussiness-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                sangu1
                            </section>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-insurance"
                            role="tabpanel"
                            aria-labelledby="pills-insurance-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                sangu2
                            </section>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-hospital"
                            role="tabpanel"
                            aria-labelledby="pills-hospital-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                sangu3
                            </section>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="pills-school"
                            role="d"
                            aria-labelledby="pills-school-tab"
                            tabindex="0"
                        >
                            <section className="container">
                                sangu4
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
