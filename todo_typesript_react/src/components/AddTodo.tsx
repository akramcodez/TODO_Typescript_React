import { useState } from 'react';
import { useTodos } from '../store/Todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    handleAddTodo(todo);
    setTodo('');
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center justify-center space-x-4 mb-6"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
        className="border rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
