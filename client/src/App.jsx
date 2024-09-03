import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EnhanceCV from "./dashboard/EnhanceCV";
import Dashboard from "./dashboard/Dashboard";
import Layouts from "./Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/enhance-cv" element={<EnhanceCV />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
