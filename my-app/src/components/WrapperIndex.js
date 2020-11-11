import React from "react";
import '../styles/WrapperIndex.css';
import Header from "./Header";
import BodyIndex from "./BodyIndex";
import Footer from "./Footer";


function WrapperIndex() {
    return(
        <div className="WrapperIndex">
            <Header />
            <BodyIndex />
            <Footer />
        </div>
    )
}

export default WrapperIndex;