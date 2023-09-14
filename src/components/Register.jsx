import React from "react";
import "../style/Register.css"

import { Link } from "react-router-dom";
function Register() {


  return (
    <div className="App">
    <div className="div-cont-register">
      <div className="cont-form">
        <div className="newsletter-form">
          <form className="form">
            <input
              required=""
              placeholder="Enter your full name"
              name="fullName"
              type="text"
              className="email"
            />

            <input
              required=""
              placeholder="Enter your email address"
              name="email"
              type="email"
              className="email"
            />

            <input
              required=""
              placeholder="Enter your password"
              name="password"
              type="password"
              className="email"
            />

          <Link to={"/login"}>
         <button value="Crear cuenta" type="submit" className="btn">
              Crear Cuenta
            </button>  </Link> 
          </form>
        </div>
      </div>
      <div className="div-h1">
        <h1>YA ESTAS REGISTRADO?</h1>
       <Link to={'/login'}> <button value="Crear cuenta" type="submit" className="btn">
          Iniciar Sesion
        </button></Link>
      </div>
    </div>
  </div>
  );
}

export default Register;
