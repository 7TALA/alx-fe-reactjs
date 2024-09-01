import AddTodoForm from "../components/AddTodoForm";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders AddTodoForm component", () => {
  render(<AddTodoForm />);
});

test("add a new todo", () => {
  const todos = [];
  const setTodos = jest.fn();

  render(<AddTodoForm todos={todos} setTodos={setTodos} />);

  const input = screen.getByPlaceholderText("Todo");
  fireEvent.change(input, { target: { value: "New Todo" } });

  const addButton = screen.getByText("Add Todo");
  fireEvent.click(addButton);

  expect(setTodos).toBeCalledWith([
    expect.objectContaining({ title: "New Todo" }),
  ]);
});