import { calculateWinner } from "./calculate-winner";

describe("calculateWinner", () => {
    const diagonalWinner = [
        ["cross", "circle", null],
        ["circle", "cross", null],
        ["circle", null, "cross"],
    ];

    const diagonal2Winner = [
        ["cross", "circle", "circle"],
        ["circle", "circle", null],
        ["circle", null, "cross"],
    ];

    const topLineWinner = [
        ["circle", "circle", "circle"],
        ["cross", "cross", null],
        ["circle", null, "cross"],
    ];

    const midLineWinner = [
        ["circle", "circle", null],
        ["cross", "cross", "cross"],
        ["circle", null, "cross"],
    ];

    const bottomLineWinner = [
        ["circle", "circle", null],
        ["circle", null, "cross"],
        ["cross", "cross", "cross"],
    ];

    const firstColWinner = [
        ["circle", "circle", null],
        ["circle", null, "cross"],
        ["circle", "cross", "cross"],
    ];

    const secondColWinner = [
        [null, "circle", "circle"],
        ["cross", "circle", null],
        ["circle", "circle", "cross"],
    ];

    const thirdColWinner = [
        [null, "circle", "cross"],
        ["circle", "cross", "cross"],
        ["circle", "circle", "cross"],
    ];

    test("returns winner for 0,0 -> 2,2 diagonal", () => {
        expect(calculateWinner(diagonalWinner)).toEqual("cross");
    });

    test("returns winner for 0,2 -> 2,0 diagonal", () => {
        expect(calculateWinner(diagonal2Winner)).toEqual("circle");
    });

    test("returns winner for 0,0 -> 0,2 line ", () => {
        expect(calculateWinner(topLineWinner)).toEqual("circle");
    });

    test("returns winner for 1,0 -> 1,2 line ", () => {
        expect(calculateWinner(midLineWinner)).toEqual("cross");
    });

    test("returns winner for 2,0 -> 2,2 line ", () => {
        expect(calculateWinner(bottomLineWinner)).toEqual("cross");
    });

    test("returns winner for 0,0 -> 2,0 line ", () => {
        expect(calculateWinner(firstColWinner)).toEqual("circle");
    });

    test("returns winner for 0,1 -> 2,1 line ", () => {
        expect(calculateWinner(secondColWinner)).toEqual("circle");
    });

    test("returns winner for 0,2 -> 2,2 line ", () => {
        expect(calculateWinner(thirdColWinner)).toEqual("cross");
    });
});
