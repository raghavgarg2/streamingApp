import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const menu = useSelector((store) => store.menu.isMenuOpen);
  return (
    <div className="flex">
      {menu === true ? <SideBar /> : null}

      <MainContainer />
    </div>
  );
};

export default Body;
