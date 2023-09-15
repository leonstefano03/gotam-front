import React, { useEffect, useState } from "react";
import "../style/AddEmployee.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddEmployee() {
  const navigate = useNavigate();
  const [full_name, setFull_name] = useState("");
  const [dni, setDni] = useState("");
  const [birthday, setBirthday] = useState("");
  const [developer, setDeveloper] = useState(false);
  const [additional_infomation, setAdditional_information] = useState("");
  const [areas, setAreas] = useState([]);
  const [AreaId, setAreaId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/area/all")
      .then((res) => {
        setAreas(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error al cargar las áreas.");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/employee/create", {
        full_name,
        dni,
        birthday,
        developer,
        additional_infomation,
        AreaId,
      })
      .then((res) => {
        console.log("empleado creado con exito");
        setFull_name("");
        setDni("");
        setBirthday("");
        setDeveloper(false);
        setAdditional_information("");
        setAreaId("");
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
                value={additional_infomation}
                onChange={(e) => setAdditional_information(e.target.value)}
              />

              <br />
              <label class="form-check-label" for="Check">
                Es Desarrollador:
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                hecked={developer}
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
                  Seleccione el área
                </button>
                <ul className="dropdown-menu">
                  {areas.map((areaItem, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setAreaId(areaItem.id)}
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
          <h1> QUERES VER LA LISTA?</h1>
          <Link to={"/employees"}>
            {" "}
            <button value="Crear cuenta" type="submit" className="btn-add">
              Empleados
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
