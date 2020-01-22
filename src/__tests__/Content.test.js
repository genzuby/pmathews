import React from "react";
import "../utils/setup";
import { mount } from "enzyme";
import Content from "../components/Content";

describe("Content Component", () => {
  const wrapperFnc = category => {
    const props = { category };
    return mount(<Content {...props} />);
  };

  describe("About Me Content", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = wrapperFnc("aboutme");
    });

    it("Should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      const component = wrapper.find(`[data-test='ContentComponent']`);
      expect(component.length).toBe(1);
    });

    it("Should display a correct title", () => {
      const contentTitle = <h1>About Me</h1>;
      expect(wrapper.contains(contentTitle)).toEqual(true);
    });

    it("Should show a correct top img", () => {
      const imgUrl = "./images/aboutme.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(2);
    });

    it("Should show a correct main img", () => {
      const imgUrl = "./images/aboutme-main.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(1);
    });
  });

  describe("Books Content", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = wrapperFnc("books");
    });

    it("Should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      const component = wrapper.find(`[data-test='ContentComponent']`);
      expect(component.length).toBe(1);
    });

    it("Should display a correct title", () => {
      const contentTitle = <h1>Books</h1>;
      expect(wrapper.contains(contentTitle)).toEqual(true);
    });

    it("Should show a correct top img", () => {
      const imgUrl = "./images/booktop.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(2);
    });

    it("Should show a correct main img", () => {
      const imgUrl = "./images/Books.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(1);
    });
  });

  describe("Articles Content", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = wrapperFnc("articles");
    });

    it("Should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      const component = wrapper.find(`[data-test='ContentComponent']`);
      expect(component.length).toBe(1);
    });

    it("Should display a correct title", () => {
      const contentTitle = <h1>Articles</h1>;
      expect(wrapper.contains(contentTitle)).toEqual(true);
    });

    it("Should show a correct top img", () => {
      const imgUrl = "./images/articletop.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(2);
    });
  });

  describe("Professional Content", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = wrapperFnc("professional");
    });

    it("Should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      const component = wrapper.find(`[data-test='ContentComponent']`);
      expect(component.length).toBe(1);
    });

    it("Should display a correct title", () => {
      const contentTitle = <h1>Professional</h1>;
      expect(wrapper.contains(contentTitle)).toEqual(true);
    });

    it("Should show a correct top img", () => {
      const imgUrl = "./images/professionaltop.jpg";
      const component = wrapper.find(`[src="${imgUrl}"]`);
      expect(component.length).toBe(2);
    });
  });
});
