import styled from "@emotion/styled";
import React from "react";

function OvalMiniBtn(props) {
  const Button = styled.button`
    background: ${props.btnColor};
    color: ${props.color};
    font-size: 10px;
    border-radius: 20px;
    border: none;
    padding: 2px 10px 0;
    height: 20px;
  `;
  return <Button>{props.name}</Button>;
}

export default OvalMiniBtn;
