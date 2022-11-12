import { useState, useRef, useEffect } from 'react';
import { Todo } from '../todoModel';
import ActionsButton from './ActionsButton';
import moment from 'moment';

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
    completed.push({ id: todo.id, name: todo.name, completed: true });
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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      <li
        key={todo.name}
        className={`${
          editing ? 'px-0 py-0 pr-3' : 'px-3 py-2.5'
        } flex items-center justify-between rounded-lg hover:bg-slate-700/5`}>
        <div className='flex flex-col'>
          {editing && !todo.completed ? (
            <input
              ref={inputRef}
              type='text'
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
              className='px-3 py-2 mr-2 rounded-lg grow focus:outline-none bg-slate-100/80'
            />
          ) : (
            <>
              <span
                className={`${
                  todo.completed && 'text-slate-500 line-through'
                } font-semibold text-slate-600 mr-2`}>
                {todo.name}
              </span>
              {todo.created && (
                <span className='mt-1 text-xs font-normal text-slate-400/80'>
                  {moment(todo.created).fromNow()}
                </span>
              )}
            </>
          )}
        </div>
        <div className='flex items-center self-start gap-3 font-semibold text-slate-600'>
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
