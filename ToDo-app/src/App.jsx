import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';

function App() {
  

  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus></input>
    </header>
    <section className="main">
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Completed task</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Editing task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <input type="text" class="edit" value="Editing task"></input>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">Active task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      </ul>
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul class="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  </section>
  )
  };
export default App
