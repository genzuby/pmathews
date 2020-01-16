import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax, Power3 } from "gsap";

const Heros = () => {
  let nameAni = useRef(null);
  let titleAni = useRef(null);
  let uniAni = useRef(null);

  useEffect(() => {
    TweenMax.from(nameAni, 1.5, { opacity: 0, x: -100, ease: Power3.easeOut });
    TweenMax.from(titleAni, 1.2, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 0.2
    });
    TweenMax.from(uniAni, 1.2, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.4
    });
  }, []);

  return (
    <HEROBODY>
      <HEROTITE>
        <h1 ref={el => (nameAni = el)}>Peter D. Mathews </h1>
        <p ref={el => (titleAni = el)}>Professor of English Literature</p>
        <p ref={el => (uniAni = el)}>Hanyang University</p>
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
    opacity: 1;
  }

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.7rem;
  }
`;

export default Heros;
