import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ navItems }) => <div>{navItems.map(nav => nav)}</div>;

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navbar;
