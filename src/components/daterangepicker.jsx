import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [passengerCount, setPassengerCount] = useState(0);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handlePassengerCountChange = (event) => {
    const count = parseInt(event.target.value);
    setPassengerCount(count);
  };

  const handleReserveClick = () => {
    // Lógica para reservar con las fechas y cantidad de pasajeros seleccionadas
  };

  return (
    <div className="flex justify-center bg-amber-300 h-20">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-15 mx-3">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="w-15 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2"
            placeholderText="Check-in"
          />
        </div>
        <div className="w-15 mx-3">
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="w-15 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2"
            placeholderText="Check-out"
          />
        </div>
        <div className="w-32 mx-3">
          <select
            value={passengerCount}
            onChange={handlePassengerCountChange}
            className="h-10 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Pasajeros"
          >
            <option value={0}>Pasajeros</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className="w-32 h-10">
          <button
            onClick={handleReserveClick}
            className="w-full h-full bg-amber-600 text-white"
          >
            RESERVAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;