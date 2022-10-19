import React from "react";

//Layouts
import HomeMainContent from "../layouts/HomeMainContent";
import SideNav from "../layouts/SideNav";

import { Home } from "../../assets/Style";

function HomeMain() {
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
