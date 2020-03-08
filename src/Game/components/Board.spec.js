import { shallow } from "enzyme";
import React from "react";
import { Board } from "./Board";

describe("Board", () => {
    test.each`
        x    | y
        ${0} | ${0}
        ${0} | ${1}
        ${0} | ${2}
        ${1} | ${0}
        ${1} | ${1}
        ${1} | ${2}
        ${2} | ${0}
        ${2} | ${1}
        ${2} | ${2}
    `("has cell at position $x and $y", ({ x, y }) => {
        const wrapper = shallow(<Board />);
        const cell = wrapper.findWhere(
            x => x.props().rowId === x && x.props().cellId === y,
        );
        expect(cell).toBeDefined();
    });
});
