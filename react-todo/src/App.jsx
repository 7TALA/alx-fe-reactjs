import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Lorem ipsum", completed: false },
    { id: 2, title: "dolor sit amet", completed: false },
  ]);
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodoForm todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;