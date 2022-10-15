import React from "react";
import styled from "styled-components";

//Component
import RectangleMedBtn from "./buttons/RectangleMedBtn";

//Icon
import icon from "../../assets/icons/Index";

//Image
import img from "../../assets/images/Index";

function SaleReportPaper() {
  const SalesReport = styled.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 70%;
    padding: 20px;

    .head {
      align-items: center;
      height: 30px;
      display: flex;
      width: 100%;
      justify-content: space-between;

      p {
        font-weight: bold;
        font-size: 13px;
        ${"" /* padding: 5px 20px 0 0; */}
      }
      .radioGroup {
        height: 25px;
        display: flex;
        gap: 5px;
        align-items: center;

        .radioBtn {
          height: inherit;
          position: relative;
          text-align: center;
          font-size: 10px;
          font-weight: 600;
          color: grey;
          box-sizing: border-box;

          input {
            opacity: 0;
            width: 80px;
            height: inherit;

            &:hover + .selected {
              border: 1px solid lightgrey;
              box-sizing: border-box;
              border-radius: 5px;
              padding: 6px 0 5px;
              top: -1px;
              left: 0;
            }

            &:checked + .selected {
              border: 1px solid lightgrey;
              border-radius: 5px;
              padding: 6px 0 5px;
              top: -1px;
              color: black;
            }
          }
          .selected {
            box-sizing: border-box;
            padding: 6px 0 5px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0px;
          }
        }
      }

      button {
        font-size: 10px;
        font-weight: 600;
      }
    }

    .chart {
      position: relative;
      width: 100%;

      .lines {
        width: 100%;
        margin: 30px 0;
        height: 1px;
        background: lightgrey;
      }

      img {
        position: absolute;
        top: -30px;
        width: 100%;
        height: 160px;
      }

      ul {
        padding: 20px 0 0;
        font-size: 12px;
        color: grey;
        display: flex;
        justify-content: space-between;
      }
    }
  `;
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
        {/* <Chart
          type="line"
          data={{
            labels: ["sjajd", "oaniod", "aoindn", "sinad"],
            datasets: [
              {
                data: [19, 3, 3, 3],
                backgroundColor: "#0d47a1",
              },
              {
                label: "react",
                data: [12],
                backgroundColor: "#0d47a1",
              },
              {
                label: "react",
                data: [7],
                backgroundColor: "#0d47a1",
              },
              {
                label: "react",
                data: [2],
                backgroundColor: "#0d47a1",
              },
            ],
          }}
          options={{
            layout: {
              paddingTop: 50,
            },
            maintainAspectRatio: false,
            // indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false,
                  // drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },

              y: {
                grid: {
                  // display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        /> */}
      </div>
    </SalesReport>
  );
}

export default SaleReportPaper;
