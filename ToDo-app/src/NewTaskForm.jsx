function NewTaskForm({ onAdd }) {
  const [description, setDescription] = ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = description.trim();
    if (trimmed) {
      onAdd(trimmed);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;
