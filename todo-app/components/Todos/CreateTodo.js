import React from "react";
import createTodo from "../../utils/todos/createTodo";
import * as chrono from "chrono-node";
import moment from "moment";
import Calendar from "../Elements/Calendar";
import NlpCalendar from "../Elements/NlpCalendar";

const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = React.useState(todos.title);
  const [date, setDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState(todos.dueDate);
  const [calendarSwitcher, setCalendarSwitcher] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDueDate(moment(chrono.parseDate(date)).format("YYYY-MM-DD HH:mm:ss"));
    const response = await createTodo(title, dueDate);
    const createdTodo = await response;
    setTodos([...todos, createdTodo]);
    setTitle("");
    setDate("");
    setDueDate("");
  };

  const handleCalendarSwitcher = () => {
    setCalendarSwitcher(!calendarSwitcher);
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {calendarSwitcher ? (
          <Calendar dueDate={dueDate} setDueDate={setDueDate} />
        ) : (
          <NlpCalendar
            dueDate={dueDate}
            setDueDate={setDueDate}
            date={date}
            setDate={setDate}
          />
        )}

        <button onClick={handleCalendarSwitcher}>Switch Calendar</button>

        <button type="clear">Clear</button>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
