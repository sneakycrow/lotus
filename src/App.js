import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "containers/Header";
import Home from "containers/pages/Home";
import About from "containers/pages/About";
import { hot } from "react-hot-loader";

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </main>
  </Fragment>
);

export default hot(module)(App);
