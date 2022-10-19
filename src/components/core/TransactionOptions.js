import React from "react";

import OvalSmallBtn from "./buttons/OvalSmallBtn";

//style
import { Option } from "../../assets/Style";

function TransactionOptions(props) {
  return (
    <Option fColor={props.fColor}>
      <div className="status">
        <OvalSmallBtn
          name={props.status}
          bgcolor={props.bColor}
          fcolor={props.fColor}
        />
      </div>

      <div className="cardDetails">
        <span>{props.card}</span>
        <p className="grey">{props.payment}</p>
      </div>

      <div className="amnt">
        <span>{props.price}</span>
        <p className="grey">{props.date}</p>
      </div>

      <div className="site">
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
