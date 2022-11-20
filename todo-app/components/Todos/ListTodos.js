import React from "react";
import deleteTodo from "../../utils/todos/deleteTodo";
import completeTodo from "../../utils/todos/completeTodo";
import starTodo from "../../utils/todos/starTodo";
import createTodo from "../../utils/todos/createTodo";
import moment from "moment";

const ListTodo = ({ todos, setTodos }) => {
  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await completeTodo(id, todo.completed, todo.starred);
    const updatedTodo = await response;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleStar = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await starTodo(id, todo.completed, todo.starred);
    const updatedTodo = await response;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleCopy = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await createTodo(
      todo.title,
      moment(todo.dueDate).format("YYYY-MM-DD")
    );
    const createdTodo = await response;
    setTodos([...todos, createdTodo]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.starred ? "red" : "black",
            }}
          >
            {todo.title}
            {todo.dueDate && (
              <span> - {moment(todo.dueDate).format("MMMM Do YYYY")}</span>
            )}
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
            <button onClick={() => handleStar(todo.id)}>
              {todo.starred ? "Unstar" : "Star"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleCopy(todo.id)}>Copy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
