import React, { useRef, useState, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import styled from 'styled-components';
import { contentinfo } from '../assets/cardinfo';
import media from '../styles/media';
import Pages from './Pages';
import Tables from './Tables';
import GoToTop from './GoToTop';

const Content = ({ category }) => {
  let topImg = useRef(null);
  const [content, setContent] = useState({});
  const { title, topimg, contents } = content;

  useEffect(() => {
    setContent(...contentinfo.filter(val => val.category === category));
    TweenMax.from(topImg, 1, {
      opacity: 0,
      width: 0,
      ease: Power3.easeOut,
    });
  }, [category, setContent]);

  const renderContent = () => {
    return category === 'articles' ? (
      <Tables />
    ) : contents ? (
      contents.map(content => (
        <Pages
          key={content.mainimg}
          title={title}
          mainimg={content.mainimg}
          desc={content.desc}
        />
      ))
    ) : null;
  };

  return (
    <div data-test="ContentComponent">
      <TOPIMG ref={el => (topImg = el)} src={`./images/${topimg}`} />
      <CONTBODY>
        <h1>{title}</h1>
        {renderContent()}
      </CONTBODY>
      <GoToTop />
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
  border: 1px solid #ccc;
  background: #fff;
  transform: translate(-50%, 0);
  padding: 2em 4em;
  margin-bottom: 3em;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 110px;
    width: 3px;
    left: 5em;
    background: #ff4d00;
    animation-duration: 1s;
    animation-delay: now;
    animation-name: anibar;

    ${media.pad`
      left : 2.5em;
      height: 85px;
    `}
  }

  @keyframes anibar {
    0% {
      height: 0;
      opacity: 1;
    }
  }

  h1 {
    font-size: calc(1.2rem + 1.5vw);
    padding: 0 1em;

    ${media.pad`
      padding : 0 2em;
    `}

    ${media.pad`
      padding : 0 1.5em;
    `}
  }

  ${media.pad`
    padding : 1em;
    clear : both;
    width : 82%;
  `}
`;

export default Content;
