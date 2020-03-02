import React from "react";
import burgerLogo from "../../assets/logo/burger-logo.png";
import "./Logo.css";

const logo = props => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={burgerLogo} alt="burger-logo" />
        </div>
    );
};
export default logo;
