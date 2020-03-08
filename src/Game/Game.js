import React from "react";
import { Board } from "./components/Board";
import styles from "./Game.module.css";
import { Button } from "./components/Button";
import { cleanState, rootReducer } from "./state/root-reducer";
import { RESET_GAME } from "./state/actions";

export const GameContext = React.createContext(null);

export const Game = () => {
    const [state, dispatch] = React.useReducer(rootReducer, cleanState);
    return (
        <GameContext.Provider value={{ state, dispatch }}>
            <div className="game">
                <h1 className={styles.title}>Tic. Tac. Toe.</h1>
                <div className={styles.boardWrapper}>
                    <div>Current player is: {state.currentPlayer}</div>
                    <Board />
                    {state.winningPlayer ? (
                        <div>The winner is: {state.winningPlayer}!!!</div>
                    ) : null}
                    {state.isADraw ? (
                        <div>The game was a tie, give it another go ;)</div>
                    ) : null}
                </div>
                <div className={styles.restartWrapper}>
                    <Button
                        label="Restart Game"
                        onClick={() => dispatch({ type: RESET_GAME })}
                    />
                </div>
            </div>
        </GameContext.Provider>
    );
};
