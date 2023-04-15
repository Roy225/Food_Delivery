import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      <Toaster/>
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
