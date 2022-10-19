import React from "react";

//Style
import "./SideNavStyle.scss";

//small components
import MenuItem from "../core/MenuItem";
import RectangleBigBtn from "../core/buttons/RectangleBigBtn";

//Icons
import icon from "../../assets/icons/Index";

//Material UI
import { Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function SideNav() {
  return (
    <section className="sideNav">
      <div className="upperMenu">
        <RectangleBigBtn
          bgcolor="#4f46e5"
          color="white"
          name="Connect New Account"
          icon={icon.PlusIcon}
        />

        <div className="profile">
          <Badge className="badge" badgeContent={2} color="primary">
            <i className="mail">{icon.MailIcon}</i>
          </Badge>

          <Badge className="badge" badgeContent={0} color="primary">
            <i className="bell">{icon.BellIcon}</i>
          </Badge>

          <Avatar sx={{ width: 30, height: 30 }} />
        </div>

        <div className="menuItems">
          <MenuItem icon={icon.HomeIcon} name="Dashboard" />
          <p>ANALYTICS</p>
          <MenuItem icon={icon.BarGraphIcon} name="Performance" />
          <MenuItem icon={icon.PointerIcon} name="Hotjar" />
          <p>SUPPORT</p>
          <MenuItem icon={icon.TicketIcon} name="Tickets" />
          <MenuItem icon={icon.PersonIcon} name="Agents" />
          <MenuItem icon={icon.DoublePersonIcon} name="Customers" />
          <p>SHOP</p>
          <MenuItem icon={icon.FolderIcon} name="Products" />
          <MenuItem icon={icon.BellIcon} name="Orders" />
          <MenuItem icon={icon.ReportIcon} name="Reports" />
        </div>
      </div>

      <div className="lowerMenu">
        <MenuItem icon={icon.SettingIcon} name="Settings" />
        <MenuItem icon={icon.LogoutIcon} name="Logout" />
      </div>
    </section>
  );
}

export default SideNav;
