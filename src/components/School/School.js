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
    data: {
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
    },
    activeTab: "1",
    errors: {}
  };

  handleChange = e => {
    const name = e.target.name;

    const value = e.target.value;

    this.onDataChange(name, value);
  };
  onDataChange = (name, value) => {
    const data = this.state.data;
    data[name] = value;

    this.setState({
      data
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await newAxios.post("school/school/", this.state.data);
      this.props.history.push("/");
    } catch (error) {
      this.setState({
        errors: error.response.data
      });
    }
  };

  toggleTab = num => {
    this.setState({
      activeTab: num
    });
  };

  render() {
    // console.log("glavni state:", this.state);

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
                    style={{
                      border:
                        this.state.errors && this.state.errors.name
                          ? "1px solid #ff0000"
                          : ""
                    }}
                  />
                  <small>
                    <span style={{ color: "red" }}>
                      {this.state.errors.name}
                    </span>
                  </small>
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
                  data={this.state.data}
                  errors={this.state.errors}
                />
              </TabPane>
              <TabPane tabId="2">
                <ContractDocuments
                  data={this.state.data}
                  onDataChange={this.onDataChange}
                  errors={this.state.errors}
                />
              </TabPane>

              <TabPane tabId="3">
                <Grupe
                  data={this.state.data}
                  onDataChange={this.onDataChange}
                  errors={this.state.errors.groups}
                />
              </TabPane>

              <TabPane tabId="4">
                <CareModel
                  onDataChange={this.onDataChange}
                  data={this.state.data}
                  errors={this.state.errors.groups}
                />
              </TabPane>
            </TabContent>

            <Button color="danger" className="float-right">
              Cancel
            </Button>
            <Button
              type="submit"
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
