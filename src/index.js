import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { injectGlobal } from "emotion";
import App from "./App";

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
