import React from "react";

const Service = () => {
    return (
        <React.Fragment>

            <div className="about-card section-gap" id="services">
                <p className="sub-title scroll-animate">Services</p>
                <h1 className="text-center title scroll-animate">Quality Services</h1>
                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="quality-cards scroll-animate">
                            <i className="fa-solid fa-arrows-up-down-left-right card-icons"></i>
                            <div className="card-title">Responsive UI/UX Design</div>
                            <p className="card-para">Crafting intuitive and mobile-friendly interfaces that enhance user experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 my-lg-0 my-4">
                        <div className="quality-cards scroll-animate">
                            <i className="fa-solid fa-gear card-icons"></i>
                            <div className="card-title">API Development & Integration</div>
                            <p className="card-para">Building RESTful APIs and integrating third-party services seamlessly.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="quality-cards scroll-animate">
                            <i className="fa-solid fa-database card-icons"></i>
                            <div className="card-title">Database Design & Management</div>
                            <p className="card-para">Efficient MongoDB schema design, queries, and data optimization.</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Service;