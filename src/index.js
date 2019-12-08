import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { setAuthToken } from "./components/Axios/NewAxios";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

ReactDOM.render(<App />, document.getElementById("root"));
