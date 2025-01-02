import React from "react";
import TaskTable from "../components/TaskTable";

const AllTasks = ({ tasks, toggleTaskStatus, removeTask }) => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>All Tasks</h1>
      {tasks.length > 0 ? (
        <TaskTable tasks={tasks} toggleTaskStatus={toggleTaskStatus} removeTask={removeTask} />
      ) : (
        <p  style={{textAlign: "center"}}>No tasks available. Add some tasks first!</p>
      )}
    </div>
  );
};

export default AllTasks;
