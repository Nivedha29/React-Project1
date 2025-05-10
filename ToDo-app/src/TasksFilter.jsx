import React from 'react';

function TasksFilter({ filter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <ul className="filters">
      {filters.map(f => (
        <li key={f}>
          <button
            className={filter === f ? 'selected' : ''}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TasksFilter;
