import React from "react";
import '../styles/Wrapper.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Wrapper() {
    return(
        <div className="Wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Wrapper;