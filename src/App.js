import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled from "react-emotion";
import Header from "containers/Header";
import { Home, About } from "containers/pages";
import { spacing } from "utils/variables";

const Main = styled("main")`
  margin-top: ${spacing.lg};
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
