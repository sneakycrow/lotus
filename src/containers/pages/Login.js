import React, { Component } from "react";
import styled from "react-emotion";
import Input from "components/Form/Input";

const Container = styled("div")`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
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
        />
      </Container>
    );
  }
}

export default Login;
