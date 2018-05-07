import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import styled from "react-emotion";
import Header from "containers/Header";
import Home from "containers/pages/Home";
import About from "containers/pages/About";
import { hot } from "react-hot-loader";

const Main = styled("main")`
  margin-top: 64px;
`;

const App = () => (
  <Fragment>
    <Header />
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Main>
  </Fragment>
);

export default hot(module)(App);
