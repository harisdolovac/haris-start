import React, { Component } from "react";

import { Col, Row, FormGroup, Label, Input, Button } from "reactstrap";

class ContactData extends Component {
  state = {};

  componentWillReceiveProps({ data, errors }) {
    this.setState({ data, errors });
    //   console.log("cdm1", data);
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
    //console.log("cdm", data);
  }

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
    this.props.onDataChange(e.target.name, e.target.value);
  };

  onExtraAdd = e => {
    e.preventDefault();
    const extra = this.state.data.extra;
    extra.push({ email: "", function: "", name: "", phone: "" });
    const data = this.state.data;

    data["extra"] = extra;
    this.setState({ data });
  };

  handleDelete = i => {
    const extra = this.state.data.extra;
    const data = this.state.data;
    extra.splice(i, 1);
    data["extra"] = extra;
    this.setState({ data });
  };

  onDataChange = i => e => {
    const newValues = this.state.data.extra;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;
    const data = this.state.data;

    data["extra"] = newValues;

    this.setState({ data });
    this.props.onDataChange("extra", newValues);
  };

  render() {
    console.log("state", this.state);

    return (
      <div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Address</Label>
              <Input
                type="text"
                name="address"
                onChange={this.handleChange}
                value={this.state.data.address}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                type="text"
                name="city"
                id="exampleCity"
                onChange={this.handleChange}
                value={this.state.data.city}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleCode">Postal code</Label>
              <Input
                type="number"
                name="postal_code"
                id="exampleCode"
                onChange={this.handleChange}
                value={this.state.data.number}
                style={{
                  border:
                    this.state.errors && this.state.errors.postal_code
                      ? "1px solid #ff0000"
                      : ""
                }}
              />
              <small>
                <span className="text-danger">
                  {this.state.errors && this.state.errors.postal_code}
                </span>
              </small>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePhoneNumber">Telefon 1</Label>
              <Input
                type="number"
                name="phone_number1"
                id="examplePhoneNumber"
                onChange={this.handleChange}
                value={this.state.data.phone_number1}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePhoneNumber2">Telefon 2</Label>
              <Input
                type="number"
                name="phone_number2"
                id="examplePhoneNumber2"
                onChange={this.handleChange}
                value={this.state.data.phone_number2}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                onChange={this.handleChange}
                value={this.state.data.email}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleFaxNumber">Fax</Label>
              <Input
                type="number"
                name="fax_number"
                id="exampleFaxNumber"
                onChange={this.handleChange}
                value={this.state.data.fax_number}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleMobileNumber">Mobile</Label>
              <Input
                type="number"
                name="mobile_number"
                id="exampleMobileNumber"
                onChange={this.handleChange}
                value={this.state.data.mobile_number}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleWebsite">Home Page</Label>
              <Input
                type="text"
                name="website"
                id="exampleWebsite"
                onChange={this.handleChange}
                value={this.state.data.website}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmergencyNumber">Emergency Number 1</Label>
              <Input
                type="number"
                name="emergency_number"
                id="exampleEmergencyNumber"
                onChange={this.handleChange}
                value={this.state.data.emergency_number}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmergencyNumber2">Emergency Number 2</Label>
              <Input
                type="number"
                name="poison_emergency_number"
                id="exampleEmergencyNumber2"
                onChange={this.handleChange}
                value={this.state.data.poison_emergency_number}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Function</Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Name</Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Email</Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Telefon</Label>
            </FormGroup>
          </Col>

          {this.state.data.extra.map((item, i) => (
            <Row key={i}>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="email"
                    onChange={this.onDataChange(i)}
                    value={item.email}
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="function"
                    onChange={this.onDataChange(i)}
                    value={item.function}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.onDataChange(i)}
                    value={item.name}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="number"
                    name="phone"
                    onChange={this.onDataChange(i)}
                    value={item.phone}
                  />
                </FormGroup>
              </Col>

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
            </Row>
          ))}
          <Button outline color="primary" size="sm" onClick={this.onExtraAdd}>
            <i className="fas fa-plus "> Add more extra fields</i>
          </Button>
        </Row>
      </div>
    );
  }
}

export default ContactData;
