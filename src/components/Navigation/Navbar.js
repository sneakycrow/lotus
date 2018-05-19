import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { darken } from "polished";
import { spacing, pallette } from "utils/variables";

const Container = styled("div")`
  height: 64px;
  background-color: ${darken(0.1, pallette.white)};
  display: grid;
  grid-template-columns: 25% auto 25%;
  padding: ${spacing.xs};
`;

const Navigation = styled("div")`
  grid-column-start: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  background-color: inherit;
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
