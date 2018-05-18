import React from "react";
import Navbar from "components/Navigation/Navbar";
import NavItem from "components/Navigation/NavItem";
import Button from "components/Button";

const Header = () => {
  const routes = [
    <NavItem name="Home" link="/" key="home" />,
    <NavItem name="About" link="/about" key="about" />,
    <Button key="login">Login</Button>
  ];
  return <Navbar navItems={routes} />;
};

export default Header;
