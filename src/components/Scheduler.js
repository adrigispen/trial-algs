import React, { Component } from "react";
import { requestToBook } from "../services/schedulingService";

class Scheduler extends Component {
  render() {
    let b = requestToBook();
    console.log(b);
    return <div />;
  }
}

export default Scheduler;
