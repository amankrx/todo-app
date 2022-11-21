import React from "react";

// Return an HTML Calendar element
const Calendar = ({ dueDate, setDueDate }) => {
  return (
    <input
      id="new-todo-due-date-picker"
      type="datetime-local"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
    />
  );
};

export default Calendar;
