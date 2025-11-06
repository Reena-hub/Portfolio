import React from "react";

const Skill = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Skill;