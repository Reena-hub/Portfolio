import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container">
                <Header />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Index;
