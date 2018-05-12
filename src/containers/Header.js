import React from "react";
import Navbar from "components/Navigation/Navbar";
import NavItem from "components/Navigation/NavItem";

const Header = () => {
  const routes = [
    <NavItem name="Home" link="/" key="1" />,
    <NavItem name="About" link="/about" key="2" />,
    <NavItem name="Sign In" link="/sign-in" key="3" action />
  ];
  return <Navbar navItems={routes} />;
};

export default Header;
