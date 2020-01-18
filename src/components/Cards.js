import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../styles/media";
import Card from "./Card";
import { cardinfo } from "../assets/cardinfo";

const Cards = () => {
  const renderCards = () => {
    return cardinfo.map((val, i) => {
      return (
        val.text !== "Home" && (
          <Link data-test="CardLink" key={i} to={val.link}>
            <Card imgurl={val.url} text={val.text} desc={val.desc} />
          </Link>
        )
      );
    });
  };
  return <CARDGROUP data-test="CardsComponent">{renderCards()}</CARDGROUP>;
};

const CARDGROUP = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
  ${media.pad`
    display : grid;
    grid: auto-flow dense / repeat(2, 230px);
    grid-gap : 1em 2em;
  `}
  ${media.mobile`
    display : flex;
  `}
`;
export default Cards;
