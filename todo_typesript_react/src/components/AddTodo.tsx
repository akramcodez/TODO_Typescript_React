import { useState } from 'react';
import { useTodos } from '../store/Todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
