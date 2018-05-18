import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "react-emotion";
import { spacing } from "utils/variables";

const NavLink = styled(Link)`
  padding: ${spacing.xs} ${spacing.sm};
  margin: 0 ${spacing.xs};
  text-decoration: none;
  color: black;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 2px;
`;

const NavItem = ({ name, link, type }) => (
  <NavLink to={link} type={type}>
    {name}
  </NavLink>
);

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string
};

NavItem.defaultProps = {
  type: ""
};

export default NavItem;
