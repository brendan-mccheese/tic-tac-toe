import React from "react";
import styles from "./Button.module.css";

/**
 * Simple styled button for use across app.
 * @param label
 * @param onClick
 * @returns {*}
 * @constructor
 */
export const Button = ({ label, onClick }) => {
    const handleClick = ev => {
        if (onClick) {
            onClick(ev);
        }
    };
    return (
        <button className={styles.btn} onClick={ev => handleClick(ev)}>
            {label}
        </button>
    );
};
