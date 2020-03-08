import React, { useContext } from "react";
import styles from "./Cell.module.css";
import { GameContext } from "../Game";
import { CHOOSE_POSITION } from "../state/actions";

export const Cell = ({
    rowId,
    cellId,
    /** @type {'left' | 'right'} */ border,
}) => {
    const { state, dispatch } = useContext(GameContext);

    let positionMarker = null;
    if (state) {
        switch (state.positions[rowId][cellId]) {
            case "cross": {
                positionMarker = <div className={styles.playerMarker}>X</div>;
                break;
            }
            case "circle": {
                positionMarker = <div className={styles.playerMarker}>O</div>;
                break;
            }
            default:
                break;
        }
    }

    const classNames = [styles.cell];
    if (border === "left") {
        classNames.push(styles.leftBorder);
    }
    if (border === "right") {
        classNames.push(styles.rightBorder);
    }
    return (
        <div
            className={classNames.join(" ")}
            onClick={() => dispatch({ type: CHOOSE_POSITION, rowId, cellId })}
        >
            {positionMarker}
        </div>
    );
};
