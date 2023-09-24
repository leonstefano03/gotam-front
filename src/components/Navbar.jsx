import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"
import logo from "../assets/gotam.png";

function Navbar() {


  return (
    <div className="navbar">
      <Link to={'/'}>
<img src={logo} /></Link>
  </div>
  );
}

export default Navbar;
