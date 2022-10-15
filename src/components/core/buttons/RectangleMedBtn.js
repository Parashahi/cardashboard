import React from "react";
import styled from "styled-components";

function RectangleMedBtn(props) {
  const Button = styled.button`
    font-size: 12px;
    padding: 5px 5px 4px;
    border-radius: 5px;
    border: 1px solid grey;
    background: ${props.bgColor};
    color: ${props.color};
    display: flex;

    svg {
      padding: 0px 3px 0 0;
    }
  `;
  return (
    <Button>
      {props.icon}
      <span>{props.name}</span>
    </Button>
  );
}

export default RectangleMedBtn;
