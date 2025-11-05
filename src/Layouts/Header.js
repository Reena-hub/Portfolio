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
            <header className="d-flex justify-content-between align-items-center">
                <div className="header-logo"><img src={Logo} alt="Logo" /></div>
                <ul className="d-flex gap-5 header-ul">
                    <li onClick={() => { getElement(document.getElementById("about")) }}>About</li>
                    <li onClick={() => { getElement(document.getElementById("skills")) }}>Skills</li>
                    <li onClick={() => { getElement(document.getElementById("works")) }}>Works</li>
                    <li onClick={() => { getElement(document.getElementById("contact")) }}>Contact</li>
                </ul>
                <button onClick={() => { getElement(document.getElementById("contact")) }} type="button" className="btn btn-theme">Hire Me <i className="fa-solid fa-handshake ms-1"></i></button>
            </header>
        </React.Fragment>
    )
}

export default Header;