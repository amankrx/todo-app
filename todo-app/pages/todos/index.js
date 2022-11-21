import React from "react";
import CreateTodo from "../../components/Todos/CreateTodo";
import ListTodos from "../../components/Todos/ListTodos";
import getTodos from "../../utils/todos/getTodos";
import AppBar from "../../components/Todos/AppBar";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      <AppBar todos={todos} setTodos={setTodos} />
      <ListTodos todos={todos} setTodos={setTodos} />
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}
