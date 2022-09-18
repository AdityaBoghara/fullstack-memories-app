import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import SwitchBase from "@material-ui/core/internal/SwitchBase";

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
};

export default App;
