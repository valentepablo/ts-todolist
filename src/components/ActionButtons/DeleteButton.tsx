import { useState } from 'react';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';

const EditButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <span onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isHover ? (
        <AiFillDelete className='w-5 h-5 cursor-pointer' />
      ) : (
        <AiOutlineDelete className='w-5 h-5 cursor-pointer' />
      )}
    </span>
  );
};

export default EditButton;
