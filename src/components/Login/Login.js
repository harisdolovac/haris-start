import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { newAxios, setAuthToken } from "../Axios/NewAxios";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  login = e => {
    e.preventDefault();

    newAxios.post("account/login/", this.state).then(res => {
      const user = JSON.stringify(res.data.user);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", user);
      setAuthToken(res.data.token);

      console.log(res);
      if (this.login) {
        this.props.history.push("/");
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Col md={{ size: 10, offset: 1 }} sm={{ size: 4, offset: 4 }}>
          <Form onSubmit={this.login}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={this.handleChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={this.handleChange}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password "
                required
              />
              <Button className="float-left mt-3" color="primary" type="submit">
                Login
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Login;
