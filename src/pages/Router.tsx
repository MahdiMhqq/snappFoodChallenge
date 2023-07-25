import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./Main";
import VendorsPage from "./Vendors";

const Router = () => {
  return (
    <Routes>
      <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default Router;
