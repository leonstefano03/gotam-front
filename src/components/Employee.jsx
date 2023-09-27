import React, { useEffect, useState } from "react";
import "../style/Employee.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../configURL";


function Employee() {
  const [employee, setEmployee] = useState([]);
  const [areas, setAreas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [full_name, setFull_name] = useState("");
  const [dni, setDni] = useState("");
  const [birthday, setBirthday] = useState("");
  const [developerCheck, setDeveloperCheck] = useState(false);
  const [additional_information, setAdditional_information] = useState("");
  const [name_area, setName_area] = useState();
  const [AreaId, setAreaId] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${apiKey}/api/area/all`)
      .then((res) => {
        setAreas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${apiKey}/api/employee/${id}`)
      .then((res) => {
        setDeveloperCheck(res.data.developer);
        const formattedEmployee = res.data;
        formattedEmployee.birthday = formattedEmployee.birthday.split("T")[0];
        const area = areas.find((a) => a.id == formattedEmployee.AreaId);
        formattedEmployee.name_area = area ? area.area : "Area desconocida";
        formattedEmployee.developer = formattedEmployee.developer ? "Si" : "No";
        setEmployee(formattedEmployee);
        setFull_name(formattedEmployee.full_name);
        setDni(formattedEmployee.dni);
        setBirthday(formattedEmployee.birthday);
        setAdditional_information(formattedEmployee.additional_information);
        setName_area(formattedEmployee.name_area);
        setAreaId(res.data.AreaId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, editMode, areas]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };
  const handleDelete = () => {
    axios
      .delete(`${apiKey}/api/employee/delete/${employee.id}`, {})
      .then(() => {
        console.log("empleado eliminado con exito");
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };
  const handleSubmit = () => {
    axios
      .put(`${apiKey}/api/employee/update/${employee.id}`, {
        full_name,
        dni,
        birthday,
        developer: developerCheck,
        additional_information,
        AreaId,
      })
      .then(() => {
        console.log("empleado editado con exito");
        setEditMode(!editMode);
      })
      .catch((error) => {
        console.log(error);
        alert("Se ha producido un error.");
      });
  };

  return (
    <div className="App">
      <div className="cont-one">
        <div className="cont-title">
          <i onClick={handleDelete} class="fi fi-rs-trash edit"></i>
          <p className="heading">INFORMACION DEL EMPLEADO</p>
          <i
            onClick={handleEdit}
            className={`fi fi${editMode ? "-br-cross" : "-rr-edit"} edit`}
          ></i>
        </div>
        {!editMode ? (
          <>
            <div className="cont-info">
              <h1 className="b-h1">Nombre completo: {employee.full_name}</h1>
              <h1 className="b-h1">Documento: {employee.dni}</h1>
              <h1 className="b-h1">Fecha de cumpleaños: {employee.birthday}</h1>
              <h1 className="b-h1">Area: {employee.name_area}</h1>
              <h1 className="b-h1">Es Desarrollador: {employee.developer}</h1>
              <h1>Informacion Adicional: {employee.additional_information}</h1>
            </div>
            <Link to={"/employees"}>
              <button value="ver empleados" type="submit" className="btn-emp">
                Ver Empleados
              </button>
            </Link>
          </>
        ) : (
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
              placeholder="Documento"
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
              checked={developerCheck}
              id="check"
              onChange={(e) => {
                setDeveloperCheck(e.target.checked);
              }}
            />
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {name_area}
              </button>
              <ul className="dropdown-menu">
                {areas.map((areaItem, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setAreaId(areaItem.id);
                        setName_area(areaItem.area);
                      }}
                    >
                      {areaItem.area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button value="Editar empleado" type="submit" className="btn-add">
              Editar Empleado
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Employee;
