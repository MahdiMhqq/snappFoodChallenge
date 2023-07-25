import React from "react";
import "../assets/styles/globals.scss";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routings from "./Router";

import store from "store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routings />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
