import React from "react";
import Aux from "../../hoc/Aux";
import classes from "../layout/Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import "./Layout.css"

const layout = props => (
    <Aux>
        {/* <div>Toolbar,sidebar, backdrawer</div> */}
        <Toolbar />
        <main className={"Content"}>{props.children}</main>
    </Aux>
);

export default layout;
