import React, { Component } from 'react';
import PropTypes from "prop-types";

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './Stats/Stats';
import { Notification } from './Notification/Notification';

export default class Counter extends Component {
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
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(result.toFixed(0));
  }

  handleFeedback = (vote) => {
    this.setState(prev => ({
      [vote]: prev[vote] + 1
    }))
  }

  render() {
    const { good, neutral, bad, } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} handler={this.handleFeedback} />
      </Section>
      <Section title="Statistics">
        {!total ?
        <Notification message="There is no feedback :(" /> :
        <Stats
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercent={positivePercent} />}
      </Section>
    </>
  }
}

Counter.propTypes = {
  state: PropTypes.objectOf(PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })),
  total: PropTypes.number,
  positivePercent: PropTypes.number,
}