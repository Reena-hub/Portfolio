import React from "react";
import Profile from '../Assets/images/profile.jpeg'

const Home = () => {
    return (
        <React.Fragment>
            <div className="row my-4 align-items-stretch" id="about">
                <div className="col-xl-4 col-lg-5 mb-lg-0 mb-4">
                    <div className="about-card text-center h-100">
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
        </React.Fragment>
    )
}

export default Home;