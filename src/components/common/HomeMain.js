import React from "react";
import styledComponents from "styled-components";

//Layouts
import HomeMainContent from "../layouts/HomeMainContent";
import SideNav from "../layouts/SideNav";

function HomeMain() {
  const Home = styledComponents.section`
    background: #fafafa;
    max-width: 100%;

    .HomeMain {
      display: flex;
      gap: 40px;
    }

    @media screen and (max-width: 1100px ){
      .HomeMain {
        display: flex;
        flex-direction: column;
        gap: 40px;
        // transition: all 0.3s linear;
      }
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
