import { AiOutlinePlus } from 'react-icons/ai';

type props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: props) => {
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
        className='flex items-center px-5 py-2 font-bold uppercase border-l rounded-r-lg bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-600'>
        <span>
          <AiOutlinePlus className='text-white' />
        </span>
      </button>
    </form>
  );
};

export default InputField;
