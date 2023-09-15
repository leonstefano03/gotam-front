import React, { useEffect, useState } from "react";
import "../style/Employess.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Employees() {
  const [employee, setEmployee] = useState([]);
  const [areas, setAreas] = useState([]);

  const formattedEmployees = employee.map((empleado) => {
    const fechaFormateada = empleado.birthday.split("T")[0];
    const area = areas.find((a) => a.id === empleado.AreaId);
    const esDeveloper = empleado.developer
      ? "Desarrollador"
      : "No es Desarrollador";

    return {
      ...empleado,
      birthday: fechaFormateada,
      name_area: area ? area.area : "Area desconocida",
      developer: esDeveloper,
    };
  });


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar 4 clientes al mismo tiempo
    rows: 8,
    slidesPerRow: 1,
    arrows: true,
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/employee/all")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/api/area/all")
      .then((res) => {
        setAreas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="newsletter-form-emp">
        <form className="form">
          <p className="heading">EMPLEADOS</p>
          <div
                  className="con-info d2"
                >  <div className="div1">
                    <h1>Nombre</h1>
                  </div>
                  <div className="div2">
                    <h1>DNI</h1>
                  </div>
                  <div className="div3">
                    <h1>Es desarrollador?</h1>
                  </div>
                  <div className="div4">
                    <h1>Cumpleaños</h1>
                  </div>
                  <div className="div5">
                    <h1>Area</h1>
                  </div>
                  <div className="div6">
                  <h1>info adicional</h1>
                  </div></div>
          <Slider {...settings} className="slider">
            {formattedEmployees.map((elem, id) => (
              <Link>
                <div
                  className="con-info "
                >
                  <div className="div1 border_rigth">
                    <h1>{elem.full_name}</h1>
                  </div>
                  <div className="div2 border_rigth">
                    <h1>{elem.dni}</h1>
                  </div>
                  <div className="div3 border_rigth">
                    <h1>{elem.developer.toString()}</h1>
                  </div>
                  <div className="div4 border_rigth">
                    <h1>{elem.birthday}</h1>
                  </div>
                  <div className="div5 border_rigth">
                    <h1>{elem.name_area}</h1>
                  </div>
                  <div className="div6">

                    <h1>{elem.additional_information}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>

          <Link to={"/add/Employee"}>
            <button value="Crear cuenta" type="submit" className="btn-emp">
              Añadir Empleado
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Employees;
