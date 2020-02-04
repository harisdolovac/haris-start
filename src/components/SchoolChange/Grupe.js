import React, { Component } from "react";
import { Input, Col, Row, Button, FormGroup, Label } from "reactstrap";

class Grupe extends Component {
  state = {};

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ data, errors }) {
    this.setState({ data, errors });
  }
  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
    //console.log("cdm", data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors
      });
    }
  }

  onDataChange = i => e => {
    const newValues = this.state.groups;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({ group: newValues });
    this.props.onDataChange("groups", newValues);
  };

  handleDelete = i => {
    const groups = this.state.groups;
    groups.splice(i, 1);
    this.setState({ groups: groups });
    this.props.onDataChange("groups", groups);
  };

  handleAddClick = e => {
    e.preventDefault();
    let groups = this.state.data.groups;
    groups.push({
      name: "",
      group_type: "",
      max_children: "",
      years_from: "",
      years_to: ""
    });
    const data = this.state.data;

    data["groups"] = groups;
    this.setState({ groups });

    // this.props.onDataChange("groups", groups);
  };

  render() {
    // console.log(this.state.errors, "grupe");

    return (
      <div style={{ paddingTop: "30px" }}>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label>Group Name</Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Group Type</Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Max Children</Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Years From</Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Years To</Label>
            </FormGroup>
          </Col>
        </Row>

        {this.state.data.groups.map((item, i) => (
          <Row key={i}>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  value={item.name}
                  id={item.id}
                  onChange={this.onDataChange(i)}
                  style={{
                    border:
                      this.state.errors[i] && this.state.errors[i].name
                        ? "1px solid #ff0000"
                        : ""
                  }}
                />
                <small>
                  <span className="text-danger">
                    {this.state.errors[i] && this.state.errors[i].name}
                  </span>
                </small>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="group_type"
                  value={item.group_type}
                  id={item.id}
                  onChange={this.onDataChange(i)}
                  style={{
                    border:
                      this.state.errors[i] && this.state.errors[i].group_type
                        ? "1px solid #ff0000"
                        : ""
                  }}
                />
                <small>
                  <span className="text-danger">
                    {this.state.errors[i] && this.state.errors[i].group_type}
                  </span>
                </small>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="max_children"
                  value={item.max_children}
                  id={item.id}
                  onChange={this.onDataChange(i)}
                  style={{
                    border:
                      this.state.errors[i] && this.state.errors[i].max_children
                        ? "1px solid #ff0000"
                        : ""
                  }}
                />
                <small>
                  <span className="text-danger">
                    {this.state.errors[i] && this.state.errors[i].max_children}
                  </span>
                </small>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="years_from"
                  value={item.years_from}
                  id={item.id}
                  onChange={this.onDataChange(i)}
                  style={{
                    border:
                      this.state.errors[i] && this.state.errors[i].years_from
                        ? "1px solid #ff0000"
                        : ""
                  }}
                />
                <small>
                  <span className="text-danger">
                    {this.state.errors[i] && this.state.errors[i].years_from}
                  </span>
                </small>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="years_to"
                  value={item.years_to}
                  id={item.id}
                  onChange={this.onDataChange(i)}
                  style={{
                    border:
                      this.state.errors[i] && this.state.errors[i].years_to
                        ? "1px solid #ff0000"
                        : ""
                  }}
                />
                <small>
                  <span className="text-danger">
                    {this.state.errors[i] && this.state.errors[i].years_to}
                  </span>
                </small>
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

        <Row>
          <Col>
            <FormGroup>
              <Button
                outline
                color="primary"
                size="sm"
                onClick={this.handleAddClick}
              >
                <i className="fas fa-plus "> Add more grant fields</i>
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Grupe;
