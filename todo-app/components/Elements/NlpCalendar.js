import React from "react";
import * as chrono from "chrono-node";

const NlpCalendar = ({ dueDate, setDueDate, date, setDate }) => {
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDateSubmit = (e) => {
    e.preventDefault();
    setDueDate(chrono.parseDate(date));
  };

  return (
    <input
      type="text"
      value={date}
      onChange={handleDateChange}
      onBlur={handleDateSubmit}
    />
  );
};

export default NlpCalendar;
