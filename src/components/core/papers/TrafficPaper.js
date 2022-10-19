import React from "react";

import { TraffPaper } from "../../../assets/Style";

function TrafficPaper() {
  return (
    <TraffPaper>
      <div className="head">
        <h1>Traffic Sources</h1>
        <select>
          <option>Last 7 Days</option>
          <option>Last 1 Month</option>
          <option>Last 1 Year</option>
        </select>
      </div>

      <div className="barTitle">
        <p>Direct</p>
        <p>1,42,000</p>
      </div>

      <div className="bar">
        <div className="progress1"></div>
      </div>

      <div className="barTitle">
        <p>Social Media</p>
        <p>91,000</p>
      </div>

      <div className="bar">
        <div className="progress2"></div>
      </div>

      <div className="barTitle">
        <p>Referral</p>
        <p>62,000</p>
      </div>

      <div className="bar">
        <div className="progress3"></div>
      </div>

      <div className="barTitle">
        <p>Twitter</p>
        <p>22,000</p>
      </div>

      <div className="bar">
        <div className="progress4"></div>
      </div>
    </TraffPaper>
  );
}

export default TrafficPaper;
