import React, { useEffect, useState } from "react";
import "../style/AddEmployee.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AddEmployee() {

  const [full_name, setFull_name] = useState("");
  const [dni, setDni] = useState("");
  const [birthday, setBirthday] = useState("");
  const [developer, setDeveloper] = useState(false);
  const [additional_information, setAdditional_information] = useState(
    "No hay informacion adicional"
  );
  const [areas, setAreas] = useState([]);
  const [AreaId, setAreaId] = useState("");
  const [area, setArea] = useState("");
  const [areaDrop, setAreaDrop] = useState("Seleccione el Area");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/area/all")
      .then((res) => {
        setAreas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [area]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/employee/create", {
        full_name,
        dni,
        birthday,
        developer,
        additional_information,
        AreaId,
      })
      .then((res) => {
        console.log("empleado creado con exito");
        setFull_name("");
        setDni("");
        setBirthday("");
        setDeveloper(false);
        setAdditional_information("No hay informacion adicional");
        setAreaId("");
        setAreaDrop("Seleccione el Area");
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };

  const handleSubmitArea = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/area/create", {
        area,
      })
      .then((res) => {
        console.log("area creada con exito");
        setArea("");
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };

  return (
    <div className="App">
      <div className="div-cont-register">
        <div className="cont-form">
          <div className="newsletter-form-add">
            <form className="form" onSubmit={handleSubmit}>
              <p className="heading">INGRESE LOS DATOS</p>
              <input
                required=""
                placeholder="Nombre completo"
                name="fullName"
                type="text"
                className="email"
                value={full_name}
                onChange={(e) => setFull_name(e.target.value)}
              />

              <input
                required=""
                placeholder="DNI"
                name="dni"
                type="text"
                className="email"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />

              <input
                required=""
                placeholder="Cumpleaños Ej: 10-10-1990"
                name="birthday"
                type="text"
                className="email"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />

              <textarea
                required=""
                placeholder="informacion adicional"
                name="info"
                type="text"
                className="email"
                value={additional_information}
                onChange={(e) => setAdditional_information(e.target.value)}
              />

              <br />
              <label class="form-check-label" for="Check">
                Es Desarrollador:
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                checked={developer}
                id="check"
                onChange={(e) => setDeveloper(e.target.checked)}
              />
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {areaDrop}
                </button>
                <ul className="dropdown-menu">
                  {areas.map((areaItem, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          setAreaId(areaItem.id);
                          setAreaDrop(areaItem.area);
                        }}
                      >
                        {areaItem.area}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <button value="Crear empleado" type="submit" className="btn-add">
                Agregar Empleado
              </button>
            </form>
          </div>
        </div>
        <div className="div-h1">
          <div className="newsletter-form-area">
            <form className="form" onSubmit={handleSubmitArea}>
              <p className="heading">AREAS</p>
              <input
                required=""
                placeholder="Nombre del area a crear"
                name="area"
                type="text"
                className="email"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />

              <button value="Crear empleado" type="submit" className="btn-area">
                Agregar Area
              </button>
            </form>
          </div>
          <h1> QUERES VER LA LISTA?</h1>
          <Link to={"/employees"}>
            {" "}
            <button value="Crear cuenta" type="submit" className="btn-add">
              Ver empleados
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
