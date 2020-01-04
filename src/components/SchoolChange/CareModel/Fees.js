import React, { Component } from "react";
import {
  Table,
  Button,
  Form,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Test extends Component {
  state = { monthly_fees: this.props.monthly_fees };

  handleChange = (e, i) => {
    const newValues = this.state.monthly_fees;
    newValues[i][e.target.name] = e.target.value;
    this.setState({
      monthly_fees: newValues
    });

    //this.props.handleNameChange(e.target.name, e.target.value);
  };

  handleAddClick = e => {
    e.preventDefault();
    this.setState({
      monthly_fees: [
        ...this.state.monthly_fees,
        {
          account: "",
          price: ""
        }
      ]
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.value);
  };

  handleDelete = i => {
    let deleteArray = this.state.monthly_fees.filter((item, j) => j !== i);

    this.setState({
      monthly_fees: deleteArray
    });
  };

  render() {
    console.log("od fijeva jeL", this.state);

    return (
      <Row>
        <Form onSubmit={this.handleSubmit}>
          <Table bordered style={{ width: "100%" }}>
            <thead>
              <tr>
                <th
                  colSpan="4"
                  style={{ textAlign: "center", backgroundColor: "#eefdfd" }}
                >
                  monatliche Leistungsarten und Grundgebühren -{this.props.name}
                </th>
              </tr>
              <tr style={{ backgroundColor: "#eefdfd" }}>
                <th>Account designation*</th>
                <th>Account number</th>
                <th>Fee</th>
                <th></th>
              </tr>
            </thead>
            {this.state.monthly_fees.map((month, i) => (
              <tbody key={month + i}>
                <tr>
                  <td>
                    <Input
                      type="select"
                      onChange={e => this.handleChange(i)}
                      name="name"
                    >
                      <option disabled style={{ fontSize: "13px" }}>
                        Childcare Fees
                      </option>
                      <option>Choose</option>
                      <option value="6501">U3</option>
                      <option value="6502">KiGa</option>
                      <option value="6503">Hort</option>
                      <option value="6504">Nursery</option>
                      <option disabled style={{ fontSize: "13px" }}>
                        Food and hygiene
                      </option>
                      <option value="6530">U3</option>
                      <option value="6531">KiGa</option>
                      <option value="6532">Hort</option>
                    </Input>
                  </td>
                  <td>
                    <span>{month.name}</span>
                  </td>
                  <td>
                    <InputGroup>
                      <Input
                        onChange={e => this.handleChange(i)}
                        placeholder="Amount"
                        min={0}
                        max={100}
                        type="number"
                        step="1"
                        name="price"
                      />
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td>
                    <Col md={0.5}>
                      <i
                        onClick={e => this.handleDelete(i)}
                        className="far fa-times-circle fa-lg "
                        style={{
                          color: "red",
                          verticalAlign: "middle"
                        }}
                      ></i>
                    </Col>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Form>
        <Button outline color="primary" size="sm" onClick={this.handleAddClick}>
          <i className="fas fa-plus "> Add more grant fields</i>
        </Button>
      </Row>
    );
  }
}

export default Test;
