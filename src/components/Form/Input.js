import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { pallette, spacing, globalVariables } from "utils/variables";

const StyledInput = styled("input")`
  border-radius: 3px;
  border: 2px solid ${pallette.gray};
  padding: ${spacing.xs} ${spacing.xs};
  font-size: ${globalVariables.fontSize};
  margin: ${spacing.xs} 0;
  &::placeholder {
    font-weight: bold;
    color: ${pallette.lightGray};
  }
`;

const Input = ({ onChangeHandler, value, placeholder, type, name }) => (
  <StyledInput
    name={name}
    type={type}
    onChange={onChangeHandler}
    value={value}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired
};

Input.defaultProps = {
  placeholder: "",
  type: "text"
};

export default Input;
