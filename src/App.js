import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Restaurant from "./Containers/Restaurant/Restaurant";
class App extends Component {
    render() {
        return (
            <Layout>
                <Restaurant />
            </Layout>
        );
    }
}

export default App;
