import React, { Component } from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

class ContractDocuments extends Component {
  state = {
    school_type: "",
    identification_number: "",
    max_children: "",
    weekly_working_hours: "",
    grants: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.onDataChange(e.target.name, e.target.value);
  };

  onDataChange = i => e => {
    const newValues = this.state.grants;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({ grants: newValues });
    this.props.onDataChange("grants", newValues);
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      grants: [
        ...this.state.grants,
        { name: "", contractor: "", date: "", document: null }
      ]
    });
  };

  handleDelete = i => {
    const grants = this.state.grants;
    grants.splice(i, 1);
    this.setState({ grants: grants });
  };

  render() {
    console.log("props state:", this.state);

    return (
      <div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="school_type">Type of Institution</Label>
              <Input
                type="text"
                name="school_type"
                onChange={this.handleChange}
                value={this.state.school_type}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="weekly_working_hours">Weekly Working Hours</Label>
              <Input
                type="text"
                name="weekly_working_hours"
                onChange={this.handleChange}
                value={this.state.weekly_working_hours}
                style={{
                  border:
                    this.state.errors && this.state.errors.weekly_working_hours
                      ? "1px solid #ff0000"
                      : ""
                }}
              />
              <small>
                <span className="text-danger">
                  {this.state.errors && this.state.errors.weekly_working_hours}
                </span>
              </small>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="identification_number">
                Identification number according to st sheet
              </Label>
              <Input
                name="identification_number"
                onChange={this.handleChange}
                value={this.state.identification_number}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="max_children">Max Children</Label>
              <Input
                name="max_children"
                onChange={this.handleChange}
                value={this.state.max_children}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Name</Label>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Contractor</Label>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Date</Label>
            </FormGroup>
          </Col>

          {this.state.grants.map((grant, i) => (
            <Row form key={i}>
              <Col md={4}>
                <FormGroup>
                  <Input
                    name="name"
                    onChange={this.onDataChange(i)}
                    value={grant.name}
                  />
                  {/* <small>
                    <span className="text-danger">
                      {this.state.errors[i] && this.state.errors[i].name}
                    </span>
                  </small> */}
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    name="contractor"
                    onChange={this.onDataChange(i)}
                    value={grant.contractor}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    type="date"
                    name="date"
                    placeholder="date placeholder"
                    onChange={this.onDataChange(i)}
                    value={grant.date}
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
          ))}
        </Row>
        <Button outline color="primary" size="sm" onClick={this.handleClick}>
          <i className="fas fa-plus "> Add more grant fields</i>
        </Button>
      </div>
    );
  }
}

export default ContractDocuments;
