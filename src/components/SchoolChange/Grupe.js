import React, { Component } from "react";
import { Input, Col, Row, Button, FormGroup, Label } from "reactstrap";

class Grupe extends Component {
  state = {
    group: []
  };

  handleClick = e => {
    this.setState({
      group: [
        ...this.state.group,
        {
          name: "",
          group_type: "",
          max_children: null,
          years_from: null,
          years_to: null
        }
      ]
    });
  };

  handleNameChange = i => e => {
    const newValues = this.state.group;
    //console.log(newValues);
    newValues[i][e.target.name] = e.target.value;

    this.setState({ group: newValues });
    this.props.handleNameChange("group", newValues);
  };

  handleDelete = i => {
    const group = this.state.group;
    group.splice(i, 1);
    this.setState({ group: group });
  };

  render() {
    // console.log(this.state);

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

        {this.state.group.map((item, i) => (
          <Row key={i}>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  value={item.name}
                  id={item.id}
                  onChange={this.handleNameChange(i)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="group_type"
                  value={item.group_type}
                  id={item.id}
                  onChange={this.handleNameChange(i)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="max_children"
                  value={item.max_children}
                  id={item.id}
                  onChange={this.handleNameChange(i)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="years_from"
                  value={item.years_from}
                  id={item.id}
                  onChange={this.handleNameChange(i)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Input
                  type="number"
                  name="years_to"
                  value={item.years_to}
                  id={item.id}
                  onChange={this.handleNameChange(i)}
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

        <Row>
          <Col>
            <FormGroup>
              <Button
                outline
                color="primary"
                size="sm"
                onClick={this.handleClick}
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
