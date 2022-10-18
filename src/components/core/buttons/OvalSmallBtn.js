import styledComponents from "styled-components";
import React from "react";

function OvalSmallBtn(props) {
  const Button = styledComponents.button`
    text-transform: capitalize;
    
    border-radius: 20px;
    border: none;
    background: ${props.bColor};
    color: ${props.fColor};
    cursor: pointer;
    display: flex;

    
  `;
  return (
    <Button>
      <div className="dot"></div>
      {props.name}
    </Button>
  );
}

export default OvalSmallBtn;
