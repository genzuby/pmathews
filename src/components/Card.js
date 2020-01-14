import React from "react";
import styled from "styled-components";

const Card = ({ imgurl, text, desc }) => {
  return (
    <CARDBODY>
      <img src={`./images/${imgurl}`} alt={text} />
      <CARDTEXT>
        <h4>{text}</h4>
      </CARDTEXT>
    </CARDBODY>
  );
};

const CARDBODY = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0;
  height: 290px;
  width: 230px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  img {
    object-fit: cover;
    height: 80%;
  }
`;

const CARDTEXT = styled.div`
  background: #fff;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 4px solid #a5601c;
  position: relative;

  &:hover h4 {
    transform: scale(1.08);
    top: -3px;
    transition: 0.25s;
  }

  h4 {
    margin: 1em;
    font-weight: 500;
    top: 2px;
    right: 0.5em;
    position: absolute;
    cursor: pointer;
  }
`;

export default Card;
