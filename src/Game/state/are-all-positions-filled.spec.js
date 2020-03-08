import { areAllPositionsFilled } from "./are-all-positions-filled";

describe("areAllPositionsFilled", () => {
    test("returns true with no nulls in grid", () => {
        const result = areAllPositionsFilled([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        expect(result).toBe(true);
    });

    test("returns false with nulls in grid", () => {
        const result = areAllPositionsFilled([
            ["", "", ""],
            ["", null, ""],
            ["", "", ""],
        ]);
        expect(result).toBe(false);
    });
});
