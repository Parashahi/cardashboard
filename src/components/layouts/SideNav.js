import React from "react";

//Style
import "./SideNavStyle.scss";

//small components
import MenuItem from "../core/MenuItem";
import RectangleBigBtn from "../core/buttons/RectangleBigBtn";

//Icons
import icon from "../../assets/icons/Index";

function SideNav() {
  return (
    <section className="sideNav">
      <div className="UpperMenu">
        <RectangleBigBtn
          bgcolor="#4f46e5"
          color="white"
          name="Connect New Account"
          icon={icon.PlusIcon}
        />

        <div className="MenuItems">
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

      <div className="LowerMenu">
        <MenuItem icon={icon.SettingIcon} name="Settings" />
        <MenuItem icon={icon.LogoutIcon} name="Logout" />
      </div>
    </section>
  );
}

export default SideNav;
