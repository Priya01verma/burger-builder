import React from "react";
import Logo from "../../logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
//import BackDrop from "../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Aux/Aux";
import "./SideDrawer.css";

const sideDrawer = props => {
    const attachedClasses = !props.show ? "Open" : "Close";
    return (
        <Aux>
            {/* <BackDrop
                show={props.open}
                clicked={props.closed}
                className={`DesktopOnly`}
            /> */}
            <div className={`SideDrawer ${attachedClasses}`}>
                <Logo height="100px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};
export default sideDrawer;
