import React from "react";
import { shallow } from "enzyme";
import "../utils/setup";
import Menus from "../components/Menus";

describe("Menu Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menus />);
  });

  afterEach(() => {});

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const component = wrapper.find("[data-test='MenuComponent']");
    expect(component.length).toBe(1);
  });

  it("Should render 5 links", () => {
    const component = wrapper.find("[data-test='NavLink']");
    expect(component.length).toBe(5);
  });
});
