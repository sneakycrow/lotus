import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "react-emotion";

const NavLink = styled(Link)`
  padding: 8px 16px;
  margin: 0 8px;
  text-decoration: none;
  color: black;
`;

const NavItem = ({ name, link }) => <NavLink to={link}>{name}</NavLink>;

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default NavItem;
