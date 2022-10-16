import React from "react";
import styled from "styled-components";

//Layouts
import HomeMainContent from "../layouts/HomeMainContent";
import SideNav from "../layouts/SideNav";

function HomeMain() {
  const Home = styled.section`
    background: #fafafa;
    width: 100%;

    .HomeMain {
      display: flex;
      gap: 40px;
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
