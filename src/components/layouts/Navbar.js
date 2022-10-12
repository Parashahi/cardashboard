import React from "react";

//Material UI
import Stack from "@mui/material/Stack";
import { Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";

//Icons import
import icon from "../../assets/icons/Index";

//Image import
import Img from "../../assets/images/Index.js";

//Style import
import "./NavbarStyle.scss";

function Navbar() {
  return (
    <div className="navbarMain">
      <div className="logo">
        <img src={Img.LogoImg} alt="" />
      </div>

      <div className="searchbar">
        <input placeholder="Type to search" />
      </div>

      <div className="profile">
        <Stack direction="row" spacing={2}>
          <Badge className="mail" badgeContent={2} color="primary">
            <i>{icon.MailIcon}</i>
          </Badge>

          <i className="bell">{icon.BellIcon}</i>

          <Avatar sx={{ width: 30, height: 30 }} />
        </Stack>
      </div>
    </div>
  );
}

export default Navbar;
