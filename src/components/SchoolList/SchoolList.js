import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { newAxios } from "../Axios/NewAxios";
import "./SchoolList.css";

class CardSkole extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    newAxios.get("school/school/").then(res => {
      console.log(res);

      this.setState({
        results: res.data.results
      });
    });
  }

  render() {
    //console.log(this.state);

    return (
      <div>
        <h1>Broj Skola - </h1>

        <Row>
          {this.state.results.map((school, i) => (
            <Col sm="3" key={i}>
              <Card body>
                <h1>Ime Skole : {school.name}</h1>
                <CardTitle>City:{school.city}</CardTitle>
                <CardText>Some textt</CardText>
                <p>max_children:{school.max_children}</p>
                <p>{school.created_at}</p>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          ))}

          <Col sm="3">
            <Link to="/school">
              <Card body className="text-center">
                <div className="cardIcon">
                  <i className="fa fa-plus fa-10x"></i>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardSkole;
