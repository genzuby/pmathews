import React from "react";
import styled from "styled-components";

const Bottom = () => {
  return (
    <BOTTOMBODY>
      <a target="_blank" href="https://www.facebook.com/mathewsp">
        <i class="fab fa-facebook-square" title="facebook" />
      </a>
      <a
        target="_blank"
        href="https://www.goodreads.com/author/show/18619974.Peter_D_Mathews"
      >
        <i class="fab fa-goodreads" title="goodreads" />
      </a>
      <a target="_blank" href="https://petermathews.bandcamp.com/releases">
        <i class="fab fa-bandcamp" title="bandcamp" />
      </a>
    </BOTTOMBODY>
  );
};

const BOTTOMBODY = styled.div`
  background-color: #331906;
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
