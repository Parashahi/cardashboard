import React from "react";
import styled from "styled-components";

function MenuItem(props) {
  const ItemBtn = styled.a`
    color: black;
    background: transparent;
    padding: 5px 10px 4px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    font-size: 12px;

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
