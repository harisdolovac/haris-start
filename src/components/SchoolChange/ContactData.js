import React, { Component } from "react";

import { Col, Row, FormGroup, Label, Input, Button } from "reactstrap";

class ContactData extends Component {
  state = {
    address: "",
    city: "",
    postal_code: null,
    phone_number1: "",
    phone_number2: "",
    email: "",
    fax_number: "",
    mobile_number: "",
    emergency_number: "",
    website: "",
    extra: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.onDataChange(e.target.name, e.target.value);
  };

  onExtraAdd = e => {
    e.preventDefault();
    this.setState({
      extra: [
        ...this.state.extra,
        { email: "", function: "", name: "", phone: "" }
      ]
    });
  };

  handleDelete = i => {
    const extra = this.state.extra;
    extra.splice(i, 1);
    this.setState({ extra: extra });
  };

  handleNameChange = i => e => {
    const newValues = this.state.extra;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({ extra: newValues });
    this.props.handleNameChange("extra", newValues);
  };

  render() {
    //console.log(this.state);

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
                value={this.state.address}
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
                value={this.state.city}
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
                value={this.state.number}
              />
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
                value={this.state.phone_number1}
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
                value={this.state.phone_number2}
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
                value={this.state.email}
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
                value={this.state.fax_number}
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
                value={this.state.mobile_number}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleWebsite">Home Page</Label>
              <Input
                type="number"
                name="website"
                id="exampleWebsite"
                onChange={this.handleChange}
                value={this.state.website}
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
                value={this.state.emergency_number}
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
                value={this.state.poison_emergency_number}
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

          {this.state.extra.map((item, i) => (
            <Row key={i}>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="email"
                    onChange={this.handleNameChange(i)}
                    value={item.email}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="function"
                    onChange={this.handleNameChange(i)}
                    value={item.function}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleNameChange(i)}
                    value={item.name}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup key={i}>
                  <Input
                    type="number"
                    name="phone"
                    onChange={this.handleNameChange(i)}
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
