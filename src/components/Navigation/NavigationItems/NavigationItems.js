import React from "react";
import "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationsItems =() =>{
    return(
        <ul className={"NavigationItem"}>
            <NavigationItem link="/" active > Burger Builder</NavigationItem>
            <NavigationItem link="/" > Checkout </NavigationItem>
        </ul>
    )
}
export default navigationsItems;