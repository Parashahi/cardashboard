import React from "react";
import styledComponents from "styled-components";
import OvalSmallBtn from "./buttons/OvalSmallBtn";

function TransactionOptions(props) {
  const Option = styledComponents.div`

    width: 100%;
    padding: 0px 20px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border-top: 0.5px solid lightgrey;
    border-bottom: 0.5px solid lightgrey;
    font-size: 11px;
    text-transform: capitalize;

    // &:hover{
    //     border-top: 0.5px solid lightgrey;
    // }

    span{
        font-weight: 600;
    }

    .grey{
        color: grey;
    }


    .status{
        width: 15%;
    }

    .cardDetails{
        text-align: left;
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .Amnt{
        text-align: left;
        width: 15%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .Site{
        width: 10%;
        text-align: left;
    }
    
    .dotsBtn{
        button {
            border: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: transparent;
            cursor: pointer;
            display: flex;
        
            &:hover {
                background: #fafafa;
            }
        
            .dots {
                width: 4px;
                height: 4px;
                background: grey;
                display: block;
                border: none;
                border-radius: 50%;
                margin: 8px 0px 0px 2px;
            }
        }
    }

    `;
  return (
    <Option>
      <div className="status">
        <OvalSmallBtn
          name={props.status}
          bColor={props.bColor}
          fColor={props.fColor}
        />
      </div>

      <div className="cardDetails">
        <span>{props.card}</span>
        <p className="grey">{props.payment}</p>
      </div>

      <div className="Amnt">
        <span>{props.price}</span>
        <p className="grey">{props.date}</p>
      </div>

      <div className="Site">
        <p className="grey">{props.site}</p>
      </div>

      <div className="dotsBtn">
        <button>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </button>
      </div>
    </Option>
  );
}

export default TransactionOptions;
