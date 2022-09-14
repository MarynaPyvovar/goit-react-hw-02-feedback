import React from "react";
import css from './Stats.module.css';

export const Stats = ({good, neutral, bad, total, positivePercent}) => {
    return <ul className={css.stats}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercent} %</li>
    </ul>
}