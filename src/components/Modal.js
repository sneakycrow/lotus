import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { pallette, spacing } from "utils/variables";

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: ${pallette.black};
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  ${props => !props.isShown && "display: none"};
`;

const Content = styled("div")`
  max-width: 75%;
  max-height: 75%;
  min-width: 25%;
  min-height: 25%;
  padding: ${spacing.sm};
  z-index: 10;
`;

const CloseButton = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${spacing.xs};
  background-color: transparent;
`;

const Modal = ({ children, isModalShown, handleToggleModal }) => (
  <Container isShown={isModalShown}>
    <CloseButton onClick={handleToggleModal}>
      <i className="fas fa-window-close" />
    </CloseButton>
    <Content>{children}</Content>
  </Container>
);

Modal.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleToggleModal: PropTypes.func.isRequired
};

export default Modal;
