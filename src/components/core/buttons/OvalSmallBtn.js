import React from "react";

import { OvalSmBtn } from "../../../assets/Style";

function OvalSmallBtn(props) {
  return (
    <OvalSmBtn bColor={props.bgcolor} fColor={props.fcolor}>
      <div className="dot"></div>
      {props.name}
    </OvalSmBtn>
  );
}

export default OvalSmallBtn;
