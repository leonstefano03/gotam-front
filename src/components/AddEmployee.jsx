import React from "react";
import "../style/AddEmployee.css";
import { Link } from "react-router-dom";
function AddEmployee() {
 
  return (
    <div className="App">
      <div className="div-cont-register">
        <div className="cont-form">
          <div className="newsletter-form-add">
            <form className="form">
              <input
                required=""
                placeholder="Enter full name"
                name="fullName"
                type="text"
                className="email"
              />

              <input
                required=""
                placeholder="Enter DNI"
                name="email"
                type="number"
                className="email"
              />

              <input
                required=""
                placeholder="Enter birthday"
                name="password"
                type="number"
                className="email"
              />
              <input
                required=""
                placeholder="Enter if are developer"
                name="password"
                type="boolean"
                className="email"
              />
              <input
                required=""
                placeholder="Enter Additional Information"
                name="password"
                type="text"
                className="email"
              />
              <input
                required=""
                placeholder="Enter Area"
                name="password"
                type="text"
                className="email"
              />

              <button value="Crear cuenta" type="submit" className="btn-add">
                Agregar Empleado
              </button>
            </form>
          </div>
        </div>
        <div className="div-h1">
          <h1> QUERES VER LA LISTA?</h1>
        <Link  to={'/employees'}>  <button value="Crear cuenta" type="submit" className="btn-add">
            Empleados
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
