import React from "react";

const Experience = () => {
    return (
        <React.Fragment>

            <div className="section-gap">
                <div className="row align-items-stretch">
                    <div className="col-lg-6">
                        <div className="about-card h-100">
                            <h4 className="title scroll-animate">Experience</h4>
                            <div className="d-flex align-items-start gap-4 scroll-animate">
                                <span className="icons-exp"><i className="fa-solid fa-briefcase"></i></span>
                                <div>
                                    <div className="card-para">2025 - Present</div>
                                    <div className="card-title my-2">Software Developer </div>
                                    <div className="card-para">Monter Smart Drive</div>
                                </div>
                            </div>
                            <hr className="my-4 scroll-animate" />
                            <div className="d-flex align-items-start gap-4 scroll-animate">
                                <span className="icons-exp"><i className="fa-solid fa-briefcase"></i></span>
                                <div>
                                    <div className="card-para">2024</div>
                                    <div className="card-title my-2">Trainee Developer</div>
                                    <div className="card-para">Ippopay Technologies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">
                        <div className="about-card h-100">
                            <h4 className="title scroll-animate">Education</h4>
                            <div className="d-flex align-items-start gap-4 scroll-animate">
                                <span className="icons-exp"><i className="fa-solid fa-user-graduate"></i></span>
                                <div>
                                    <div className="card-para">2019-2022</div>
                                    <div className="card-title my-2">B.Sc Computer Science</div>
                                    <div className="card-para">Women's Christian College</div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex align-items-start gap-4 scroll-animate">
                                <span className="icons-exp"><i className="fa-solid fa-user-graduate"></i></span>
                                <div>
                                    <div className="card-para">2018-2019</div>
                                    <div className="card-title my-2">Higher Secondary Education</div>
                                    <div className="card-para">Kendriya Vidyalaya</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Experience;