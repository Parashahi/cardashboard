import React from "react";
import styled from "styled-components";

//components
import ProfileCustomer from "../../core/ProfileCustomer";

//icons
import icon from "../../../assets/icons/Index";

function CustomerPaper() {
  const CustomerPaper = styled.div`
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 20px;
    width: 30%;

    .title {
      font-size: 13px;
      font-weight: 600;
    }

    .titleText {
      font-size: 11px;
      color: grey;
      padding: 5px 0 20px;
    }

    button {
      color: grey;
      display: inline-block;
      text-transform: uppercase;
      cursor: pointer;
      font-size: 10px;
      border: none;
      background: transparent;
      padding: 10px 10px 0px 0px;
      display: flex;

      &:hover {
        color: black;
      }

      span {
        padding: 2px 0 0;
      }

      svg {
        font-size: 14px;
        padding: 0 0 0 5px;
      }
    }
  `;
  return (
    <CustomerPaper>
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
    </CustomerPaper>
  );
}

export default CustomerPaper;
