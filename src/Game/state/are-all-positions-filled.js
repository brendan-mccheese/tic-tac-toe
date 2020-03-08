export const areAllPositionsFilled = positions => {
    return positions
        .map(x => x[0] != null && x[1] != null && x[2] != null)
        .reduce((c, v) => (c === false ? false : v), true);
};
