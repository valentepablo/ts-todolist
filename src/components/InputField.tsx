const InputField = () => {
  return (
    <form className='mt-8 flex justify-center'>
      <input
        type='text'
        placeholder='Enter a task...'
        className='bg-slate-800 p-2 rounded-l-lg w-64 focus:outline-none text-slate-200 placeholder:text-slate-500'
      />
      <button
        type='submit'
        className='bg-slate-800 text-slate-200 p-2 px-3 rounded-r-lg border-l border-slate-700 uppercase text-xs font-bold hover:bg-slate-600'>
        Add
      </button>
    </form>
  );
};

export default InputField;
