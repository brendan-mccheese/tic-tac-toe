import React from "react";
import styles from "./Button.module.css";

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
