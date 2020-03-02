import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";
import "./SideDrawer.css";

const sideDrawer = props => {
    return (
        <Aux>
            <BackDrop show className="DesktopOnly"/>
            <div className="SideDrawer">
                <Logo height="100px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};
export default sideDrawer;
