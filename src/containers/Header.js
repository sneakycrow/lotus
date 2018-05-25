import React, { Fragment, Component } from "react";
import styled from "react-emotion";
import axios from "axios";
import Navbar from "components/Navigation/Navbar";
import NavItem from "components/Navigation/NavItem";
import Button from "components/Button";
import Modal from "components/Modal";
import Input from "components/Form/Input";

const Login = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isModalShown: false,
      username: "",
      password: "",
      isSubmitting: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit() {
    const { username, password } = this.state;
    axios
      .post("/api/login", {
        username,
        password
      })
      // Temporarily disable console log lines
      // TODO: Remove these lines
      .then(res => console.log(res)) // eslint-disable-line no-console
      .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  handleToggleModal() {
    this.setState(state => ({ isModalShown: !state.isModalShown }));
  }

  render() {
    const routes = [
      <NavItem name="Home" link="/" key="home" />,
      <NavItem name="About" link="/about" key="about" />,
      <Button key="login" type="secondary" onClick={this.handleToggleModal}>
        Login
      </Button>
    ];
    return (
      <Fragment>
        <Navbar navItems={routes} />
        <Modal
          isModalShown={this.state.isModalShown}
          handleToggleModal={this.handleToggleModal}
        >
          <Login>
            <h3>Login</h3>
            <Input
              onChangeHandler={this.handleInputChange}
              value={this.state.username}
              placeholder="Username"
              name="username"
            />
            <Input
              onChangeHandler={this.handleInputChange}
              value={this.state.password}
              placeholder="Password"
              name="password"
              type="password"
            />
            <Button
              onClick={this.handleSubmit}
              isLoading={this.state.isSubmitting}
            >
              Submit
            </Button>
          </Login>
        </Modal>
      </Fragment>
    );
  }
}

export default Header;
