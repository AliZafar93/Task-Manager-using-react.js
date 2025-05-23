import React from 'react';

function Header({ filter, setFilter }) {
  return (
    <header className="app-header">
      <h1>Task Manager</h1>
      <nav>
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={filter === 'uncompleted' ? 'active' : ''}
          onClick={() => setFilter('uncompleted')}
        >
          Uncompleted
        </button>
      </nav>
    </header>
  );
}

export default Header;