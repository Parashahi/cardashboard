import React from "react";

//Component
import TodayDetailsPaper from "../core/papers/TodayDetailsPaper";

//Icon
import icon from "../../assets/icons/Index";

//Style
import "./HomeMainConStyle.scss";

//components
import TrafficPaper from "../core/papers/TrafficPaper";
import SaleReportPaper from "../core/papers/SaleReportPaper";
import CustomerPaper from "../core/papers/CustomerPaper";
import TransactionPaper from "../core/papers/TransactionPaper";

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
            num="-3.25%"
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
            num="-3.25%"
            numIcon={icon.DownArrowIcon}
            color="red"
          />
        </div>
      </div>

      <div className="MidSection">
        <SaleReportPaper />
        <TrafficPaper />
      </div>

      <div className="LastSection">
        <TransactionPaper />
        <CustomerPaper />
      </div>
    </section>
  );
}

export default HomeMainContent;
