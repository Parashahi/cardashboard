import React from "react";

//Material UI
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
        <input placeholder="Type to Search" />
      </div>

      <div className="profile">
        <Badge className="badge" badgeContent={2} color="primary">
          <i className="mail">{icon.MailIcon}</i>
        </Badge>

        <Badge className="badge" badgeContent={0} color="primary">
          <i className="bell">{icon.BellIcon}</i>
        </Badge>

        <Avatar sx={{ width: 30, height: 30 }} />
      </div>
    </div>
  );
}

export default Navbar;
