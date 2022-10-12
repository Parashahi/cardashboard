import React from "react";
import styled from "styled-components";

function TodayDetailsPaper(props) {
  const TodayPaper = styled.div`
    border: 1px solid lightgrey;
    border-radius: 6px;
    width: 185px;
    background: white;
    padding: 15px;

    .head {
      p {
        font-size: 10px;
        color: grey;
      }
    }

    .bodypart {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: space-between;

      span {
        color: ${props.color};
        padding: 8px 0 0 0;
        font-size: 12px;
      }
    }
  `;
  return (
    <TodayPaper>
      <div className="head">
        <p>{props.title}</p>
      </div>
      <div className="bodypart">
        <h1>{props.amnt}</h1>
        <span>
          {props.num} <i>{props.numIcon}</i>
        </span>
      </div>
    </TodayPaper>
  );
}

export default TodayDetailsPaper;
