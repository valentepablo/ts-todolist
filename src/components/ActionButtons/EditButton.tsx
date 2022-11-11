import { useState } from 'react';
import { AiFillEdit, AiOutlineEdit } from 'react-icons/ai';
import { Todo } from '../../todoModel';

type props = {
  todo: Todo;
  handleEdit: (id: number) => void;
};

const EditButton = ({ todo, handleEdit }: props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleEdit(todo.id)}
      className={`${
        todo.completed && 'pointer-events-none text-slate-400'
      } flex items-center cursor-pointer gap-2 w-full p-2 text-left`}>
      <span>
        {isHover ? (
          <AiFillEdit className='w-5 h-5 cursor-pointer' />
        ) : (
          <AiOutlineEdit className='w-5 h-5 cursor-pointer' />
        )}
      </span>
      Edit
    </span>
  );
};

export default EditButton;
