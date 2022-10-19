import React from "react";

//MUI
import { Avatar } from "@mui/material";

//style
import { Profile } from "../../assets/Style";

function ProfileCustomer(props) {
  return (
    <Profile>
      <Avatar sx={{ height: 30, width: 30 }} />
      <div className="fullDetails">
        <div className="info">
          <p className="black">{props.fullName}</p>
          <p className="grey">{props.email}</p>
        </div>
        <div className="price">
          <p className="black">{props.amnt}</p>
          <p className="grey">{props.fname}</p>
        </div>
      </div>
    </Profile>
  );
}

export default ProfileCustomer;
