import React from "react";
import { shallow } from "enzyme";
import "../utils/setup";
import Cards from "../components/Cards";

describe("Cards Components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cards />);
  });

  it("Should render Cards component without error", () => {
    const component = wrapper.find("[data-test='CardsComponent']");
    expect(component.length).toBe(1);
  });

  it("Should render 4 links", () => {
    const component = wrapper.find("[data-test='CardLink']");
    expect(component.length).toBe(4);
  });
});
