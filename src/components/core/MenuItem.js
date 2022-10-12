import React from "react";
import styled from "styled-components";

function MenuItem(props) {
  const ItemBtn = styled.a`
    color: black;
    background: transparent;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    margin: 5px 0;
    cursor: pointer;

    span {
      padding: 2px 15px 0 0;
    }

    &:hover {
      background: lightgrey;
    }
  `;
  return (
    <ItemBtn href={props.link}>
      <span>{props.icon}</span> {props.name}
    </ItemBtn>
  );
}

export default MenuItem;
