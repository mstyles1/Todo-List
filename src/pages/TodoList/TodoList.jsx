import React, {useState} from 'react'
import TodoItem from '../../component/TodoItem/TodoItem';
import FilterButtons from '../../component/NavbarMenu/FilterButtons/FilterButtons';


function TodoList() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([
    {
    id: 1,
    text: 'Laundromat',
    completed: false,
    },
    {
    id: 2,
    text: 'Dry Cleaner',
    completed: false,
    }
]);

    const [text, setText] = useState('');
    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setText('');
      }

    function deleteTodo (id) {
      setTodos(todos.filter(todo => todo.id !== id));
      }

    const filteredTodos = todos.filter((todos) => {
      if (filter === 'completed') return todos.completed;
      if (filter === 'incomplete') return !todos.completed;
      return true;
    });

    function toggleComplete (id) {
      setTodos(todos.map((todo => todo.id === id ? {
          ...todo, completed: !todo.completed} : todo)
        ));
      };

    return (
      <div className="todo-list">
        <FilterButtons currentFilter={filter} onFilterChange={setFilter}/>
        {filteredTodos.map(todos => (
          <TodoItem
          key= {todos.id}
          todo= {todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          filteredTodos={filteredTodos}
          />
        ))}
        <input
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button onClick={() => addTodo(text)}>Add</button>
            <span style={{ textDecoration: todos.completed ? 'line-through' : 'none' }}>
              {todos.text}
            </span>
      </div>
  );
}

export default TodoList;