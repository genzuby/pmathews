import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { cardinfo } from "../assets/cardinfo";

const Cards = () => {
  const renderCards = () => {
    return cardinfo.map((val, i) => {
      return <Card key={i} imgurl={val.url} text={val.text} desc={val.desc} />;
    });
  };
  return <CARDGROUP>{renderCards()}</CARDGROUP>;
};

const CARDGROUP = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
  height: 55vh;
`;
export default Cards;
