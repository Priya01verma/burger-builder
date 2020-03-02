import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import "./Layout.css";

const layout = props => (
    <Aux>
        {/* <div>Toolbar,sidebar, backdrawer</div> */}
        <Toolbar />
        <SideDrawer />
        <main className={"Content"}>{props.children}</main>
    </Aux>
);

export default layout;
