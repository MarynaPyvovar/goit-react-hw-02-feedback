import React from "react";
import css from './Buttons.module.css';

export const Buttons = ({handler}) => {
    return <div className={css.buttonWrapper}>
        <button className={css.button} type='button' onClick={handler}>Good</button>
        <button className={css.button} type='button' onClick={handler}>Neutral</button>
        <button className={css.button} type='button' onClick={handler}>Bad</button>
    </div>
}