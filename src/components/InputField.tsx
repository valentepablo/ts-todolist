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
        placeholder='Enter a task...'
        className='input'
      />
      <button
        type='submit'
        className='flex items-center gap-1 p-2 px-3 text-xs font-bold uppercase border-l rounded-r-lg bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-600'>
        Add
        <span>
          <AiOutlinePlus className='text-white' />
        </span>
      </button>
    </form>
  );
};

export default InputField;
