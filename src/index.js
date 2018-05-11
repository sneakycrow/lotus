import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "emotion";
import App from "./App";

/* eslint-disable no-unused-expressions */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:700|Open+Sans');
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
