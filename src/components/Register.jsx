import "../style/Register.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiKey } from "../configURL";
function Register() {
  const navigate = useNavigate();
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiKey}/api/user/signup`, {
        full_name,
        email,
        password,
      })
      .then((res) => {
        console.log("Usuario creado");
        navigate("/login");
      })
      .catch(() => alert("Se ha producido un error."));
  };

  return (
    <div className="App">
      <div className="div-cont-register">
        <div className="cont-form">
          <div className="newsletter-form">
            <form className="form" onSubmit={handleSubmit}>
            <p className="heading">REGISTRATE</p>
              <input
                required=""
                placeholder="Enter your full name"
                name="fullName"
                type="text"
                className="email"
                value={full_name}
            onChange={(e) => {
              setFull_name(e.target.value);
            }}
              />

              <input
                required=""
                placeholder="Enter your email address"
                name="email"
                type="email"
                className="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                required=""
                placeholder="Enter your password"
                name="password"
                type="password"
                className="email"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button value="Crear cuenta" type="submit" className="btn-reg">
                Crear Cuenta
              </button>
            </form>
          </div>
        </div>
        <div className="div-h1">
          <h1>YA ESTAS REGISTRADO?</h1>
          <Link to={"/login"}>
            <button value="Crear cuenta" type="submit" className="btn-reg">
              Iniciar Sesion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
