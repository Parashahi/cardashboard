import React from "react";
import styledComponents from "styled-components";

//icons
import icon from "../../../assets/icons/Index";
import TransactionOptions from "../TransactionOptions";

function TransactionPaper() {
  const TransactionPaper = styledComponents.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    min-width: 68%;
    padding: 20px 0 0;

    .head {
      display: flex;
      justify-content: space-between;
      padding: 0 20px 15px;

      p {
        color: black;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        flex-direction: column;

        .grey {
          padding: 5px 0 0;
          font-size: 13px;
          color: grey;
          font-weight: 100;
        }
      }

      button {
        text-transform: capitalize;
        color: #4f46e5;
        cursor: pointer;
        font-size: 11px;
        border: none;
        background: transparent;
        display: flex;

        &:hover {
          color: grey;
        }

        svg {
          font-size: 13px;
          padding: 3px 0 0 5px;
        }
      }
    }

    @media screen and (max-width: 460px ){

      .head {
        button {
          svg {
            font-size: 20px;
            padding: 7px 0 0 0px;
          }
        }
      }
    }


  `;
  return (
    <TransactionPaper>
      <div className="head">
        <p>
          Transactions <span className="grey">hello adado eianfakdn eoaon</span>
        </p>

        <button>
          See all Transactions
          {icon.RightArrowIcon}
        </button>
      </div>

      <TransactionOptions
        status="completed"
        bColor="#dcfce7"
        fColor="green"
        card="Visa card ****9883"
        payment="card payment"
        price="Rs.8,733"
        date="Mar 1, 2022"
        site="Valorant"
      />
      <TransactionOptions
        status="completed"
        bColor="#dcfce7"
        fColor="green"
        card="master card ****1663"
        payment="card payment"
        price="Rs.88,982"
        date="Mar 18, 2022"
        site="Amazon"
      />
      <TransactionOptions
        status="pending"
        bColor="#fef9c3"
        fColor="orange"
        card="Account ****3583"
        payment="bank payment"
        price="Rs.7,743"
        date="Mar 30, 2022"
        site="Twitch"
      />
      <TransactionOptions
        status="canceled"
        bColor="#fee2e2"
        fColor="red"
        card="amex card ****5663"
        payment="card payment"
        price="Rs.3,232"
        date="Mar 1, 2022"
        site="Netflix"
      />
    </TransactionPaper>
  );
}

export default TransactionPaper;
