/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import { articlesInfo } from "../assets/articlesInfo";

const Tables = () => {
  const [openid, setOpenid] = useState(null);

  const getMoreInfo = id => {
    openid === id ? setOpenid(null) : setOpenid(id);
  };

  const renderList = () => {
    return articlesInfo.map((val, i) => (
      <TABLEBODY key={i}>
        <h3>{val.category}</h3>
        <div className="bodymain">
          {val.info.map((item, idx) => (
            <div key={idx}>
              <TABLEITEMS>
                <TABLEIMG>
                  <img
                    src={`./images/articles/${i === 0 ? "A" : "B"}${idx +
                      1}.jpg`}
                    alt={item.title}
                  />
                </TABLEIMG>
                <TABLEINFO>
                  <h4>{item.title}</h4>
                  <p>{item.published}</p>
                  {item.link && (
                    <a href={item.link} target="_blank">
                      Link
                    </a>
                  )}
                  {item.desc && (
                    <div
                      onClick={() => getMoreInfo(idx)}
                      title="View detail information"
                    >
                      More Info
                    </div>
                  )}
                </TABLEINFO>
              </TABLEITEMS>
              {idx === openid && (
                <TABLEDESC>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                </TABLEDESC>
              )}
            </div>
          ))}
        </div>
      </TABLEBODY>
    ));
  };

  return <>{renderList()}</>;
};

const TABLEBODY = styled.div`
  margin-bottom: 3em;
  padding: 1em 1.5em;

  h3 {
    padding: 0.8em 0 0.5em 2em;
    margin: 0;
    background: #ccc;
    width: calc(100% - 2em + 1px);
    border-top-left-radius: 26px;

    ${media.mobile`
      border-top-left-radius: 0;
      width: calc(100% - 1em + 3px);
      padding: 0.8em 0 0.5em 1em;
    `}
  }
  .bodymain {
    width: 100%;
    margin: 0;
  }
`;

const TABLEITEMS = styled.div`
  display: grid;
  grid-template-columns: 14% 86%;
  border: 1px solid #ccc;
  border-top: none;
  min-height: 130px;

  ${media.pad`
    grid-template-columns: 22% 78%;
  `}

  ${media.mobile`
    display : flex;
    flex-direction : column;
  `}
`;

const TABLEIMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 110px;
    object-fit: cover;
    object-position: 50% 50%;

    ${media.mobile`
      display:none;
    `}
  }
`;

const TABLEINFO = styled.div`
  padding: 1em;

  h4,
  p,
  a {
    margin: 0;
    padding: 0.1em 0;
    width: 95%;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    word-wrap: break-word;
  }

  a {
    font-weight: 600;
    color: #775ada;
  }

  div {
    margin-top: 1.2em;
    font-size: 1.05rem;
    color: #ff304f;
    cursor: pointer;
  }
`;

const TABLEDESC = styled.div`
  margin: 0;
  padding: 2em;
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-top: none;
  animation-duration: 0.36s;
  animation-delay: now;
  animation-name: anidetail;

  @keyframes anidetail {
    0% {
      height: 0;
      color: #f5f5f5;
    }
  }
`;

export default Tables;
