import React from "react";

import { RectBigBtn } from "../../../assets/Style";

function RectangleBigBtn(props) {
  return (
    <RectBigBtn bgcolor={props.bgcolor} color={props.color}>
      {props.icon}
      {props.name}
    </RectBigBtn>
  );
}

export default RectangleBigBtn;
