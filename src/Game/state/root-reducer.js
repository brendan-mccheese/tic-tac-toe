import { calculateWinner } from "./calculate-winner";
import { CHOOSE_POSITION, RESET_GAME } from "./actions";
import { areAllPositionsFilled } from "./are-all-positions-filled";

export const cleanState = {
    positions: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    currentPlayer: "cross",
    winningPlayer: null,
    isADraw: false,
};

export function rootReducer(state, action) {
    switch (action.type) {
        case CHOOSE_POSITION: {
            const newPositions = state.positions.map(x => x.slice());
            if (
                newPositions[action.rowId][action.cellId] !== null ||
                state.winningPlayer != null
            ) {
                return state;
            }
            newPositions[action.rowId][action.cellId] = state.currentPlayer;
            const winningPlayer = calculateWinner(newPositions);
            const allPositionsFilled = areAllPositionsFilled(newPositions);
            const isADraw = winningPlayer == null && allPositionsFilled;
            return {
                ...state,
                positions: newPositions,
                currentPlayer:
                    state.currentPlayer === "cross" ? "circle" : "cross",
                winningPlayer,
                isADraw,
            };
        }
        case RESET_GAME: {
            return {
                ...cleanState,
            };
        }
        default: {
            return state;
        }
    }
}
