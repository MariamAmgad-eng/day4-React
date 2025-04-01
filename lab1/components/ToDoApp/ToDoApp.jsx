import { useState } from "react";
import "./ToDoApp.css"; 

function ToDoApp() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        if (taskText.trim() !== "") {
            setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
        }
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app-container">
            <h1 className="title">To-Do App!</h1>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
}

function ToDoForm({ addTask }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter new task"
                required
                className="task-input"
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
}

function ToDoList({ tasks, toggleComplete, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
            ))}
        </ul>
    );
}

function ToDoItem({ task, toggleComplete, deleteTask }) {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            {task.text}
            <div>
                <button onClick={() => toggleComplete(task.id)} className="complete-button">✔</button>
                <button onClick={() => deleteTask(task.id)} className="delete-button">✖</button>
            </div>
        </li>
    );
}

export default ToDoApp;
