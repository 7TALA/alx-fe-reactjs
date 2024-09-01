import { useState } from "react";

function AddTodoForm({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), title, completed });
    setTitle("");
    setCompleted(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;