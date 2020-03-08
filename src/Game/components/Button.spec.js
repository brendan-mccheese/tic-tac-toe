import React from "react";
import { mount, render, shallow } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
    test("click handler from props gets fired when defined", () => {
        const handler = jest.fn();
        const wrapper = shallow(<Button onClick={() => handler()} />);
        wrapper.simulate("click");
        expect(handler).toHaveBeenCalled();
    });

    test("missing click handler is allowed", () => {
        const wrapper = shallow(<Button />);
        wrapper.simulate("click");
        expect(true).toBe(true);
    });

    test("button with label is rendered", () => {
        const label = "moo";
        const component = mount(<Button label={label} />);
        expect(component.find("button").text()).toEqual(label);
    });
});
