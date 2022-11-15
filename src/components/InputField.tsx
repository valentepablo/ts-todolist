import { Listbox } from '@headlessui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { priorities } from './utils/priorities';

type props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({ todo, setTodo, handleAdd, priority, setPriority }: props) => {
  return (
    <form className='flex justify-center mt-8' onSubmit={(e) => handleAdd(e)}>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Create a new task...'
        className='w-full px-3 py-2 md:w-72 input bg-slate-800 focus:outline-none text-slate-200 placeholder:text-slate-500'
      />

      <button
        type='submit'
        className='flex items-center px-5 py-2 font-bold uppercase border-l bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-600'>
        <span>
          <AiOutlinePlus className='text-white' />
        </span>
      </button>

      <Listbox value={priority} onChange={setPriority} as='div' className='relative'>
        <Listbox.Button className='w-20 py-2 capitalize border-l rounded-r-lg bg-slate-800 text-slate-400 hover:text-slate-300 border-slate-700 hover:bg-slate-600'>
          {priority}
        </Listbox.Button>
        <Listbox.Options className='absolute right-0 z-10 p-1 mt-1 space-y-2 text-sm rounded-lg shadow-md top-10 w-36 bg-slate-100'>
          {priorities.map((priority) => (
            <Listbox.Option
              value={priority.name}
              key={priority.name}
              className={`flex items-center gap-2 p-2 font-semibold capitalize rounded-md cursor-pointer ${priority.textColor} hover:bg-slate-300/30`}>
              <span className={`${priority.bgColor} inline-block w-3 rounded-full aspect-square`} />
              {priority.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </form>
  );
};

export default InputField;
