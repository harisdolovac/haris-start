import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import { newAxios } from "../Axios/NewAxios";
import "./SchoolList.css";

class CardSkole extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    newAxios.get("school/school/").then(res => {
      //  console.log("axiso data:", res);

      this.setState({
        results: res.data.results
      });
    });
  }

  render() {
    //  console.log("sad sto radim", this.state);

    return (
      <div>
        <h1>Broj Skola - {this.state.results.length} </h1>

        <Row>
          {this.state.results.map((school, i) => (
            <Col sm="3" key={i}>
              <CardHeader className="CardHeader">{school.name}</CardHeader>
              <Card body className="cardBody">
                <CardTitle>City:{school.city}</CardTitle>
                <CardText>Some textt</CardText>
                <p>max_children:{school.max_children}</p>
                <p>{school.created_at}</p>
                <div>
                  <Button>Go somewhere</Button>
                  <span className="fa-border-icon">
                    <i className="fas fa-edit  fa-lg"></i>
                  </span>
                </div>
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
