import React from 'react'
import { useState } from 'react'

const initialTodos = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete React project", completed: true },
    { id: 3, task: "Read a book", completed: false },
    { id: 4, task: "Exercise", completed: true },
    { id: 5, task: "Call a friend", completed: false },
    { id: 6, task: 'cook', completed: false }
]


const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    

    return (
        <>
            <h1>TodoList</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ listStyleType: 'none', marginBottom: '10px', textAlign: 'left' }}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{ 
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                marginLeft: '8px',
                                cursor: 'pointer'
                            }}>
                                {todo.task}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;