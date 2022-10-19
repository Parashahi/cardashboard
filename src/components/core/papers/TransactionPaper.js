import React from "react";

//icons
import icon from "../../../assets/icons/Index";
import TransactionOptions from "../TransactionOptions";

//style
import { TransacPaper } from "../../../assets/Style";

function TransactionPaper() {
  return (
    <TransacPaper>
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
    </TransacPaper>
  );
}

export default TransactionPaper;
