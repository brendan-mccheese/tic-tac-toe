/**
 * Calculate if there is a winner for a 3x3 grid containing 'cross' or 'circle'.
 * @param positions
 * @returns {string | null}
 */
export const calculateWinner = positions => {
    /**
     * @type {"circle" | "cross" | null}
     */
    let winner = null;

    // Check rows
    for (const row of positions) {
        if (row[0] === row[1] && row[1] === row[2]) {
            if (row[0] != null) {
                winner = row[0];
            }
        }
    }
    if (winner != null) return winner;

    // Check columns
    const noOfCols = 3;
    for (let x = 0; x < noOfCols; x++) {
        const col1 = positions[0][x];
        const col2 = positions[1][x];
        const col3 = positions[2][x];
        if (col1 === col2 && col2 === col3) {
            winner = col1;
        }
    }
    if (winner != null) return winner;

    // Check 0,0 -> 2,2 diagonal
    if (
        positions[0][0] === positions[1][1] &&
        positions[1][1] === positions[2][2]
    ) {
        if (positions[0][0] != null) {
            winner = positions[0][0];
        }
    }

    // Check 0,2 -> 2,0 diagonal
    if (
        positions[0][2] === positions[1][1] &&
        positions[1][1] === positions[2][0]
    ) {
        if (positions[0][2] != null) {
            winner = positions[0][2];
        }
    }

    return winner;
};
