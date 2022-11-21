const updateTodo = async (id, todo) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: todo.title,
      completed: todo.completed,
      starred: todo.starred,
    }),
  });
  return await response.json();
};

export default updateTodo;
