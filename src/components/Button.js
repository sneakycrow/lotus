import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";
import { darken } from "polished";
import { spacing, pallette } from "utils/variables";

const types = {
  primary: css`
    background-color: ${pallette.primary};
    border: 2px solid ${darken(0.2, pallette.primary)};
  `,
  secondary: css`
    background-color: ${pallette.white};
    border: 2px solid ${pallette.secondary};
    color: ${pallette.black};
  `,
  disabled: css`
    background-color: ${darken(0.6, pallette.white)};
    border: 2px solid ${darken(0.8, pallette.white)};
  `
};

const StyledButton = styled("button")`
  width: 128px;
  height: 40px;
  padding: ${spacing.xs};
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: ${pallette.white};
  text-transform: uppercase;
  ${props => types[props.type]};
  &:hover {
    cursor: pointer;
  }
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
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  type: "primary",
  isDisabled: false,
  isLoading: false
};

export default Button;
