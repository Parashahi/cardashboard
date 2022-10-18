import React from "react";
import styledComponents from "styled-components";

function MenuItem(props) {
  const ItemBtn = styledComponents.a`
    color: black;
    background: transparent;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    font-size: 13px;
    max-width: 100%;

    span {
      padding: 0 0 0 10px;
    }

    &:hover {
      background: lightgrey;
    }
  `;
  return (
    <ItemBtn href={props.link}>
      {props.icon}
      <span>{props.name}</span>
    </ItemBtn>
  );
}

export default MenuItem;
