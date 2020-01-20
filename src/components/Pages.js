import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Pages = ({ mainimg, title, desc }) => {
  return (
    <CONTENT>
      {mainimg && <img src={`./images/${mainimg}`} alt={title} />}
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </CONTENT>
  );
};

const CONTENT = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2em;

  ${media.pad`
    flex-direction: column;
  `}

  img {
    width: 50%;
    margin: 1em;

    ${media.mobile`
      width: 80%;
      display:flex;
      justify-content : center;
      align-items:center;
    `}
  }

  p {
    float: right;
    margin: 4em 2em;

    ${media.pad`
      float :none;
      margin : 1em 2em;
    `}

    ${media.mobile`
      float :none;
      margin : 1em .5em;
    `}
  }
`;

export default Pages;
