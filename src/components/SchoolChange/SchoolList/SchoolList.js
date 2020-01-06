import React, { Component } from "react";
import { newAxios } from "../../Axios/NewAxios";

class SchoolList extends Component {
  componentDidMount() {
    newAxios.get("account/user/schools/").then(res => {
      console.log(res);
    });
  }
  render() {
    return <div></div>;
  }
}

export default SchoolList;
