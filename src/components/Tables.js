import React from "react";
import styled from "styled-components";
import { articlesInfo } from "../assets/articlesInfo";

const Tables = () => {
  const renderList = () => {
    return articlesInfo.map((val, i) => (
      <TABLEBODY key={i}>
        <h3>{val.category}</h3>
        <div>
          {val.info.map((item, idx) => (
            <TABLEITEMS key={idx}>
              <TABLEIMG>
                <img src={`./images/articles/${item.image}`} alt={item.title} />
              </TABLEIMG>
              <TABLEINFO>
                <h4>{item.title}</h4>
                <p>{item.published}</p>
                {item.link && <a href={item.link}>Link</a>}
                <div>More Info</div>
              </TABLEINFO>
            </TABLEITEMS>
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
    width: calc(100% - 2em + 2px);
    border-top-left-radius: 20px;
  }
  div {
    width: 100%;
    margin: 0;
  }
`;

const TABLEITEMS = styled.div`
  display: grid;
  grid-template-columns: 14% 86%;
  border: 1px solid #ccc;
  border-top: none;
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
  }
`;
const TABLEINFO = styled.div`
  padding: 1em;

  h4,
  p,
  a {
    margin: 0;
    padding: 0.1em 0;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    word-wrap: break-word;
    width: 95%;
  }

  div {
    margin-top: 1.2em;
    font-size: 1.05rem;
    color: orange;
  }
`;

export default Tables;
