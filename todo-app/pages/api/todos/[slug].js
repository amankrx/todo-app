import Todo from "../../../db/models/Todo";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { slug } = req.query;
    const todo = await Todo.findByPk(slug);
    await todo.destroy();
    res.status(204).end();
  }
  if (req.method === "PATCH") {
    const { slug } = req.query;
    const { completed, starred, title } = req.body;
    const todo = await Todo.findByPk(slug);
    todo.completed = completed;
    todo.starred = starred;
    todo.title = title;
    await todo.save();
    res.status(200).json(todo);
  }
}
