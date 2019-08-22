import React, { Component } from 'react';
import { generateEventTimes } from '../services/schedulingService';

class Scheduler extends Component {
  render() {
    let times = generateEventTimes();
    return (
      <div>
        
      </div>
    );
  }
}

export default Scheduler;