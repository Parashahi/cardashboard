import React from "react";
import styled from "styled-components";
import HomeMainContent from "../layouts/HomeMainContent";
import SideNav from "../layouts/SideNav";

function HomeMain() {
  const Home = styled.section`
    background: #fafafa;

    .HomeMain {
      display: flex;
      gap: 50px;
    }
  `;
  return (
    <Home>
      <div className="container">
        <div className="HomeMain">
          <SideNav />
          <HomeMainContent />
        </div>
      </div>
    </Home>
  );
}

export default HomeMain;
