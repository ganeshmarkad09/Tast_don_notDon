import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
