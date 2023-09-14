import React from "react";
import "../style/Login.css"
function Login() {


  return (
    <div className="App">
  
     
        <div class="newsletter-form-log">
          <form class="form">
          
          <p class="heading">   Ingrese sus datos</p>
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
        
            <button value="Crear cuenta" type="submit" class="btn-log">
              Iniciar Sesion
            </button>
          </form>
      
     
   
    </div>
  </div>
  );
}

export default Login;
