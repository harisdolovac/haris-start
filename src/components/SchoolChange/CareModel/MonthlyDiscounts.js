import React, { Component } from "react";
import {
  Table,
  Button,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

class Monthly extends Component {
  state = { monthly_discounts: this.props.monthly_discounts };

  handleChange = (e, i) => {
    const newValues = this.state.monthly_discounts;
    newValues[i][e.target.name] = e.target.value;
    this.setState({
      monthly_discounts: newValues
    });

    this.props.handleChange(
      this.props.serviceIndex,
      "monthly_discounts",
      newValues
    );
  };

  handleAddClick = e => {
    e.preventDefault();
    this.setState({
      monthly_discounts: [
        ...this.state.monthly_discounts,
        {
          account: "",
          price: ""
        }
      ]
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state.value);
  };

  handleDelete = i => {
    let deleteArray = this.state.monthly_discounts.filter((item, j) => j !== i);

    this.setState({
      monthly_discounts: deleteArray
    });
  };

  render() {
    //  console.log("od monthly diskaunts", this.state);

    return (
      <Row>
        <div onSubmit={this.handleSubmit}>
          <Table bordered style={{ width: "100%" }}>
            <thead>
              <tr>
                <th
                  colSpan="5"
                  style={{ textAlign: "center", backgroundColor: "#eefdfd" }}
                >
                  monthly discounts and allowances for parental contributions-
                  {this.props.name}
                </th>
              </tr>
              <tr style={{ backgroundColor: "#eefdfd" }}>
                <th>Take over by*</th>
                <th>Account designation*</th>
                <th>Account number</th>
                <th>Fee</th>
                <th></th>
              </tr>
            </thead>
            {this.state.monthly_discounts.map((month, i) => (
              <tbody key={month + i}>
                <tr>
                  <td>
                    <Input
                      name="provider"
                      type="text"
                      onChange={e => {
                        this.handleChange(e, i);
                      }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="select"
                      onChange={e => this.handleChange(e, i)}
                      name="account"
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
                        onChange={e => this.handleChange(e, i)}
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
        </div>
        <Button outline color="primary" size="sm" onClick={this.handleAddClick}>
          <i className="fas fa-plus "> Add more grant fields</i>
        </Button>
      </Row>
    );
  }
}

export default Monthly;
