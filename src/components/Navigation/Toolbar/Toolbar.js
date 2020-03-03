import React from "react";
import "./Toolbar.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo height ="80%" />
            <nav 
            // className="DesktopOnly"
            >
                <NavigationItems />
            </nav>
        </header>
    );
};
export default toolbar;
