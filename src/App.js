import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage when tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, completed: false }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Add Task</Link>
          </li>
          <li>
            <Link to="/all-tasks">All Tasks</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AddTask addTask={addTask} />} />
        <Route path="/all-tasks" element={<AllTasks tasks={tasks} toggleTaskStatus={toggleTaskStatus} removeTask={removeTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
