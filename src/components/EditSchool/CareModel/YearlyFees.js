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

class YearlyFees extends Component {
  state = { yearly_fees: this.props.yearly_fees };

  handleChange = (e, i) => {
    const newValues = this.state.yearly_fees;
    newValues[i][e.target.name] = e.target.value;
    this.setState({
      yearly_fees: newValues
    });

    this.props.handleChange(this.props.serviceIndex, "yearly_fees", newValues);
  };

  handleAddClick = e => {
    e.preventDefault();
    this.setState({
      yearly_fees: [
        ...this.state.yearly_fees,
        {
          account: "",
          price: ""
        }
      ]
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    //console.log(this.state.value);
  };

  handleDelete = i => {
    let deleteArray = this.state.yearly_fees.filter((item, j) => j !== i);

    this.setState({
      yearly_fees: deleteArray
    });
  };

  render() {
    //console.log("od fijeva jeL", this.state);

    return (
      <Row>
        <div onSubmit={this.handleSubmit}>
          <Table bordered style={{ width: "100%" }}>
            <thead>
              <tr>
                <th
                  colSpan="4"
                  style={{ textAlign: "center", backgroundColor: "#eefdfd" }}
                >
                  Other services and fees -{this.props.name}
                </th>
              </tr>
              <tr style={{ backgroundColor: "#eefdfd" }}>
                <th>Account designation*</th>
                <th>Account number</th>
                <th>Fee</th>
                <th></th>
              </tr>
            </thead>
            {this.state.yearly_fees.map((month, i) => (
              <tbody key={month + i}>
                <tr>
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

export default YearlyFees;
