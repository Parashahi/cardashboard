import styled from "styled-components";
import React from "react";

function RectangleBigBtn(props) {
  const Button = styled.button`
    height: 36px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background: ${props.bgcolor};
    color: ${props.color};
    display: flex;
    cursor: pointer;

    span {
      padding: 1px 5px 0 0;
    }

    &:hover {
      background: blue;
    }
  `;
  return (
    <Button>
      <span>{props.icon}</span>
      {props.name}
    </Button>
  );
}

export default RectangleBigBtn;
