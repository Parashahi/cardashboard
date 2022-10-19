import React from "react";
import { RectMedBtn } from "../../../assets/Style";

function RectangleMedBtn(props) {
  return (
    <RectMedBtn bgcolor={props.bgColor} color={props.color}>
      <span>{props.icon}</span>
      {props.name}
    </RectMedBtn>
  );
}

export default RectangleMedBtn;
