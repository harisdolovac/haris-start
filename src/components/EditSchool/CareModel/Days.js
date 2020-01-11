import React, { Component } from "react";
import { Table } from "reactstrap";

class Days extends Component {
  state = {
    days: this.props.days
  };

  getWeekDayName = i => {
    // const dayNames = {
    //   1: "Monday",
    //   2: "Tuesday",
    //   3: "Wednesday",
    //   4: "Thuresday",
    //   5: "Friday",
    //   6: "Sutrday",
    //   7: "Sunday"
    // };
    // return dayNames[i];

    switch (i) {
      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wensday";

      case 4:
        return "Thuresday";

      case 5:
        return "Friday";

      case 6:
        return "Sutrday";

      case 7:
        return "Sunday";

      default:
        return "";
    }
  };
  handleChange = (e, i) => {
    const newDays = this.state.days;
    newDays[i][e.target.name] = e.target.value;
    this.setState({
      days: newDays
    });
    this.props.handleChange(this.props.serviceIndex, "days", newDays);
  };

  render() {
    return (
      <div>
        <Table bordered style={{ borderCollapse: "collapse" }}>
          <thead style={{ width: "30%" }}>
            <tr>
              <th colSpan="5" style={{ textAlign: "center" }}>
                Care Hours -{this.props.name}
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Days</th>
              <th>From</th>
              <th>to</th>
              <th>Hours</th>
              <th>Week</th>
            </tr>
          </thead>
          <tbody>
            {this.state.days.map((day, i) => (
              <tr key={day + i}>
                <td>{this.getWeekDayName(day.week_day)}</td>

                <td>
                  <input
                    style={{ width: "60%" }}
                    type="text"
                    name="time_from"
                    value={day.time_from}
                    onChange={e => this.handleChange(e, i)}
                  />
                </td>

                <td>
                  <input
                    style={{ width: "60%" }}
                    type="text"
                    name="time_to"
                    value={day.time_to}
                    onChange={e => this.handleChange(e, i)}
                  />
                </td>
                <td>
                  <span></span>
                </td>
                {i === 0 && (
                  <td rowSpan={7}>
                    <span></span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Days;
