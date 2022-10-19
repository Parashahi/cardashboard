import React from "react";

//style
import { SalesReport } from "../../../assets/Style";

//Component
import RectangleMedBtn from "../buttons/RectangleMedBtn";

//Icon
import icon from "../../../assets/icons/Index";

//Image
import img from "../../../assets/images/Index";

function SaleReportPaper() {
  return (
    <SalesReport>
      <div className="head">
        {/* <div className="title"> */}
        <p>Sales Report</p>
        {/* </div> */}

        <div className="radioGroup">
          <label className="radioBtn">
            <input type="radio" value={1} name="a" />
            <span className="selected">12 Months</span>
          </label>

          <label className="radioBtn">
            <input type="radio" value={1} name="a" />
            <span className="selected">6 Months</span>
          </label>

          <label className="radioBtn">
            <input type="radio" value={1} name="a" />
            <span className="selected">30 Days</span>
          </label>

          <label className="radioBtn">
            <input type="radio" value={1} name="a" />
            <span className="selected">7 Days</span>
          </label>
        </div>

        <RectangleMedBtn
          icon={icon.ReportIcon}
          bgColor="transparent"
          name="Export PDF"
        />
      </div>

      <div className="chart">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <img src={img.ChartImg} alt="" />
        <ul>
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
      </div>
    </SalesReport>
  );
}

export default SaleReportPaper;
