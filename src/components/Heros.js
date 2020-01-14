import React from "react";
import styled from "styled-components";

const Heros = () => {
  return (
    <HEROBODY>
      <HEROTITE>
        <h1>Peter D. Mathews </h1>
        <p>Professor of English Literature</p>
        <p>Hanyang University</p>
      </HEROTITE>
    </HEROBODY>
  );
};

const HEROBODY = styled.div`
  width: 100%;
  height: 45vh;
  color: #fff;
  background: url("./images/heroimg.jpg") no-repeat;
  background-color: rgba(100, 70, 0, 0.65);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  align-items: center;
`;

const HEROTITE = styled.div`
  font-family: "Libre Baskerville", serif;
  margin-left: 100px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

  h1,
  p {
    margin: 0;
    font-weight: 100;
  }

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.7rem;
  }
`;

export default Heros;
