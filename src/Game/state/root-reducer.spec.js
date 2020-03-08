import { CHOOSE_POSITION, RESET_GAME } from "./actions";
import { cleanState, rootReducer } from "./root-reducer";
import * as calcWinner from "./calculate-winner";
import * as calcRemaining from "./are-all-positions-filled";

describe("rootReducer", () => {
    test(`action ${RESET_GAME} resets state`, () => {
        const result = rootReducer(
            {
                winningPlayer: "bob",
            },
            { type: RESET_GAME },
        );
        expect(result).toEqual(cleanState);
    });

    describe(`action ${CHOOSE_POSITION} `, () => {
        let result;
        let startingPlayer;
        beforeEach(() => {
            startingPlayer = cleanState.currentPlayer;
            result = rootReducer(cleanState, {
                type: CHOOSE_POSITION,
                rowId: 0,
                cellId: 1,
            });
        });

        test(`updates position`, () => {
            expect(result.positions[0][1]).toEqual(startingPlayer);
        });

        test(`updates current player`, () => {
            expect(result.currentPlayer).not.toEqual(startingPlayer);
        });
    });

    test(`action ${CHOOSE_POSITION} with win updates winning player`, () => {
        jest.spyOn(calcWinner, "calculateWinner").mockImplementationOnce(
            () => "cross",
        );
        jest.spyOn(
            calcRemaining,
            "areAllPositionsFilled",
        ).mockImplementationOnce(() => false);
        const result = rootReducer(cleanState, {
            type: CHOOSE_POSITION,
            rowId: 0,
            cellId: 1,
        });
        expect(result.winningPlayer).toEqual("cross");
    });

    test(`action ${CHOOSE_POSITION} with no remaining positions and no win sets state to drawn game`, () => {
        jest.spyOn(calcWinner, "calculateWinner").mockImplementationOnce(
            () => null,
        );
        jest.spyOn(
            calcRemaining,
            "areAllPositionsFilled",
        ).mockImplementationOnce(() => true);
        const result = rootReducer(cleanState, {
            type: CHOOSE_POSITION,
            rowId: 0,
            cellId: 1,
        });
        expect(result.winningPlayer).toEqual(null);
        expect(result.isADraw).toEqual(true);
    });
});
