import React from "react";
import Menu from "./menu";
import Logo from "../logo";
import UserPanel from "./userpanel";

const Header = () => {
  return (
    <div className="text-black flex justify-between items-center">
      <Menu />
      <Logo />
      <UserPanel />
    </div>
  );
};

export default Header;
