import { Tab } from '@headlessui/react';
import EditButton from './ActionButtons/EditButton';
import DeleteButton from './ActionButtons/DeleteButton';
import CompleteButton from './ActionButtons/CompleteButton';
import { Todo } from '../todoModel';

type props = {
  todos: Todo[];
};

const TaskLists = ({ todos }: props) => {
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
        <Tab.Panels className={todos.length < 1 ? 'hidden' : `p-3 mt-3 rounded-lg bg-slate-200`}>
          <Tab.Panel>
            <ul className='list-none'>
              {todos.map((todo) => (
                <li
                  key={todo.name}
                  className='flex items-center justify-between p-3 py-4 font-semibold rounded-lg text-slate-600 hover:bg-slate-700/5'>
                  <span>{todo.name}</span>
                  <div className='flex items-center gap-3'>
                    <EditButton />
                    <DeleteButton />
                    <CompleteButton />
                  </div>
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel>Tasks completed</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TaskLists;
