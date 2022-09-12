import React from 'react';
import { Buttons } from './Buttons';
import { Stats } from './Stats';
import './Counter.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = () => {
    this.setState(s => ({
      good: s.good + 1,
    }))
  }

  render() {
    return <div>
      <h1>Please leave your feedback</h1>
      <Buttons handler={this.handleFeedback} />
      <h2>Statistics</h2>
      <Stats good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
  }
}

export default Counter