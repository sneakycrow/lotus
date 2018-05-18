import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { darken } from "polished";
import { spacing, pallette } from "utils/variables";

const Container = styled("div")`
  height: 64px;
  box-shadow: 0 4px 2px ${darken(0.2, pallette.white)};
  background-color: ${pallette.white};
  display: grid;
  grid-template-columns: 25% auto 25%;
  padding: ${spacing.xs};
`;

const Navigation = styled("div")`
  grid-column-start: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = ({ navItems }) => (
  <Container>
    <Navigation>{navItems.map(nav => nav)}</Navigation>
  </Container>
);

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navbar;
