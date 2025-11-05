import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div>Copyright <span style={{ color: 'var(--primary)' }}>@{new Date()?.getFullYear()}</span>, All Rights Reserved</div>
                <div>Created By <span style={{ color: 'var(--primary)' }}>Reena G</span></div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;