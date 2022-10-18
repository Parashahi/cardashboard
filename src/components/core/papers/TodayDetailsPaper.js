import React from "react";
import styledComponents from "styled-components";

function TodayDetailsPaper(props) {
  const TodayPaper = styledComponents.div`
    border: 1px solid lightgrey;
    border-radius: 6px;
    // min-width: 230px;
    background: white;
    padding: 15px;

    .head {
      p {
        font-size: 11px;
        color: grey;
      }
    }

    .bodypart {
      padding: 10px 0 0 0;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 21px;
        font-weight: 700;
        color: black;
        padding: 6px 0 0;
      }

      span {
        color: ${props.color};
        padding: 14px 0 0 0;
        font-size: 13px;
      }
    }
  `;
  return (
    <TodayPaper>
      <div className="head">
        <p>{props.title}</p>
      </div>
      <div className="bodypart">
        <p>{props.amnt}</p>
        <span>
          {props.num} <i>{props.numIcon}</i>
        </span>
      </div>
    </TodayPaper>
  );
}

export default TodayDetailsPaper;
