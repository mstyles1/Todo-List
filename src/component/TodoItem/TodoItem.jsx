import React from 'react'
function TodoItem({todo, deleteTodo, toggleComplete,}) {
    function handleChange() {
        toggleComplete(todo.id);
    }

  return (
    <div className= "todo-item">
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={handleChange}
        />
        <p>{todo.text}</p>
        <button onClick={() => deleteTodo(todo.id)}>
            X
        </button>
    </div>
  );
}

export default TodoItem;