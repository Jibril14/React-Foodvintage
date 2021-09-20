import React, { Component } from "react";
import SingleOrder from "./SingleOrder/SingleOrder";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";

class Order extends Component {
    state = {
        orders: [],
        loading: true
    };
    componentDidMount() {
        axios
            .get("./orders.json")
            .then((res) => {
                const fetchFoods = [];
                for (let key in res.data) {
                    fetchFoods.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log("FetchFood", fetchFoods);
                this.setState({ loading: false, orders: fetchFoods });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }
    render() {
        console.log("this.state.order", this.state.orders);
        let singleOrder = <Spinner />;
        if (this.state.orders === []) {
            singleOrder = <SingleOrder />;
        }

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
