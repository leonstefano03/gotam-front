import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css"

function Home() {


  return (
    <div className="App">
    <div className="title">
      <h1>GOTAM</h1>
    </div>
    <div className="subtitle">
      <h2>TECNOLOGIA APLICADA A LA MOVILIDAD</h2>
    </div>
    <div className="button-cont">
     <Link> <button class="ui-btn">
        <span>Registrate</span>
      </button></Link>
    </div>
  </div>
  );
}

export default Home;
