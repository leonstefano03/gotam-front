import React from "react";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Employees from "./components/Employess";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add/employee" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  );
}

export default App;
