import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Checkout from "./Components/Checkout/Checkout";
import Order from "./Components/Order/Order";
import { Route, Switch } from "react-router-dom";
import Grid from "./Components/Grid/Grid";
import Joinus from "./Components/JoinUs/Joinus";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/order" component={Order} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/join-us" component={Joinus} />
                    <Route path="/" component={Grid} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
