import React from "react";
import "../style/Employess.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function Employees() {

  const fakeData = [
    {
      full_name: "John Doe",
      dni: 123456789,
      birthday: "1990-05-15",
      developer: true,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      full_name: "Jane Smith",
      dni: 987654321,
      birthday: "1985-08-20",
      developer: false,
      additional_information: "Praesent eget consectetur justo, vel condimentum risus."
    },
    {
      full_name: "Bob Johnson",
      dni: 543216789,
      birthday:"1995-02-10",
      developer: true,
      additional_information: "Fusce tincidunt felis in enim feugiat gravida."
    },
    {
      full_name: "Alice Williams",
      dni: 654321987,
      birthday: "1988-11-30",
      developer: false,
      additional_information: "Aenean sed nisl in velit posuere malesuada."
    },
    {
      full_name: "Alice Williams",
      dni: 654321987,
      birthday: "1988-11-30",
      developer: false,
      additional_information: "Aenean sed nisl in velit posuere malesuada."
    },
    {
      full_name: "Alice Williams",
      dni: 654321987,
      birthday: "1988-11-30",
      developer: false,
      additional_information: "Aenean sed nisl in velit posuere malesuada."
    },
    {
      full_name: "Alice Williams",
      dni: 654321987,
      birthday: "1988-11-30",
      developer: false,
      additional_information: "Aenean sed nisl in velit posuere malesuada."
    },
    {
      full_name: "Alice Williams",
      dni: 654321987,
      birthday: "1988-11-30",
      developer: false,
      additional_information: "Aenean sed nisl in velit posuere malesuada."
    }

  ];
  
  const settings = {
    // ConfiguraciÃ³n del Slider
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar 4 clientes al mismo tiempo
    rows: 6,
    slidesPerRow: 1,
    arrows: true,
  };

    const handleClick = (id) => {
    console.log("click", id);
  };
  return (
    <div className="App">
  
     
        <div class="newsletter-form-emp">
          <form class="form">
          
          <p class="heading">EMPLEADOS</p>
        


          <Slider {...settings} className="slider">
          {fakeData.map((elem, id) => (
            <Link>
            <div
                className="con-info"
                onClick={() => {
                  handleClick(id);
                }}
              >
                <h1>{elem.full_name}</h1>
                <h1>{elem.dni}</h1>
                <h1>{elem.developer.toString()}</h1>
                <h1>{elem.birthday}</h1>
                <h1>{elem.additional_information}</h1>
              </div>
            </Link>
          ))}
        </Slider>


            <button value="Crear cuenta" type="submit" class="btn-emp">
              Añadir Empleado
            </button>
          </form>
      
     
   
    </div>
  </div>
  );
}

export default Employees;
