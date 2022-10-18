import React from "react";
import styledComponents from "styled-components";
import OvalSmallBtn from "./buttons/OvalSmallBtn";

function TransactionOptions(props) {
  const Option = styledComponents.div`

    min-width: 100%;
    padding: 15px 20px 16px;
    display: flex;
    align-items: center;

    gap: 40px;
    // justify-content: space-between;
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
      min-width: 15%;


      button{
        font-size: 10px;  
        padding: 4px 8px;

        .dot {
          margin: 4px 5px 0 0;
          background: ${props.fColor};
          height: 5px;
          width: 5px;
          border-radius: 50%;
        }
      }
    }

    .cardDetails{
      text-align: left;
      min-width: 28%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .Amnt{
      text-align: left;
      min-width: 15%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .Site{
      min-width: 9%;
      text-align: left;
    }
    
    .dotsBtn{
      button {
        border: none;
        min-height: 20px;
        min-width: 20px;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
        display: flex;
    
        &:hover {
            background: #fafafa;
        }
    
        .dots {
            min-width: 4px;
            max-height: 4px;
            background: grey;
            display: block;
            border: none;
            border-radius: 50%;
            margin: 8px 0px 0px 2px;
        }
      }
    }

    @media screen and (max-width: 1280px){
  
  
      .cardDetails{
        
        min-width: 26%;

      }
      
    }

    @media screen and (max-width: 920px){
  
  
      .cardDetails{
        
        min-width: 34%;

      }
      
    }



    @media screen and (max-width: 740px ){
    
  
      gap: 35px;
     
      .status{
          min-width: 17%;
      }
  
      .cardDetails{
          
          min-width: 27%;
          
      }
    }

    @media screen and (max-width: 570px ){
     
      gap: 30px;

      .status{
        // min-width: 15%;

        button{
          font-size: 9px;

          .dot {
            margin: 3px 5px 0 0;
           
          }
        }

      }

      .cardDetails{
        
        min-width: 22%;
        
      }

      .Amnt{
      
        min-width: 15%;
     
      }

      .Site{
        // min-width: 9%;
      
      }
    }

    @media screen and (max-width: 460px ){
    
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 20px; 
  
      .Site{
        p{
          font-weight: 600;
          color: black;
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
