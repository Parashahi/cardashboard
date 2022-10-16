import styledComponents from "styled-components";
import React from "react";

function RectangleBigBtn(props) {
  const Button = styledComponents.button`
    ${"" /* height: 36px; */}
    width: 100%;
    font-size: 12px;
    font-weight: 600;
    padding: 12px 0;
    border: none;
    border-radius: 10px;
    background: ${props.bgcolor};
    color: ${props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    &:hover {
      background: blue;
    }
  `;
  return (
    <Button>
      {props.icon}
      {props.name}
    </Button>
  );
}

export default RectangleBigBtn;
