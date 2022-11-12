import { useState } from 'react';
import { AiOutlineCheckSquare, AiFillCheckSquare } from 'react-icons/ai';
import { Todo } from '../../todoModel';

type props = {
  todo: Todo;
  handleCompleted: (id: number) => void;
};

const CompleteButton = ({ todo, handleCompleted }: props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleCompleted(todo.id)}
      className={`${
        todo.completed && 'pointer-events-none text-slate-400'
      } flex items-center gap-2 w-full cursor-pointer p-2 text-left rounded-md ui-active:text-blue-600 ui-active:bg-slate-300/30`}>
      <span>
        {isHover ? (
          <AiFillCheckSquare className='w-5 h-5 cursor-pointer' />
        ) : (
          <AiOutlineCheckSquare className='w-5 h-5 cursor-pointer' />
        )}
      </span>
      Complete
    </span>
  );
};

export default CompleteButton;
