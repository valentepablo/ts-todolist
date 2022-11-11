import { Tab } from '@headlessui/react';
import { Todo } from '../todoModel';
import SingleTodo from './SingleTodo';

type props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TaskLists = ({ todos, setTodos, completedTodos, setCompletedTodos }: props) => {
  return (
    <div className='max-w-xl mx-auto mt-8'>
      <Tab.Group>
        <Tab.List className='flex items-center justify-around gap-1 p-1 text-sm font-semibold shadow rounded-xl bg-blue-900/20'>
          <Tab className='w-full py-3 rounded-lg ui-not-selected:hover:bg-slate-800/20 ui-selected:shadow ui-selected:outline-none ui-selected:text-slate-600 ui-not-selected:text-slate-300 ui-not-selected:bg-transparent ui-selected:bg-slate-200'>
            In progress
          </Tab>
          <Tab className='w-full py-3 font-semibold rounded-lg ui-not-selected:hover:bg-slate-800/20 ui-selected:shadow ui-selected:outline-none ui-selected:text-slate-600 ui-not-selected:text-slate-300 ui-not-selected:bg-transparent ui-selected:bg-slate-200'>
            Completed
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className='p-3 mt-3 rounded-lg bg-slate-200'>
            <p className='px-3 py-3 text-xs font-semibold text-orange-400 rounded-md bg-slate-300/30'>
              Tasks in progress: {todos.length}
            </p>
            <ul className={`${todos.length < 1 ? 'mt-0' : ' mt-2 list-none'}`}>
              {todos.map((todo) => (
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                  completedTodos={completedTodos}
                  setCompletedTodos={setCompletedTodos}
                />
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className='p-3 mt-3 rounded-lg bg-slate-200'>
            <p className='px-3 py-3 text-xs font-semibold text-green-600 rounded-lg bg-slate-300/30'>
              Completed tasks: {completedTodos.length}
            </p>
            <ul className={`${completedTodos.length < 1 ? 'mt-0' : ' mt-2 list-none'}`}>
              {completedTodos.map((todo) => (
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  completedTodos={completedTodos}
                  setCompletedTodos={setCompletedTodos}
                  key={todo.id}
                />
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TaskLists;
