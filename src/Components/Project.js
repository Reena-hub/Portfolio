import React from "react";
import Booking from "../Assets/images/booking.jpeg"
import GetMyDrive from "../Assets/images/getmydrive.jpeg"
import Blog from "../Assets/images/blog.jpeg"
import Admin from "../Assets/images/admin.jpeg"
import Staff from "../Assets/images/staff.jpeg"
import Device from "../Assets/images/device.jpeg"

const Project = () => {
    return (
        <React.Fragment>
            <div className="section-gap about-card" id="works">

                    <h1 className="text-center title mb-4 scroll-animate">Works & Projects</h1>
                    <p className="project-para scroll-animate">Take a look at the websites I’ve built, each crafted with care and attention to detail, reflecting my dedication to both design and functionality.</p>

                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={GetMyDrive} alt="Project" className="card-img-top" />
                                    <a href="https://getmydrive.in/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Software</span>
                                    <h5 className="mt-2">GetMyDrive</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Admin} alt="Project" className="card-img-top" />
                                    <a href="https://admin.lecarz.com/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Software</span>
                                    <h5 className="mt-2">GetMyDrive Admin</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Staff} alt="Project" className="card-img-top" />
                                    <a href="https://staff.lecarz.com/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Software</span>
                                    <h5 className="mt-2">GetMyDrive Staff</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Booking} alt="Project" className="card-img-top" />
                                    <a href="https://book.madrasselfdrivecars.com/login" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>UI/UX Design</span>
                                    <h5 className="mt-2">Booking Form</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Device} alt="Project" className="card-img-top" />
                                    <a href="/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Service</span>
                                    <h5 className="mt-2">Device Management</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Blog} alt="Project" className="card-img-top" />
                                    <a href="https://blog.msdcars.in/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body  scroll-animate">
                                    <span>Branding</span>
                                    <h5 className="mt-2">Blog Management</h5>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;