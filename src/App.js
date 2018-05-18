import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Header from "containers/Header";
import { Home, About } from "containers/pages";

const App = () => (
  <Fragment>
    <Header />
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Fragment>
);

export default hot(module)(App);
