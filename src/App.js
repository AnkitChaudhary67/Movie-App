import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   
    
  );
};

export default App;