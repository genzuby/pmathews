import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TweenMax, Power3 } from "gsap";
import { cardinfo } from "../assets/cardinfo";
import media from "../styles/media";

const Menus = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("#fff");
  let mobileMenu = useRef(null);

  const onHandleMobileMenu = () => {
    if (!menuOpen) {
      TweenMax.set(mobileMenu, { width: "100vw" });
      TweenMax.from(mobileMenu, 0.8, {
        width: 0,
        ease: Power3.easeOut
      });
    } else {
      TweenMax.from(mobileMenu, 0.8, { width: "100vw", ease: Power3.easeOut });
      TweenMax.set(mobileMenu, { width: 0 });
    }

    setMenuOpen(!menuOpen ? true : false);
    setMenuColor(!menuOpen ? "#969696" : "#fff");
  };

  const renderNavLink = activeClass => {
    return cardinfo.map((val, i) => (
      <NavLink
        data-test="NavLink"
        activeClassName={activeClass}
        onClick={onHandleMobileMenu}
        to={val.link}
        key={i}
        exact
      >
        <li>{val.text}</li>
      </NavLink>
    ));
  };

  return (
    <div data-test="MenuComponent">
      <MENUBODY>{renderNavLink("selected")}</MENUBODY>
      <MENUBODYMOBILE>
        <i
          className="fas fa-bars"
          style={{ color: menuColor }}
          onClick={onHandleMobileMenu}
          title="Menu"
        ></i>
        <MENULIST ref={el => (mobileMenu = el)} open={menuOpen}>
          {renderNavLink("selectedmobile")}
        </MENULIST>
      </MENUBODYMOBILE>
    </div>
  );
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
  ${media.mobile`
    display : none;
  `}

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

const MENUBODYMOBILE = styled.div`
  display: none;
  ${media.mobile`
    display : flex;
    justify-content: flex-start;
    align-items: center;
    background-color: transparent;
    position: absolute;
    left: 1em;
    top: .8em;

    i {
      font-size: 1.7rem;
      z-index: 99;
      cursor: pointer;
    }
  `}
`;

const MENULIST = styled.ul`
  list-style: none;
  visibility: ${props => (props.open ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  a {
    font-size: 1.5rem;
    padding: 1em;
    border-bottom: 1px dashed #ccc;
    width: 70%;

    li {
      cursor: pointer;
    }
  }
`;

export default Menus;
