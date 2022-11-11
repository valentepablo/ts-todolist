import { useState, useRef, useEffect } from 'react';
import { Todo } from '../todoModel';
import ActionsButton from './ActionsButton';

type props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos, completedTodos, setCompletedTodos }: props) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.name);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    if (todo.completed) return;
    setEditing(true);
  };

  const handleCompleted = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const completed: Todo[] = [];
    completed.push({ ...todo, completed: true });
    setCompletedTodos([...completedTodos, ...completed]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, name: editedTodo } : todo)));
    setEditing(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editing]);

  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      <li
        key={todo.name}
        className={`${
          editing ? 'px-0 py-0 pr-3' : 'px-3 py-2.5'
        } flex items-center justify-between font-semibold rounded-lg text-slate-600 hover:bg-slate-700/5`}>
        {editing && !todo.completed ? (
          <input
            ref={inputRef}
            type='text'
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className='px-3 py-4 mr-2 rounded-lg grow focus:outline-none'
          />
        ) : (
          <span className={`${todo.completed && 'text-slate-500 line-through'}`}>{todo.name}</span>
        )}
        <div className='flex items-center gap-3'>
          <ActionsButton
            handleEdit={handleEdit}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            todo={todo}
          />
        </div>
      </li>
    </form>
  );
};

export default SingleTodo;
