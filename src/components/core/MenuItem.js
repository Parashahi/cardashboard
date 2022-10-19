import React from "react";

import { ItemBtn } from "../../assets/Style";

function MenuItem(props) {
  return (
    <ItemBtn href={props.link}>
      {props.icon}
      <span>{props.name}</span>
    </ItemBtn>
  );
}

export default MenuItem;
