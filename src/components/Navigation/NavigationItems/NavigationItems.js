import React from "react";
import "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Link } from "react-router-dom";

const navigationsItems = () => {
    return (
        <ul className={"NavigationItem"}>
            <Link to="/">
                <NavigationItem> Burger Builder</NavigationItem>
            </Link>
            <Link to="/checkout">
                <NavigationItem>Checkout </NavigationItem>
            </Link>
        </ul>
    );
};
export default navigationsItems;