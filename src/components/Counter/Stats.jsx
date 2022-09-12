import React from "react";
import css from './Stats.module.css';

export const Stats = ({good, neutral, bad}) => {
    return <ul className={css.stats}>
        <li className="">Good: {good}</li>
        <li className="">Neutral: {neutral}</li>
        <li className="">Bad: {bad}</li>
    </ul>
}