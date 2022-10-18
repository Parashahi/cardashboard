import React from "react";

//MUI
import { Avatar } from "@mui/material";

import styledComponents from "styled-components";

function ProfileCustomer(props) {
  const Profile = styledComponents.div`
        display: flex;

        gap: 15px;
        min-width: 100%;
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

            .info{
              width: 70%;
              word-break: break-all;
            }

            .price{
                text-align: right;
        
            }
        }

        @media screen and (max-width: 1280px ){
         
  
  
          .fullDetails{

              // .info{
              //   word-break: break-all;
              //   width: 60%;
              // }
  
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
