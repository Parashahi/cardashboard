import styled from "@emotion/styled";
import React from "react";

function OvalSmallBtn(props) {
  const Button = styled.button`
    border-radius: 20px;
    height: 30px;
    border: none;
    padding: 0px 20px;
    background: ${props.color};
    color: ${props.fColor};
    cursor: pointer;
  `;
  return <Button>{props.name}</Button>;
}

export default OvalSmallBtn;
