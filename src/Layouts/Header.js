import React from "react";
import Logo from '../Assets/images/Reena.png'

const Header = () => {
    const getElement = (element) => {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth", });
    }
    return (
        <React.Fragment>
            <header className="d-md-flex d-none justify-content-between align-items-center">
                <a className="header-logo" href="/"><img src={Logo} alt="Logo" /></a>
                <ul className="d-flex gap-5 header-ul">
                    <li><span onClick={() => { getElement(document.getElementById("about")) }}><i className="fa-solid fa-circle-info me-1"></i>About</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("skills")) }}><i className="fa-solid fa-ribbon me-1"></i>Skills</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("works")) }}><i className="fa-solid fa-briefcase me-1"></i>Works</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("contact")) }}><i className="fa-solid fa-phone me-1"></i>Contact</span></li>
                </ul>
                <button onClick={() => { getElement(document.getElementById("contact")) }} type="button" className="btn btn-theme">Hire Me <i className="fa-solid fa-handshake ms-1"></i></button>
            </header>
            <header className="d-md-none d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <button className="menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> <i className="fa-solid fa-bars"></i></button>
                    <a href="/" className="header-logo"><img src={Logo} alt="Logo" /></a>
                </div>
                <button onClick={() => { getElement(document.getElementById("contact")) }} type="button" className="btn btn-theme">Hire Me <i className="fa-solid fa-handshake ms-1"></i></button>
            </header>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <a className="header-logo" href="/"><img src={Logo} alt="Logo" /></a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="header-ul ps-0">
                    <li><span onClick={() => { getElement(document.getElementById("about")) }}><i className="fa-solid fa-circle-info me-1"></i>About</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("skills")) }}><i className="fa-solid fa-ribbon me-1"></i>Skills</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("works")) }}><i className="fa-solid fa-briefcase me-1"></i>Works</span></li>
                    <li><span onClick={() => { getElement(document.getElementById("contact")) }}><i className="fa-solid fa-phone me-1"></i>Contact</span></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;