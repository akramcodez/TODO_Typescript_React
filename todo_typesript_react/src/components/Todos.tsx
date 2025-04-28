import { useTodos } from '../store/Todos';
import { useSearchParams } from 'react-router-dom';

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get('todos');

  let filterData = todos;

  if (todosData === 'active') {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === 'completed') {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="space-y-4 mt-8">
      {filterData.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white hover:bg-gray-50 transition-shadow shadow-md rounded-lg px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="w-4 h-4 accent-blue-500"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`text-base ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {todo.task}
            </label>
          </div>

          {todo.completed && (
            <button
              type="button"
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
