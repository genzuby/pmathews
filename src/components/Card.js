import React from "react";
import styled from "styled-components";

const Card = ({ imgurl, text, desc }) => {
  return (
    <CARDBODY imgurl={`./images/${imgurl}`}>
      <CARDTEXT>{text}</CARDTEXT>
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
  background: url(${props => props.imgurl});
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover h3 {
    transform: scale(1.1);
    bottom: 6px;
    font-weight: 800;
  }
`;

const CARDTEXT = styled.h3`
  margin: 1em;
  font-weight: 500;
  bottom: 2px;
  right: 0.5em;
  color: #fff;
  position: absolute;
  transition: all 0.3s ease-out;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

export default Card;
