import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import "./App.css";
import Header from "./components/Header/Header";
import School from "./components/School/School";

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path="/" exact component={Home}></Route>

        <Route path="/login" exact component={Login}></Route>
        <Route path="/school" exact component={School} />
      </Switch>
    </Router>
  );
}

export default App;
