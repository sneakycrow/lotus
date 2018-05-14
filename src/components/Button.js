import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { spacing } from "utils/variables";

const StyledButton = styled("button")`
  width: 128px;
  padding: ${spacing.xs};
  font-weight: 700;
  font-family: "Lato", sans-serif;
  background-color: ${props => (props.disabled ? `red` : `blue`)};
`;

const Button = ({ children, onClick, disabled, secondary }) => {
  // Put some props inside this object, so that we can spread them onto the StyledButton tag below
  const buttonProps = {
    disabled,
    secondary
  };
  return (
    <StyledButton onClick={onClick} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  secondary: false
};

export default Button;
