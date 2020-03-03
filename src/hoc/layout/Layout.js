import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends Component {
    state ={
        showSideDrawer: true
    }
    sideDrawerClosedHanndler =() =>{
        this.setState({showSideDrawer: false})
    }
    render() {
        return (
            <Aux>
                {/* <div>Toolbar,sidebar, backdrawer</div> */}
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHanndler} />
                <main className={"Content"}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
