const createTodo = async (title, dueDate) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      dueDate,
    }),
  });
  return await response.json();
};

export default createTodo;
