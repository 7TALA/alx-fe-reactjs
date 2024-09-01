import TodoList from "../components/TodoList";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders TodoList component with demo todos", () => {
  const todos = [
    { id: 1, title: "Lorem ipsum", completed: false },
    { id: 2, title: "dolor sit amet", completed: false },
  ];
  render(<TodoList todos={todos} />);
  expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  expect(screen.getByText("dolor sit amet")).toBeInTheDocument();
});

test("toggling todos", () => {
  const todos = [{ id: 1, title: "Lorem ipsum", completed: false }];
  const setTodos = jest.fn();

  render(<TodoList todos={todos} setTodos={setTodos} />);

  const toggle = screen.getByRole("checkbox");
  fireEvent.click(toggle);

  expect(setTodos).toBeCalledWith([
    expect.objectContaining({ completed: true }),
  ]);
});

test("deleting todos", () => {
  const todos = [{ id: 1, title: "Lorem ipsum", completed: false }];
  const setTodos = jest.fn();

  render(<TodoList todos={todos} setTodos={setTodos} />);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(setTodos).toBeCalledWith([]); //after deletion it should be an empty array
});