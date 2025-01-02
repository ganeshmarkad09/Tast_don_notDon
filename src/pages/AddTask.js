import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [showTasks, setShowTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = { id: Date.now(), title: newTask.trim(), completed: false };
      addTask(task);
      setShowTasks((prevTasks) => [...prevTasks, task]); // Display the added task
      setNewTask("");
    }
  };

  return (
    <div className="add-task-container">
      <h1>Add Task</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-preview">
        <h2>Recently Added Tasks:</h2>
        {showTasks.length > 0 ? (
          <ul>
            {showTasks.map((task, index) => (
              <li key={task.id}>
                {index + 1}. {task.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddTask;
