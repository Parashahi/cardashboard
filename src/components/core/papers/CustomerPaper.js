import React from "react";

//components
import ProfileCustomer from "../../core/ProfileCustomer";

//icons
import icon from "../../../assets/icons/Index";

//style
import { CustPaper } from "../../../assets/Style";

function CustomerPaper() {
  return (
    <CustPaper>
      <p className="title">Recent Customers</p>
      <p className="titleText">lorenianidono</p>

      <ProfileCustomer
        fullName="Parash Mani Shahi"
        fname="Parash"
        amnt="Rs.10,000"
        email="parash.shahi7@gmail.xom"
      />
      <ProfileCustomer
        fullName="Parash Mani Shahi"
        fname="Parash"
        amnt="Rs.10,000"
        email="parash.shahi7@gmail.xom"
      />
      <ProfileCustomer
        fullName="Parash Mani Shahi"
        fname="Parash"
        amnt="Rs.10,000"
        email="parash.shahi7@gmail.xom"
      />
      <ProfileCustomer
        fullName="Parash Mani Shahi"
        fname="Parash"
        amnt="Rs.10,000"
        email="parash.shahi7@gmail.xom"
      />

      <button>
        <span>See all customers</span>
        {icon.RightArrowIcon}
      </button>
    </CustPaper>
  );
}

export default CustomerPaper;
