import React, { Component } from "react";

import { Col, Row, FormGroup, Label, Input } from "reactstrap";

class ContactData extends Component {
  state = {
    address: "",
    city: "",
    postal_code: null
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.onContactChange(e.target.value);
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                onChange={this.handlechange}
                value={this.state.address}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">City</Label>
              <Input
                type="text"
                name="city"
                onChange={this.handlechange}
                value={this.state.city}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Postal code</Label>
              <Input
                type="number"
                name="postal_code"
                onChange={this.handleChange}
                value={this.state.value}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactData;
