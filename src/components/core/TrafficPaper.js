import React from "react";
import styled from "styled-components";

//Chart
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { BiNoEntry } from "react-icons/bi";

function TrafficPaper() {
  const TrafficPaper = styled.div`
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 15px 15px 25px;
    width: 33%;

    .head {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 14px;
      }

      select {
        outline: none;
        border: none;
        background: transparent;

        option {
          outiline: none;
        }
      }
    }
    .barTitle {
      font-size: 14px;
      font-weight: 600;
      padding: 20px 0 10px;
      display: flex;
      justify-content: space-between;
    }
    .bar {
      width: 100%;
      background: lightgrey;
      height: 5px;
      border-radius: 5px;
      position: relative;

      div {
        position: absolute;
        background: #4f46e5;
        height: 5px;
        border-radius: 5px;
      }

      .progress1 {
        width: 80%;
      }

      .progress2 {
        width: 60%;
      }

      .progress3 {
        width: 40%;
      }

      .progress4 {
        width: 20%;
      }
    }
  `;
  return (
    <TrafficPaper>
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
    </TrafficPaper>
  );
}

export default TrafficPaper;
