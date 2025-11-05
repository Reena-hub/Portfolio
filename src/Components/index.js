import React, { useState } from "react";
import Profile from '../Assets/images/profile.jpg'

const Index = () => {
    const [detail, setDetail] = useState({ name: "", email: "", subject: "", message: "" })
    const handleChange = (e) => {
        setDetail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <React.Fragment>
            <div className="row my-4" id="about">
                <div className="col-xl-4 col-lg-5 mb-lg-0 mb-4">
                    <div className="about-card text-center">
                        <div className="d-flex justify-content-center">
                            <div className="profile">
                                <img src={Profile} alt="Profile" />
                            </div>
                        </div>
                        <h2 className="mt-2">Reena G</h2>
                        <div className="proifle-data">I'm a Full Stack Developer from Chennai</div>
                        <div className="d-flex mt-3 justify-content-around gap-2 align-items-center flex-wrap">
                            <a className="social-media" target="_blank" rel="noreferrer" href="https://www.instagram.com/gr.eena568?utm_source=qr&igsh=cjEzcWF3b2lnOWk2"><i className="fa-brands fa-instagram"></i></a>
                            <a className="social-media" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/reena-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a className="social-media" target="_blank" rel="noreferrer" href="https://github.com/Reena-hub"><i className="fa-brands fa-github"></i></a>
                            <a className="social-media" target="_blank" rel="noreferrer" href="https://www.threads.com/@gr.eena568"><i className="fa-brands fa-threads"></i></a>
                        </div>

                    </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                    <div className="about-card mb-4">
                        <p className="hello">Hello There!</p>
                        <h1 className="my-3">I'm Reena, a MERN Stack Web Developer.</h1>
                        <p className="mb-3 about-p">I am a MERN Stack Developer with a strong track record of designing and delivering scalable, high-performance web applications. Skilled in MongoDB, Express.js, React, and Node.js, I craft clean, efficient, and maintainable code while ensuring seamless user experiences.</p>
                        <a href="/resume.pdf" download="Reena_Resume.pdf">
                            <button className="btn btn-theme download-btn">Download CV<i className="fa-solid fa-download ms-1"></i></button>
                        </a>
                    </div>
                    <div className="about-card">
                        <div className="marquee">
                            <p>
                                <span className="me-4"><i className="fa-brands fa-html5"></i> HTML5</span>
                                <span className="me-4"><i className="fa-brands fa-css3"></i> CSS3</span>
                                <span className="me-4"><i className="fa-brands fa-js"> </i> JS</span>
                                <span className="me-4"><i className="fa-brands fa-react"></i> React</span>
                                <span className="me-4"><i className="fa-brands fa-node-js"></i> Node JS</span>
                                <span className="me-4"><i className="fa-brands fa-docker"></i> Docker</span>
                                <span className="me-4"><i className="fa-brands fa-github"></i> Git</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-card section-gap" id="services">
                <p className="sub-title">Services</p>
                <h1 className="text-center title">Quality Services</h1>
                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="quality-cards">
                            <i className="fa-solid fa-arrows-up-down-left-right card-icons"></i>
                            <div className="card-title">Responsive UI/UX Design</div>
                            <p className="card-para">Crafting intuitive and mobile-friendly interfaces that enhance user experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 my-lg-0 my-4">
                        <div className="quality-cards">
                            <i className="fa-solid fa-gear card-icons"></i>
                            <div className="card-title">API Development & Integration</div>
                            <p className="card-para">Building RESTful APIs and integrating third-party services seamlessly.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="quality-cards">
                            <i className="fa-solid fa-database card-icons"></i>
                            <div className="card-title">Database Design & Management</div>
                            <p className="card-para">Efficient MongoDB schema design, queries, and data optimization.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-gap">
                <div className="row align-items-stretch">
                    <div className="col-lg-6">
                        <div className="about-card h-100">
                            <h4 className="title">Experience</h4>
                            <div className="d-flex align-items-start gap-4">
                                <span className="icons-exp"><i className="fa-solid fa-briefcase"></i></span>
                                <div>
                                    <div className="card-para">2025 - Present</div>
                                    <div className="card-title my-2">Software Developer </div>
                                    <div className="card-para">Monter Smart Drive</div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex align-items-start gap-4">
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
                            <h4 className="title">Education</h4>
                            <div className="d-flex align-items-start gap-4">
                                <span className="icons-exp"><i className="fa-solid fa-user-graduate"></i></span>
                                <div>
                                    <div className="card-para">2019-2022</div>
                                    <div className="card-title my-2">B.Sc Computer Science</div>
                                    <div className="card-para">Women's Christian College</div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex align-items-start gap-4">
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
            <div className="section-gap skill-gap" id="skills">
                <p className="sub-title">Pro Skills</p>
                <h1 className="text-center title">Explore My Skills</h1>
                <div className="row align-items-stretch justify-content-center">
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-html5 fs-1"></i></div>
                            <div className="mb-0 title text-center">HTML5</div>
                            <div className="percentage">95%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-css3 fs-1"></i></div>
                            <div className="mb-0 title text-center">CSS3</div>
                            <div className="percentage">94%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-js fs-1"> </i> </div>
                            <div className="mb-0 title text-center">Javascript</div>
                            <div className="percentage">96%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-react fs-1"></i></div>
                            <div className="mb-0 title text-center">React JS</div>
                            <div className="percentage">94%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-node-js fs-1"></i></div>
                            <div className="mb-0 title text-center">Node JS</div>
                            <div className="percentage">93%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-html5 fs-1"></i></div>
                            <div className="mb-0 title text-center">Express JS</div>
                            <div className="percentage">92%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-solid fa-database fs-1"></i></div>
                            <div className="mb-0 title text-center">MongoDB</div>
                            <div className="percentage">95%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-html5 fs-1"></i></div>
                            <div className="mb-0 title text-center">Docker</div>
                            <div className="percentage">86%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 my-sm-0 my-3">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-html5 fs-1"></i></div>
                            <div className="mb-0 title text-center">Kong</div>
                            <div className="percentage">90%</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="skill-cards">
                            <div className="text-center mb-2"><i className="fa-brands fa-github fs-1"></i></div>
                            <div className="mb-0 title text-center">GIT</div>
                            <div className="percentage">90%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-gap about-card" id="works">
                <h1 className="text-center title mb-4">Works & Projects</h1>
                <p className="project-para">Take a look at the websites I’ve built, each crafted with care and attention to detail, reflecting my dedication to both design and functionality.</p>
            </div>
            <div className="section-gap about-card" id="contact">
                <p className="sub-title">Contact</p>
                <h1 className="text-center title">Get in Touch with Me!</h1>
                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="contact-card">
                            <div>
                                <i className="fa-solid fa-location-dot contact-icons"></i>
                                <div className="question">Place:</div>
                                <div className="answer">Chennai</div>
                            </div>
                            <div className="my-5">
                                <i className="fa-solid fa-phone contact-icons"></i>
                                <div className="question">Conatct Number:</div>
                                <div className="answer">+91 88258 70356</div>
                            </div>
                            <div>
                                <i className="fa-solid fa-envelope contact-icons"></i>
                                <div className="question">Email:</div>
                                <div className="answer">reenagunasekar5@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-card">
                            <div className="d-flex flex-lg-row gap-4">
                                <input type="text" value={detail?.name || ""} onChange={handleChange} name="name" autoComplete="off" className="form-control input-form" placeholder="Name" />
                                <input type="email" value={detail?.email || ""} onChange={handleChange} name="email" autoComplete="off" className="form-control input-form" placeholder="name@gmail.com" />
                            </div>
                            <input type="text" value={detail?.subject || ""} onChange={handleChange} name="subject" autoComplete="off" className="form-control input-form my-4" placeholder="Your Subject" />
                            <textarea autoComplete="off" value={detail?.message || ""} onChange={handleChange} name="message" style={{ height: '108px' }} className="form-control input-form" placeholder="Your Message" />
                            <button className="btn btn-theme download-btn mt-4">Send Me Message<i className="fa-solid fa-envelope ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index;