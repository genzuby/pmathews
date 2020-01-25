import React from "react";
import styled from "styled-components";

const GoToTop = () => {
  return (
    <GOTOTOP onClick={() => window.scrollTo(0, 0)} title="Go to top">
      <i className="fas fa-arrow-up"></i>
    </GOTOTOP>
  );
};

const GOTOTOP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5em;
  right: 1.8em;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  background: #000;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.03);
  }

  i {
    color: #fff;
    font-size: 1.4rem;
  }
`;

export default GoToTop;
