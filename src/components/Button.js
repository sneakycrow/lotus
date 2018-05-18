import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";
import { darken } from "polished";
import { spacing, pallette } from "utils/variables";

const types = {
  primary: css`
    background-color: ${pallette.primary};
    border: 1px solid ${darken(0.2, pallette.primary)};
  `,
  secondary: css`
    background-color: transparent;
    border: 2px solid ${pallette.secondary};
  `,
  disabled: css`
    background-color: ${darken(0.8, pallette.white)};
    border: 1px solid ${pallette.black};
  `
};

const StyledButton = styled("button")`
  width: 128px;
  padding: ${spacing.xs};
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: ${pallette.white};
  ${props => types[props.type]};
`;

const Button = ({ children, onClick, type, isDisabled }) => {
  const props = {
    onClick: isDisabled ? () => {} : onClick,
    type: isDisabled ? "disabled" : type
  };
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  type: "primary",
  isDisabled: false
};

export default Button;
