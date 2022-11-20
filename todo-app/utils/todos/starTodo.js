const starTodo = async (id, currentCompletionStatus, currentStarredStatus) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: currentCompletionStatus,
      starred: !currentStarredStatus,
    }),
  });
  return await response.json();
};

export default starTodo;
