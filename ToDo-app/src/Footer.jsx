import React from 'react';
import TasksFilter from './TasksFilter';

function Footer({ count, filter, setFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
