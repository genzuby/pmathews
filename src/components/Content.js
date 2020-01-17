import React, { useRef, useState, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import styled from "styled-components";
import { contentinfo } from "../assets/cardinfo";

const Content = ({ category }) => {
  let topImg = useRef(null);
  const [content, setContent] = useState({});
  const { title, topimg, mainimg, desc } = content;

  useEffect(() => {
    setContent(...contentinfo.filter(val => val.category === category));
    TweenMax.from(topImg, 1, {
      opacity: 0,
      width: 0,
      ease: Power3.easeOut
    });
  }, [category, setContent]);

  return (
    <div>
      <TOPIMG ref={el => (topImg = el)} src={`./images/${topimg}`} />
      <CONTBODY>
        <h1>{title}</h1>
        <CONTENT>
          <img src={`./images/${mainimg}`} alt={title} />
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </CONTENT>
      </CONTBODY>
    </div>
  );
};

const TOPIMG = styled.img`
  width: 100%;
  height: 45vh;
  object-fit: cover;
  object-position: 50% 50%;
  z-index: -1;
  opacity: 1;
`;

const CONTBODY = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 50%;
  width: 70%;
  height: 100%;
  border: 1px solid #ccc;
  background: #fff;
  transform: translate(-50%, 0);
  padding: 2em 4em;
  margin-bottom: 3em;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`;

const CONTENT = styled.div`
  display: flex;

  img {
    width: 50%;
    margin: 1em;
  }

  p {
    float: right;
    margin: 4em 2em;
  }
`;

export default Content;
