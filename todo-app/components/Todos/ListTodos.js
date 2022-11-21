import React from "react";
import deleteTodo from "../../utils/todos/deleteTodo";
import createTodo from "../../utils/todos/createTodo";
import updateTodo from "../../utils/todos/updateTodo";
import moment from "moment";
import Image from "next/image";

const ListTodo = ({ todos, setTodos }) => {
  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onChangeInput = async (e, id) => {
    const { name, value } = e.target;
    console.log(name, value);
    const todo = todos.find((todo) => todo.id === id);
    todo.title = value;
    const response = await updateTodo(id, todo);
    const updatedTodo = await response;
    console.log(updatedTodo);
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      })
    );
  };

  const onChange = (e, id) => {
    const { name, value } = e.target;
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, [name]: value };
        }
        return todo;
      })
    );
  };

  const handleComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    const response = await updateTodo(id, todo);
    const updatedTodo = await response;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleStar = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.starred = !todo.starred;
    const response = await updateTodo(id, todo);
    const updatedTodo = await response;
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleCopy = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await createTodo(
      todo.title,
      moment(todo.dueDate).format("YYYY-MM-DD HH:mm:ss")
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
            <input
              id={`todo-complete-button__${todo.id}`}
              className="checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(todo.id)}
            />
            {todo.title}
            {todo.dueDate && (
              <span>
                <Image
                  src="/Calendar.svg"
                  alt="calendar"
                  width={20}
                  height={20}
                />

                {moment(todo.dueDate).fromNow()}
              </span>
            )}

            <input
              id={`todo-star-button__${todo.id}`}
              className="todo-star-button"
              type="checkbox"
              checked={todo.starred}
              onChange={() => handleStar(todo.id)}
            />
            <button onClick={() => handleDelete(todo.id)}>
              <Image alt="Delete" src="/Delete.svg" width={18} height={18} />
            </button>
            <button onClick={() => handleCopy(todo.id)}>
              <Image alt="Copy" src="/Copy.svg" width={18} height={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
