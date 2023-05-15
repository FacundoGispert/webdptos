import React from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import DateRangePicker from "./components/daterangepicker";
// Componente de la página de inicio de reservas de vacaciones
const ReservasVacaciones = () => {
  return (
    <>
    <Header />
    <DateRangePicker />
    
    <Carousel images={["../public/fotos/Dpto 2-3.jpg", 
                      "../public/fotos/Dpto 2-5.jpg",
                      "../public/fotos/Dpto_1.jpg",
                      "../public/fotos/IMG_2969.jpg"
                      ]}/>
    </>
  );
};

export default ReservasVacaciones;
