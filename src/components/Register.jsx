import React from "react";
import "../style/Register.css"
function Register() {


  return (
    <div className="App">
    <div className="div-cont-register">
      <div className="cont-form">
        <div class="newsletter-form">
          <form class="form">
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

            <button value="Crear cuenta" type="submit" class="btn">
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
      <div className="div-h1">
        <h1>YA ESTAS REGISTRADO?</h1>
        <button value="Crear cuenta" type="submit" class="btn">
          Iniciar Sesion
        </button>
      </div>
    </div>
  </div>
  );
}

export default Register;
