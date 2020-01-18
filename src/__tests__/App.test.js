import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import "../utils/setup";
import App from "../App";
import Home from "../pages/Home";
import Aboutme from "../pages/Aboutme";
import Books from "../pages/Books";
import Articles from "../pages/Articles";
import Professional from "../pages/Professional";

describe("App Components", () => {
  let wrapper;

  const setWrapper = entry => {
    wrapper = mount(
      <MemoryRouter initialEntries={[entry]} initialIndex={0}>
        <App />
      </MemoryRouter>
    );
  };

  describe("router test with 5 routes", () => {
    it("Should render Home page", () => {
      setWrapper("/");
      expect(wrapper.find(Home)).toHaveLength(1);
    });

    it("Should render About Me page", () => {
      setWrapper("/aboutme");
      expect(wrapper.find(Aboutme)).toHaveLength(1);
    });

    it("Should render Books page", () => {
      setWrapper("/books");
      expect(wrapper.find(Books)).toHaveLength(1);
    });

    it("Should render Articles page", () => {
      setWrapper("/articles");
      expect(wrapper.find(Articles)).toHaveLength(1);
    });

    it("Should render Professional page", () => {
      setWrapper("/professional");
      expect(wrapper.find(Professional)).toHaveLength(1);
    });
  });

  it("Should render without error", () => {
    setWrapper("/");
    const component = wrapper.find(`[data-test='AppComponent']`);
    expect(component.length).toBe(1);
  });

  it("Should renders Home page title without error", () => {
    setWrapper("/");
    const hometitle = <h1>Peter D. Mathews</h1>;
    expect(wrapper.contains(hometitle)).toEqual(true);
  });
});
