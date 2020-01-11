import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import School from "./components/School/School";
import EditSchool from "./components/EditSchool/EditSchool";

import "./App.css";

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" exact component={Login} />
        <Route path="/school" exact component={School} />
        <Route path="/editSchool/:id" exact component={EditSchool} />
      </Switch>
    </Router>
  );
}

export default App;
