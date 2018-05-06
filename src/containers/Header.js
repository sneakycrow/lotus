import React from "react";
import Navbar from "components/Navigation/Navbar";
import NavItem from "components/Navigation/NavItem";

const Header = () => {
  const routes = [
    <NavItem name="Home" link="/" key="1" />,
    <NavItem name="About" link="/about" key="2" />
  ];
  return <Navbar navItems={routes} />;
};

export default Header;
