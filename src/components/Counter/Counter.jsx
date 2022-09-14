import React, {Component} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './Stats/Stats';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad, } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
        return 0;
    }
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  }

  handleFeedback = (vote) => {
    this.setState(prev => ({
      [vote]: prev[vote] + 1
    }))
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions handler={this.handleFeedback} />
      </Section>
      <Section title="Statistics">
        {!total ?
        <Notification message="There is no feedback :(" /> :
        <Stats
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        positivePercent={positivePercent} />}
      </Section>
    </div>
  }
}

export default Counter

