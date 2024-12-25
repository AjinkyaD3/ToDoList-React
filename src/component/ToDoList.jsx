import { useState } from "react";
import './../index.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="task-container">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          id="addTask"
          placeholder="Add task here"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <p>{task}</p>
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
