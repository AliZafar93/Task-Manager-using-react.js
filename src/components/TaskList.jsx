import React from 'react';

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompleted }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center' }}>No tasks added yet.</p>;
  }

  return (
    <table style={{ margin: '2rem auto', width: '80%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Description</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Completed</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td style={{
              border: '1px solid #ccc',
              padding: '8px',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.name}
            </td>
            <td style={{
              border: '1px solid #ccc',
              padding: '8px',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.description}
            </td>
            <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
              />
            </td>
            <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center'}}>
              <button
                className='deletebtn'
                onClick={() => deleteTask(task.id)}
                style={{ marginRight: '8px', backgroundColor: 'red', color: 'white' }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;