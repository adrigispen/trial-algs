import React, { Component } from "react";
import { requestToBook } from "../services/schedulingService";

class Scheduler extends Component {
  render() {
    let b = requestToBook();
    return <div>

    </div>;
  }
}

export default Scheduler;
