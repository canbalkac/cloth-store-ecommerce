import React from "react";
import Menu from "./menu";
import Logo from "../logo";
import UserPanel from "./userpanel";

const Header = () => {
  return (
    <header className="text-black flex justify-between items-center max-w-[1280px]">
      <Menu />
      <Logo />
      <UserPanel />
    </header>
  );
};

export default Header;
