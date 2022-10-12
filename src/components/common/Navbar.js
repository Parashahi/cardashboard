import React from "react";

//Material UI
import Stack from "@mui/material/Stack";
import { Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";

//Icons import
import { CgSearch } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";

//Image import
import Img from "../../assets/images/Index.js";

//Style import
import "../common/NavbarStyle.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
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
                <FiMail fontSize={20} />
              </Badge>

              <HiOutlineBell className="bell" />

              <Avatar sx={{ width: 30, height: 30 }} />
            </Stack>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
