import React from "react";

import { TodayPaper } from "../../../assets/Style";

function TodayDetailsPaper(props) {
  return (
    <TodayPaper color={props.color}>
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
