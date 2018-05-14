import React, { Component } from "react";
import styled from "react-emotion";
import Input from "components/Form/Input";
import Button from "components/Button";
import { spacing } from "utils/variables";

const Container = styled("div")`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${spacing.sm};
  width: 25%;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    return (
      <Container>
        <LoginContainer>
          <h2>Login</h2>
          <Input
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChangeHandler={this.onChangeHandler}
          />
          <Input
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChangeHandler={this.onChangeHandler}
            type="password"
          />
          <Button>Submit</Button>
        </LoginContainer>
      </Container>
    );
  }
}

export default Login;
