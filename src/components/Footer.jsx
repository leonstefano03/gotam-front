import React from "react";
import logo from "../assets/logo.png";
import "../style/Footer.css";
 
function Footer() {
  let year =  new Date().getFullYear()

  return (
    <section className="fondo-footer" id="social">
      <div className="container-footer">
        <div className="logo-footer"> 
          <img src={logo} />
        </div>
        <div className="copyright">
          <h1 className="h1-foot">© {year} Copyright Leon Stefano</h1>{" "}
        </div>



<div class="redes" id="red">
    <div class="  redes2">

      <div class=" iconosRedes">
        <div class=""> 
        <ul>
          <li><a href="https://www.facebook.com/stefano.leon.92" target="_blank" class="facebook" id="face"><i
                class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/leon_stefano/" target="_blank" class="instagram"><i
                class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=2364206094&text=" target="_blank" class="whatsapp"><i
                class="fa-brands fa-whatsapp">
                  </i></a></li>
          <li><a href="https://twitter.com/leonstefano03" target="_blank" class="twitter"><i
                class="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/leon-stefano-abb890182/ " target="_blank" class="linkedin"><i
                class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/leonstefano03" target="_blank" class="github"><i
                class="fa-brands fa-github"></i></a></li> 
        </ul>
  </div> 
      </div>
    </div>
  </div> 
 
      </div>
    </section>
  );
}

export default Footer;
