import React from "react";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handler }) => {
    return <div className={css.buttonWrapper}>
        {options.map(option => {
            const text = option[0].toUpperCase() + option.slice(1);
            return <button key={option} className={css.button} type='button' onClick={() => handler(option)}>{text}</button>
            })
        }
    </div>
}

