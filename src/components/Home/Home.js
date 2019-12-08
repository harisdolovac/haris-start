import React from "react";

import "./Home.css";
import CardSkole from "../SchoolList/SchoolList";
import { Jumbotron } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <CardSkole />
      </Jumbotron>
    </div>
  );
};

export default Home;
