import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../context/MenuStyleContext";
import { cardinfo } from "../assets/cardinfo";

const Menus = () => {
  const { color, setColor } = useContext(MenuContext);
  const setMenuColor = page => {
    page === "home" ? setColor("#fff") : setColor("#000");
  };

  const renderNavLink = () => {
    return cardinfo.map((val, i) => (
      <NavLink
        onClick={() => setMenuColor(val.color)}
        activeClassName="selectedLink"
        to={val.link}
        key={i}
      >
        <li>{val.text}</li>
      </NavLink>
    ));
  };

  return <MENUBODY color={color}>{renderNavLink()}</MENUBODY>;
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
    padding: 0 0.5em 0.9em 0.5em;
    margin: 0 1.2em;
    color: #fff;
    cursor: pointer;
    position: relative;

    .selectedLink {
      color: #a5601c;
    }

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0px;
      height: 3px;
      background-color: #a5601c;
    }

    &:hover:after {
      width: 100%;
      transition: 0.3s;
    }
  }
`;

export default Menus;
