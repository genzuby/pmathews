import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { cardinfo } from "../assets/cardinfo";

const Menus = () => {
  const renderNavLink = () => {
    return cardinfo.map((val, i) => (
      <NavLink
        data-test="NavLink"
        activeClassName="selected"
        to={val.link}
        key={i}
        exact
      >
        <li>{val.text}</li>
      </NavLink>
    ));
  };

  return <MENUBODY data-test="MenuComponent">{renderNavLink()}</MENUBODY>;
};

const MENUBODY = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  position: absolute;
  right: 1em;
  top: 0;
  left: 0;
  right: 0;

  li {
    padding: 0 0.5em 0.6em 0.5em;
    margin: 0 1.2em;
    color: #fff;
    cursor: pointer;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0px;
      height: 2px;
      background-color: #b1bbd6;
    }

    &:hover:after {
      width: 100%;
      transition: 0.3s;
    }
  }
`;

export default Menus;
