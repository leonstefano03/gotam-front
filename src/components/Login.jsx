import "../style/Login.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/user/login",
        {
          email,
          password,
        }
        
      )
      .then((res) => {
        // logUser(res.data);
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };

  return (
    <div className="App">
      <div className="newsletter-form-log">
        <form className="form" onSubmit={handleSubmit}>
          <p className="heading"> Ingrese sus datos</p>
          <input
            required=""
            placeholder="Enter your email address"
            name="email"
            type="email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required=""
            placeholder="Enter your password"
            name="password"
            type="password"
            className="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button value="Crear cuenta" type="submit" className="btn-log">
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
