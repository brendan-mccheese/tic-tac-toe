import * as React from "react";
import { mount, shallow } from "enzyme";
import { Cell } from "./Cell";
import * as actions from "../state/actions";
import { cleanState } from "../state/root-reducer";

describe("Cell", () => {
    const mockDispatch = jest.fn();
    let state = { ...cleanState };
    beforeEach(() => {
        state = { ...cleanState };
        jest.spyOn(React, "useContext").mockImplementation(() => ({
            state: state,
            dispatch: mockDispatch,
        }));
    });

    test("on click, dispatches position update", () => {
        const component = shallow(<Cell cellId={0} rowId={0} />);
        component.simulate("click");
        expect(mockDispatch).toHaveBeenCalledWith({
            type: actions.CHOOSE_POSITION,
            rowId: 0,
            cellId: 0,
        });
    });

    test("renders X when position is filled", () => {
        state.positions[0][0] = "cross";
        const component = shallow(<Cell cellId={0} rowId={0} />);
        const xMarker = component.find(".playerMarker");
        expect(xMarker.text()).toEqual("X");
    });

    test("renders O when position is filled", () => {
        state.positions[0][0] = "circle";
        const component = shallow(<Cell cellId={0} rowId={0} />);
        const xMarker = component.find(".playerMarker");
        expect(xMarker.text()).toEqual("O");
    });
});
