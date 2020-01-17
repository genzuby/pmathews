import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import "../utils/setup";
import App from "../App";

describe("App Components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <App />
      </MemoryRouter>
    );
  });

  it("Should renders an app with 5 routes", () => {
    const hometitle = <h1>Peter D. Mathews</h1>;
    console.log(wrapper);
    expect(wrapper.contain(hometitle)).toEqual(true);
  });

  it("Should render without error", () => {
    const component = wrapper.find(`[data-test='AppComponent']`);
    expect(component.length).toBe(1);
  });
});
