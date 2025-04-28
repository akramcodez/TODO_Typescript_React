import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Navbar from './components/navbar';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        TODO REACT + TYPESCRIPT
      </h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default App;
