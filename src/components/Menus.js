import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menus = () => {
  return (
    <MENUBODY>
      <Link to="/">
        <li>Home</li>
      </Link>
      <li>About Me</li>
      <li>Books</li>
      <li>Articles</li>
      <li>Professional</li>
    </MENUBODY>
  );
};

const MENUBODY = styled.ul`
  list-style: none;
  display: flex;
  background-color: transparent;
  position: fixed;
  right: 1em;

  li {
    padding: 0.5em;
    margin: 0 1em;
    color: #fff;
    cursor: pointer;
    position: relative;

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
