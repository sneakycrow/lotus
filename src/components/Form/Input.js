import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChangeHandler, value, placeholder, type, name }) => (
  <input
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
