import { Menu } from '@headlessui/react';
import { Todo } from '../todoModel';
import EditButton from './ActionButtons/EditButton';
import DeleteButton from './ActionButtons/DeleteButton';
import CompleteButton from './ActionButtons/CompleteButton';
import { HiChevronDown } from 'react-icons/hi';

type props = {
  todo: Todo;
  handleEdit: () => void;
  handleDelete: (id: number) => void;
  handleCompleted: (id: number) => void;
};

const ActionsButton = ({ todo, handleEdit, handleDelete, handleCompleted }: props) => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='flex items-center p-2 text-sm text-blue-600 rounded-lg bg-slate-300/50'>
        Options
        <HiChevronDown className='w-4 h-4' />
      </Menu.Button>
      <Menu.Items className='absolute right-0 z-10 p-1 space-y-3 text-sm rounded-lg shadow-md top-10 w-36 bg-slate-100'>
        <Menu.Item>
          <div className='rounded-md ui-active:text-blue-600 ui-active:bg-slate-300/30'>
            <EditButton todo={todo} handleEdit={handleEdit} />
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className='rounded-md ui-active:text-blue-600 ui-active:bg-slate-300/30'>
            <DeleteButton todo={todo} handleDelete={handleDelete} />
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className='rounded-md ui-active:text-blue-600 ui-active:bg-slate-300/30'>
            <CompleteButton todo={todo} handleCompleted={handleCompleted} />
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ActionsButton;
