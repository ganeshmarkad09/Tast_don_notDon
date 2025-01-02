import React from "react";

const TaskTable = ({ tasks, toggleTaskStatus, removeTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td className={task.completed ? "completed" : "incomplete"}>{task.completed ? "Completed" : "Incomplete"}</td>
            <td>
              <button onClick={() => toggleTaskStatus(task.id)}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
             
            </td>
            <td>
            <button onClick={() => removeTask(task.id)} className="remove-button">
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
