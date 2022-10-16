import React from "react";
import styledComponents from "styled-components";

function RectangleMedBtn(props) {
  const Button = styledComponents.button`
    padding: 6px 5px 5px;
    border-radius: 5px;
    border: 1px solid grey;
    background: ${props.bgColor};
    color: ${props.color};
    display: flex;
    cursor: pointer;

    span {
      padding: 1px 3px 0 0;
    }
  `;
  return (
    <Button>
      <span>{props.icon}</span>
      {props.name}
    </Button>
  );
}

export default RectangleMedBtn;
