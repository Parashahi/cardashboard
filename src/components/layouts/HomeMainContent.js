import React from "react";

//Component
import TodayDetailsPaper from "../core/TodayDetailsPaper";

//Icon
import icon from "../../assets/icons/Index";

//Style
import "./HomeMainConStyle.scss";

function HomeMainContent() {
  return (
    <section className="MainContent">
      <div className="TodaysDetails">
        <p>
          <span>Hey Parash - </span> here's what happening with your store
          today.
        </p>

        <div className="PapersMain">
          <TodayDetailsPaper
            title="TODAY'S SALE"
            amnt="$12,000"
            num="+3.25%"
            numIcon={icon.UpArrowIcon}
            color="#3AF90B"
          />

          <TodayDetailsPaper
            title="TOTAL SALES"
            amnt="$120,000"
            num="+3.25%"
            numIcon={icon.DownArrowIcon}
            color="red"
          />

          <TodayDetailsPaper
            title="TOTAL ORDERS"
            amnt="$84,233"
            num="+3.25%"
            numIcon={icon.UpArrowIcon}
            color="#3AF90B"
          />

          <TodayDetailsPaper
            title="TOTAL CUSTOMERS"
            amnt="$33,889"
            num="+3.25%"
            numIcon={icon.DownArrowIcon}
            color="red"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeMainContent;
