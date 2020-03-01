import React from "react";
import Aux from "../../hoc/Aux";
import classes from "../layout/Layout.css";

const layout = props => (
    <Aux>
        <div>Toolbar,sidebar, backdrawer</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default layout;
