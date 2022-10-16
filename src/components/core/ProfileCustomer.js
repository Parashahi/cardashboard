import React from "react";

//MUI
import { Avatar } from "@mui/material";

import styledComponents from "styled-components";

function ProfileCustomer(props) {
  const Profile = styledComponents.div`
        display: flex;
        gap: 10px;
        width: 100%;
        font-size: 11px;
        cursor: pointer;
        padding: 10px 0;

        .grey{
            padding: 4px 0 0;
            color: grey;
        }
        
        .black{
          font-weight: 600;
        }

        .fullDetails{
            width: 100%;
            display: flex;
            justify-content: space-between;

            .price{
                text-align: right;
        
            }
        }


    `;
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
