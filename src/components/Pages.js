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
  /* display: flex;
  flex-direction: row; */
  padding-bottom: 2em;

  ${media.pad`
    display: flex;
    flex-direction: column;
  `}

  img {
    width: 35%;
    height: 100%;
    margin: 1em 3em 2em 1em;
    object-fit: cover;
    float: left;

    ${media.pad`
      margin : 1.5em 3em;
    `}

    ${media.mobile`
      width: 80%;
      display:flex;
      justify-content : center;
      align-items:center;
      margin : 1.5em auto;
    `}
  }

  p {
    margin: 2em;
    text-align: justify;

    ${media.pad`
      float :none;
      margin : 1em 2em;
    `}

    ${media.mobile`
      float :none;
      margin : 1.5em ;
      text-align: left;
    `}
  }
`;

export default Pages;
