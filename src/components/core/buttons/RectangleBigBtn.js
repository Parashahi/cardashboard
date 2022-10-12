import styled from "@emotion/styled";
import React from "react";

function RectangleBigBtn(props) {
  const Button = styled.button`
    height: 34px;
    font-size: 14px;
    padding: 0px 30px;
    border-radius: 10px;
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

export default RectangleBigBtn;
