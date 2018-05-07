import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Container = styled("div")`
  width: 100%;
  position: absolute;
  top: 0;
  height: 64px;
  box-shadow: 0 4px 2px #dedede;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = ({ navItems }) => (
  <Container>{navItems.map(nav => nav)}</Container>
);

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navbar;
