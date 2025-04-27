import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App: React.FC = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <AddTodo />
      <Todos />
    </main>
  );
};

export default App;
