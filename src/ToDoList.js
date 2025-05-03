import React from 'react';

function TodoList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
