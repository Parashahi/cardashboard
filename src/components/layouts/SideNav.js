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
      <div className="SideNavMain">
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
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <p>ANALYTICS</p>
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <p>ANALYTICS</p>
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
            <MenuItem icon={icon.HomeIcon} name="Dashboard" />
          </div>
        </div>

        <div className="LowerMenu">
          <MenuItem icon={icon.HomeIcon} name="Dashboard" />
          <MenuItem icon={icon.HomeIcon} name="Dashboard" />
        </div>
      </div>
    </section>
  );
}

export default SideNav;
