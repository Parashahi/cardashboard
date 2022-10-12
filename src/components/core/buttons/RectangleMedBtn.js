import React from "react";
import styled from "@emotion/styled";

function RectangleMedBtn(props) {
  const Button = styled.button`
    height: 34px;
    font-size: 14px;
    padding: 0px 30px;
    border-radius: 10px;
    border: 0.5px solid grey;
    background: ${props.bgcolor};
    color: ${props.color};
  `;
  return (
    <Button>
      {props.icon}
      {props.name}
    </Button>
  );
}

export default RectangleMedBtn;
