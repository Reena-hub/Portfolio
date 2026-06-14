import React from "react";
import Booking from "../Assets/images/booking.jpeg"
import Caroam from "../Assets/images/CaroamHome.png"
import Blog from "../Assets/images/blog.jpeg"
import Admin from "../Assets/images/Admin.png"
import Cricovers from "../Assets/images/Cricovers.png"
import CricoversAdmin from "../Assets/images/CricoversAdmin.png"

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
                                    <img src={Caroam} alt="Project" className="card-img-top" />
                                    <a href="https://caroam.com/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Software</span>
                                    <h5 className="mt-2">Caroam</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Admin} alt="Project" className="card-img-top" />
                                    <a href="https://admin.getmydrive.in/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Software</span>
                                    <h5 className="mt-2">Caroam Admin</h5>
                                </div>
                            </div>

                    </div>
                    {/* <div className="col-lg-4 col-md-6 my-3">

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

                    </div> */}
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
                    {/* <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Device} alt="Project" className="card-img-top" />
                                    <a href="https://reena-hub.github.io/Portfolio/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body scroll-animate">
                                    <span>Service</span>
                                    <h5 className="mt-2">Device Management</h5>
                                </div>
                            </div>

                    </div> */}
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


                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={Cricovers} alt="Project" className="card-img-top" />
                                    <a href="https://cricovers.com/news" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body  scroll-animate">
                                    <span>Website</span>
                                    <h5 className="mt-2">CricOvers</h5>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-4 col-md-6 my-3">

                            <div className="card work-card scroll-animate">
                                <div className="work-img">
                                    <img src={CricoversAdmin} alt="Project" className="card-img-top" />
                                    <a href="https://admin.cricovers.com/" target="_blank" rel="noreferrer" className="work-link">
                                        <i className="fa-solid fa-arrow-right go-arrow"></i>
                                    </a>
                                </div>
                                <div className="card-body  scroll-animate">
                                    <span>Panel</span>
                                    <h5 className="mt-2">CricOvers Admin</h5>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;