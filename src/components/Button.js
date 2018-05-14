import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { spacing } from "utils/variables";

const StyledButton = styled("button")`
  width: 128px;
  padding: ${spacing.xs};
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default Button;
