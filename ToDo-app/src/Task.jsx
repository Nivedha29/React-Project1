import React, { useState } from 'react';

function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmed = editDescription.trim();
    if (trimmed) {
      onEdit(task.id, trimmed);
      setIsEditing(false);
    }
  };

  const timeSinceCreation = () => {
    const seconds = Math.floor((new Date() - new Date(task.createdAt)) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
  };

  return (
    <li className={`${task.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">created {timeSinceCreation()}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setIsEditing(true)}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
      </div>
      {isEditing && (
        <form onSubmit={handleEditSubmit}>
          <input
            className="edit"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            onBlur={handleEditSubmit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

export default Task;
