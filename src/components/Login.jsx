import React from "react";
import "../style/Login.css"

import { Link } from "react-router-dom";
function Login() {


  return (
    <div className="App">
  
     
        <div className="newsletter-form-log">
          <form className="form">
          
          <p className="heading">   Ingrese sus datos</p>
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
        
        <Link to={'/employees'} >    <button value="Crear cuenta" type="submit" className="btn-log">
              Iniciar Sesion
            </button></Link>
          </form>
      
     
   
    </div>
  </div>
  );
}

export default Login;
