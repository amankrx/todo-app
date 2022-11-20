import React from "react";
import CreateTodo from "../../components/Todos/CreateTodo";
import ListTodos from "../../components/Todos/ListTodos";
import getTodos from "../../utils/todos/getTodos";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      {/* Search bar */}
      <div>
        <input type="text" placeholder="Search" />
      </div>

      {/* Sorting dropdown */}
      <div>
        <select>
          <option value="title">Title</option>
          <option value="createdAt">Created At (Asc)</option>
          <option value="-createdAt">Created At (Desc)</option>
        </select>
      </div>
      <ListTodos todos={todos} setTodos={setTodos} />
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}
