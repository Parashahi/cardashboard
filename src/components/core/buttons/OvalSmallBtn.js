import styledComponents from "styled-components";
import React from "react";

function OvalSmallBtn(props) {
  const Button = styledComponents.button`
    text-transform: capitalize;
    font-size: 10px;
    border-radius: 20px;
    border: none;
    padding: 4px 8px;
    background: ${props.bColor};
    color: ${props.fColor};
    cursor: pointer;
    display: flex;

    .dot {
      margin: 4px 5px 0 0;
      background: ${props.fColor};
      height: 5px;
      width: 5px;
      border-radius: 50%;
    }
  `;
  return (
    <Button>
      <div className="dot"></div>
      {props.name}
    </Button>
  );
}

export default OvalSmallBtn;
