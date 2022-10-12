import React from "react";
import styled from "styled-components";
import Navbar from "../layouts/Navbar";

function TopNav() {
  const Nav = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: white;
    border-bottom: 1px solid lightgrey;
  `;
  return (
    <Nav>
      <div className="container">
        <Navbar />
      </div>
    </Nav>
  );
}

export default TopNav;
