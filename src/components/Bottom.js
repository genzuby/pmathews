import React from "react";
import styled from "styled-components";

const Bottom = () => {
  return (
    <BOTTOMBODY>
      <BOTTOMSNS>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/mathewsp"
        >
          <i className="fab fa-facebook-square" title="facebook" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.goodreads.com/author/show/18619974.Peter_D_Mathews"
        >
          <i className="fab fa-goodreads" title="goodreads" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://petermathews.bandcamp.com/releases"
        >
          <i className="fab fa-bandcamp" title="bandcamp" />
        </a>
      </BOTTOMSNS>
      <p>
        Mail :{" "}
        <a href="mailto:pmathews@hanyang.ac.kr">pmathews@hanyang.ac.kr</a>
      </p>
    </BOTTOMBODY>
  );
};

const BOTTOMBODY = styled.div`
  /* background: linear-gradient(to bottom, #1e130c, #331906); */
  background-color: #33393f;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;

  p,
  a {
    color: #d6d0cc;
    margin: 0.3em auto;
  }
`;

const BOTTOMSNS = styled.div`
  display: flex;
  margin: 0.1em auto;

  i {
    color: #d6d0cc;
    margin: auto 0.3em;
    font-size: 2rem;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.1);
      color: #fff;
    }
  }
`;

export default Bottom;
