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
  TabPane
} from "reactstrap";
import classnames from "classnames";

import ContactData from "../SchoolChange/ContactData";
import ContractDocuments from "../SchoolChange/ContractDocuments";
import Grupe from "../SchoolChange/Grupe";
import CareModel from "../SchoolChange/CareModel/CareModel";

class School extends Component {
  state = {
    activeTab: "4",

    name: "",
    school_number: "",
    website: "",
    phone_number1: "",
    phone_number2: "",
    email: "",
    fax_number: "",
    mobile_number: "",
    address: "",
    city: "",
    postal_code: null,
    emergency_number: "",
    poison_emergency_number: "",
    school_type: "",
    identification_number: "",
    max_children: "",
    grants: [],
    groups: [],
    services: [],
    extra: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onDataChange = (name, value) => {
    this.setState({
      [name]: value
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

  handleNameChange = (name, newValues) => {
    this.setState({
      [name]: newValues
    });
    //console.log(newValues);
  };

  handleTimeChange = (name, newValues) => {
    this.setState({
      [name]: newValues
    });
    //console.log(newValues);
  };

  render() {
    console.log(this.state);

    return (
      <Jumbotron>
        <div
          style={{
            backgroundColor: "white",
            padding: "30px 20px 70px 20px ",
            WebkitBoxShadow: "0 0 10px #999"
          }}
          className="col-lg-9 col-md-10 col-sm-12 col-xs-12 offset-lg-2 offset-2 float-lg-center"
        >
          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplename">Name</Label>
                  <Input
                    type="text"
                    name="name"
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
                    placeholder="Enter school_number"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Nav tabs style={{ cursor: "pointer" }}>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                >
                  Contact Data
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
                  Contract Documents
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggleTab("3");
                  }}
                >
                  Groups
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggleTab("4");
                  }}
                >
                  Care Model
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ContactData
                  onDataChange={this.onDataChange}
                  handleNameChange={this.handleNameChange}
                />
              </TabPane>
              <TabPane tabId="2">
                <ContractDocuments
                  onDataChange={this.onDataChange}
                  handleNameChange={this.handleNameChange}
                />
              </TabPane>

              <TabPane tabId="3">
                <Grupe
                  onDataChange={this.onDataChange}
                  handleNameChange={this.handleNameChange}
                />
              </TabPane>

              <TabPane tabId="4">
                <CareModel
                  onDataChange={this.onDataChange}
                  handleNameChange={this.handleNameChange}
                  handleTimeChange={this.handleTimeChange}
                />
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
