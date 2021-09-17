import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL =
    "https://foodvintage-b1e94-default-rtdb.firebaseio.com";

axios.interceptors.request.use(
    (reqConfig) => {
        console.log(reqConfig);

        return reqConfig;
    },
    (error) => {
        console.log("Check your Internet Connection!");
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(response);

        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
