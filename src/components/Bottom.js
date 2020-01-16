import React from "react";
import styled from "styled-components";

const Bottom = () => {
  return (
    <BOTTOMBODY>
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
    </BOTTOMBODY>
  );
};

const BOTTOMBODY = styled.div`
  /* background-color: #331906; */
  background: linear-gradient(to bottom, #1e130c, #331906);
  width: 100%;
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #fff;
    margin: auto 0.5em;
    font-size: 2rem;
  }
`;

export default Bottom;
