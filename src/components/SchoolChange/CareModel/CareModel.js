import React, { Component } from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";
import YearlyFees from "./YearlyFees";
import MonthlyFees from "./MonthlyFees";
import MonthlyDiscounts from "./MonthlyDiscounts";
import Days from "./Days";

class CareModel extends Component {
  state = {
    services: []
  };

  componentWillReceiveProps({ data, errors }) {
    this.setState({ data, errors });
    //   console.log("cdm1", data);
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
    //console.log("cdm", data);
  }

  handleAddClick = e => {
    e.preventDefault();
    console.log("i was clicked");

    const services = this.state.data.services;
    services.push({
      days: [
        { week_day: 1, time_from: "00:00", time_to: "00:00" },
        { week_day: 2, time_from: "00:00", time_to: "00:00" },
        { week_day: 3, time_from: "00:00", time_to: "00:00" },
        { week_day: 4, time_from: "00:00", time_to: "00:00" },
        { week_day: 5, time_from: "00:00", time_to: "00:00" },
        { week_day: 6, time_from: "00:00", time_to: "00:00" },
        { week_day: 7, time_from: "00:00", time_to: "00:00" }
      ],
      monthly_fees: [{ account: "", price: "" }],
      yearly_fees: [{ account: "", price: "" }],
      monthly_discounts: [{ account: "", price: "" }]
    });
    const data = this.state.data;

    data["services"] = services;
    this.setState({ services });
  };
  //ovo nista ne puni mora da se napravi glavni state

  handleDelete = i => {
    const services = this.state.services;
    services.splice(i, 1);
    this.setState({ services: services });
  };

  // handleDelete = i => {
  //   const data = this.state.services.filter(item => i.id !== i.id);
  //   this.setState({ services: data });
  // };

  onDataChange = i => e => {
    const newValues = this.state.services;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({ services: newValues });
    this.props.onDataChange("services", newValues);
  };

  handleTimeChange = i => e => {
    const newValues = this.state.services;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({
      days: [
        ...this.state.services,
        {
          [e.target.name]: newValues
        }
      ]
    });
    this.props.handleTimeChange("services", newValues);
  };

  // onDataChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  //   this.props.onDataChange(e.target.name, e.target.value);
  // };

  handleChange = (i, name, value) => {
    const newValues = this.state.services;
    newValues[i][name] = value;
    this.setState({
      services: newValues
    });
    this.props.onDataChange("services", newValues);
  };

  render() {
    console.log("ovaj state je:,", this.state);

    return (
      <div>
        {(this.state.services || []).map((service, i) => (
          <div key={i}>
            <Row>
              <Col md={11}>
                <FormGroup>
                  <Input
                    onChange={this.onDataChange(i)}
                    type="text"
                    name="name"
                    style={{ textAlign: "center" }}
                    value={service.name}
                  />
                </FormGroup>
              </Col>
              <FormGroup>
                <Col md={1}>
                  <i
                    onClick={() => this.handleDelete(i)}
                    className="far fa-times-circle fa-lg "
                    style={{
                      color: "red",
                      verticalAlign: "middle"
                    }}
                  ></i>
                </Col>
              </FormGroup>
            </Row>
            <Row>
              <Col md={6.2}>
                <Days
                  days={service.days}
                  serviceIndex={i}
                  handleChange={this.handleChange}
                  name={service.name}
                />
              </Col>
              <Col md={6}>
                <MonthlyFees
                  handleChange={this.handleChange}
                  monthly_fees={service.monthly_fees}
                  name={service.name}
                  serviceIndex={i}
                  services={this.state.services}
                />
              </Col>
              <Col md={6}>
                <YearlyFees
                  handleChange={this.handleChange}
                  yearly_fees={service.yearly_fees}
                  name={service.name}
                  serviceIndex={i}
                  services={this.state.services}
                />
              </Col>
              <Col md={8}>
                <MonthlyDiscounts
                  handleChange={this.handleChange}
                  monthly_discounts={service.monthly_discounts}
                  name={service.name}
                  serviceIndex={i}
                  services={this.state.services}
                />
              </Col>
            </Row>
          </div>
        ))}

        <Button outline color="primary" size="sm" onClick={this.handleAddClick}>
          <i className="fas fa-plus "> Dodaj celu listu</i>
        </Button>
      </div>
    );
  }
}
// vidi one care modele kako se veze

export default CareModel;
