import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Restaurant from "./Containers/Restaurant/Restaurant";
import Checkout from "./Components/Checkout/Checkout";
import Order from "./Components/Order/Order";
import { Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Layout>
                <Route path="/order" component={Order} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={Restaurant} />
            </Layout>
        );
    }
}

export default App;
