import React from "react";
import createTodo from "../../utils/todos/createTodo";
import * as chrono from "chrono-node";
import moment from "moment";

const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDueDate(moment(chrono.parseDate(date)).format("YYYY-MM-DD"));
    const response = await createTodo(
      title,
      moment(chrono.parseDate(date)).format("YYYY-MM-DD")
    );
    const createdTodo = await response;
    setTodos([...todos, createdTodo]);
    setTitle("");
    setDueDate("");
  };

  const parseDateFromText = (text) => {
    const parsedDate = chrono.parseDate(text);
    if (parsedDate) {
      setDueDate(moment(parsedDate).format("YYYY-MM-DD"));
    }
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
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
