import { createContext, useState, useContext } from 'react';

export type TodosProviderProps = {
  children: React.ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log('my prev ' + prev);
      console.log(newTodos);
      return newTodos;
    });
  };

  return (
    <todosContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (todosConsumer === null) {
    throw new Error('useTodos must be used inside a TodosProvider');
  }
  return todosConsumer;
};
