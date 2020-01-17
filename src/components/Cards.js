import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import { cardinfo } from "../assets/cardinfo";

const Cards = () => {
  const renderCards = () => {
    return cardinfo.map((val, i) => {
      return (
        val.text !== "Home" && (
          <Link key={i} to={val.link}>
            <Card imgurl={val.url} text={val.text} desc={val.desc} />
          </Link>
        )
      );
    });
  };
  return <CARDGROUP>{renderCards()}</CARDGROUP>;
};

const CARDGROUP = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
`;
export default Cards;
