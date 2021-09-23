import React, { Component } from "react";
import SingleOrder from "./SingleOrder/SingleOrder";
import axios from "axios";

class Order extends Component {
    state = {
        orders: [],
        loading: true,
        error: false
    };
    componentDidMount() {
        axios
            .get("./orders.json")
            .then((response) => {
                const fetchFoods = [];
                for (let key in response.data) {
                    fetchFoods.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchFoods });
            })
            .catch((err) => {
                this.setState({ loading: false });
                alert(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => (
                    <SingleOrder
                        key={order.id}
                        foods={order.foods}
                        price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default Order;
