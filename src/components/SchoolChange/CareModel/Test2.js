import React from "react";
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

const Test2 = ({
  name,
  services,
  handleDelete,
  handleNameChange,
  handleAddClick
}) => {
  return (
    <div>
      <Row form xs="8">
        <Table bordered style={{ width: "100%" }}>
          <thead>
            <tr>
              <th
                colSpan="4"
                style={{ textAlign: "center", backgroundColor: "#eefdfd" }}
              >
                monthly types of benefits and basic fees-
                <p>{name}</p>
              </th>
            </tr>
            <tr style={{ backgroundColor: "#eefdfd" }}>
              <th>Account designation*</th>
              <th>Account number</th>
              <th>Fee</th>
              <th></th>
            </tr>
          </thead>
          {services.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td>
                  <Input
                    type="select"
                    value={item.value}
                    onChange={handleNameChange}
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
                  <span>{value}</span>
                </td>

                <td>
                  <InputGroup>
                    <Input
                      onChange={handleNameChange}
                      placeholder="Amount"
                      min={0}
                      max={100}
                      type="number"
                      step="1"
                      name="fee"
                    />
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  </InputGroup>
                </td>
                <td>
                  <Col md={0.5}>
                    <i
                      onClick={() => handleDelete(i)}
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
      </Row>
      <Button outline color="primary" size="sm" onClick={handleAddClick}>
        <i className="fas fa-plus "> Add more grant fields</i>
      </Button>
    </div>
  );
};

export default Test2;
