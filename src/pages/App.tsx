import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../assets/styles/globals.scss";
import Routings from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Routings />
    </BrowserRouter>
  );
}

export default App;
