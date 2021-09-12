import React, { Component } from "react";
import Auxi from "../../Hoc/Auxi";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggle = () => {
        this.setState((p) => {
            return { showSideDrawer: !p.SideDrawer };
        });
    };

    render() {
        return (
            <Auxi>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.SideDrawerClosedHandler}
                />
                <Toolbar drawToggle={this.sideDrawerToggle} />
                <main className={classes.main}>{this.props.children}</main>
            </Auxi>
        );
    }
}

export default Layout;
