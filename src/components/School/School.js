import React, { Component } from "react";
import { newAxios } from "../Axios/NewAxios";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardText,
  CardTitle
} from "reactstrap";
import classnames from "classnames";

import ContactData from "../SchoolChange/ContactData";

class School extends Component {
  state = {
    activeTab: "1",

    name: "",
    school_number: "",

    phone_number1: "",
    phone_number2: "",
    email: "",
    fax_number: "",
    mobile_number: "",
    emergency_number: "",
    address: "",
    city: "",
    postal_code: null,
    grants: [],
    groups: [],
    services: []
  };

  handleChange = (e, value) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onContactChange = (e, value) => {
    this.setState({
      city: value,
      address: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    newAxios
      .post("school/school/", this.state)
      .then(this.props.history.push("/"));
  };

  toggleTab = num => {
    this.setState({
      activeTab: num
    });
  };

  render() {
    console.log(this.state);

    return (
      <Jumbotron>
        <h1>khdfgdskufdsgkuf</h1>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="examplename"
                    placeholder="Enter name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleschool_number">School number</Label>
                  <Input
                    type="text"
                    name="school_number"
                    id="exampleschool_number"
                    placeholder="Enter school_number"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                >
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                >
                  Moar Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ContactData
                  onContactChange={this.onContactChange}

                  //value={this.state.name}
                  //name={this.state.name}
                />
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <Button color="danger" className="float-right">
              Cancel
            </Button>
            <Button
              onClick={this.handleClick}
              color="primary"
              className="float-right"
              style={{ marginRight: "10px" }}
            >
              Create a School
            </Button>
          </Form>
        </div>
      </Jumbotron>
    );
  }
}

export default School;
