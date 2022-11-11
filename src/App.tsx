import { useState } from 'react';
import InputField from './components/InputField';
import TaskLists from './components/TaskLists';
import { Todo } from './todoModel';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), name: todo, completed: false }]);
    }
    setTodo('');
  };

  console.log(completedTodos);

  return (
    <div className='min-h-screen px-2 py-6 bg-gradient-to-r from-sky-500 to-blue-600'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-center text-slate-100'>TodoList with React+TS</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TaskLists
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </div>
  );
}

export default App;
