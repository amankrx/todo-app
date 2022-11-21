import React from "react";

const AppBar = ({ todos, setTodos }) => {
  return (
    <div>
      {/* Search bar */}
      <div>
        <input type="text" placeholder="Search" />
      </div>

      {/* Sorting dropdown */}
      <div>
        <select>
          <option value="title">Title</option>
          <option value="createdAt">Created At (Asc)</option>
          <option value="-createdAt">Created At (Desc)</option>
        </select>
      </div>
    </div>
  );
};

export default AppBar;
