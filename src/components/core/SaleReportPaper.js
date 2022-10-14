import React from "react";
import styled from "styled-components";

//Component
import RectangleMedBtn from "./buttons/RectangleMedBtn";

//Icon
import icon from "../../assets/icons/Index";
import { Chart } from "react-chartjs-2";

function SaleReportPaper() {
  const SalesReport = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 65%;
    padding: 15px 20px;

    .head {
      display: flex;
      // justify-content: space-between;

      p {
        font-weight: bold;
        // margin-right: 40px;
        font-size: 14px;
        padding: 3px 50px 0 0;
      }

      // .radioGroup {
      .radioBtn {
        // border: 1px solid;
        // margin: 0 5px;
        border-radius: 5px;
        position: relative;
        text-align: center;
        font-size: 12px;
        font-weight: 600;

        input {
          opacity: 0;
          width: 70px;
          padding: 5px 0;

          &:checked + .selected {
            border: 1px solid lightgrey;
            border-radius: 5px;
            top: -1px;
          }
        }
        .selected {
          box-sizing: border-box;
          padding: 5px 0;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      // }

      button {
        font-weight: 600;
        margin-left: 45px;
      }
    }
  `;
  return (
    <SalesReport>
      <div className="head">
        <p>Sales Report</p>

        {/* <div className="radioGroup"> */}
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
        {/* </div> */}

        <RectangleMedBtn
          icon={icon.ReportIcon}
          bgColor="transparent"
          name="Export PDF"
        />
      </div>

      <div className="">
        <Chart
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
        />
      </div>
    </SalesReport>
  );
}

export default SaleReportPaper;
