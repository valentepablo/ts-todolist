import { useState } from 'react';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import { Todo } from '../../todoModel';

type props = {
  todo: Todo;
  handleDelete: (id: number) => void;
};

const EditButton = ({ todo, handleDelete }: props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleDelete(todo.id)}
      className='flex items-center w-full gap-2 p-2 text-left rounded-md cursor-pointer ui-active:text-red-600 ui-active:bg-slate-300/30'>
      <span>
        {isHover ? (
          <AiFillDelete className='w-5 h-5 cursor-pointer' />
        ) : (
          <AiOutlineDelete className='w-5 h-5 cursor-pointer' />
        )}
      </span>
      Delete
    </span>
  );
};

export default EditButton;
