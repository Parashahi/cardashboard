import React from "react";
import styledComponents from "styled-components";

//Component
import RectangleMedBtn from "../buttons/RectangleMedBtn";

//Icon
import icon from "../../../assets/icons/Index";

//Image
import img from "../../../assets/images/Index";

function SaleReportPaper() {
  const SalesReport = styledComponents.div`

  background: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 20px;

  .head {
    align-items: center;
    height: 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    p {
      font-weight: bold;
      font-size: 16px;
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
        font-size: 11px;
        font-weight: 600;
        color: grey;

        input {
          opacity: 0;
          width: 75px;
          height: inherit;

          &:hover + .selected {
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 5px 0;
            top: 0px;
            left: 0;
          }

          &:checked + .selected {
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 5px 0;
            top: 0px;
            color: black;
          }
        }
        .selected {
          padding: 5px 0;
          width: 100%;
          position: absolute;
          left: 0;
          top: 1px;
        }
      }
    }

    button {
      font-size: 11px;
      font-weight: 600;
    }
  }

  .chart {
    position: relative;
    width: 100%;

    .lines {
      width: 100%;
      margin: 32px 0 0px;
      height: 1px;
      background: lightgrey;
    }

    img {
      position: absolute;
      top: -27px;
      width: 100%;
      height: 160px;
    }

    ul {
      margin: 8px 0;
      font-size: 11px;
      color: grey;
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 1280px){
    .head {
      
      .radioGroup {
       
        .radioBtn {
       
          input {
            width: 60px;
          }
        }
      }   
    }
  }

  @media screen and (max-width: 740px ){
    .head {

      p{
        font-size: 14px;
      }
      .radioGroup {

        .radioBtn {
        
          input {
            width: 60px;
          
          }
        }
      }   
    }
  }

  @media screen and (max-width: 570px ){
    .head {
      align-items: center;
      height: 60px;
      position: relative;
      
      .radioGroup { 
        position: absolute;
        top: 0;
        left: 133px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;

        .radioBtn {
          
          input {          

            &:hover + .selected {
              padding: 5px 0;
              
            }

            &:checked + .selected {
              padding: 5px 0
            }
          }
          .selected {
            padding: 5px 0;
          
          
          }
        }   
      }
    }
  }

  @media screen and (max-width: 460px ){
    .head {

      p{
        font-size: 12px;
      }

      .radioGroup { 
        left: 95px;
       

        .radioBtn {
          
          input {    
            width: 55px;      

          }
          
          .selected {
            font-size: 10px;
          }
        }   
      }
      
      button{
        font-size: 10px;
        width: 60px;
      }   
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
