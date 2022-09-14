import React from "react";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({handler}) => {
    return <div className={css.buttonWrapper}>
        <button className={css.button} type='button' onClick={() => handler("good")}>Good</button>
        <button className={css.button} type='button' onClick={() => handler("neutral")}>Neutral</button>
        <button className={css.button} type='button' onClick={() => handler("bad")}>Bad</button>
    </div>
}