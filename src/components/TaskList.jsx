import React, { useState } from 'react';

function TaskList({
  tasks,
  deleteTask,
  editTask,
  saveTask,
  cancelEdit,
  editingTaskId,
  toggleTaskCompleted,
}) {
  const [editValues, setEditValues] = useState({ name: '', description: '' });

  const startEdit = (task) => {
    setEditValues({ name: task.name, description: task.description });
    editTask(task.id);
  };

  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

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
            {editingTaskId === task.id ? (
              <>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <input
                    type="text"
                    name="name"
                    value={editValues.name}
                    onChange={handleChange}
                  />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <input
                    type="text"
                    name="description"
                    value={editValues.description}
                    onChange={handleChange}
                  />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                  />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <button
                    style={{ marginRight: '8px', backgroundColor: 'green', color: 'white' }}
                    onClick={() =>
                      saveTask({ ...task, name: editValues.name, description: editValues.description })
                    }
                  >
                    Save
                  </button>
                  <button
                    style={{ backgroundColor: 'gray', color: 'white' }}
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '8px',
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.name}
                </td>
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '8px',
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.description}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                  />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>
                  <button
                    className="editbtn"
                    onClick={() => startEdit(task)}
                    style={{ marginRight: '8px', backgroundColor: 'orange', color: 'white' }}
                  >
                    Edit
                  </button>
                  <button
                    className="deletebtn"
                    onClick={() => deleteTask(task.id)}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;