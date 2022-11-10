import { useState } from 'react';
import { AiOutlineCheckSquare, AiFillCheckSquare } from 'react-icons/ai';

const EditButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <span onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isHover ? (
        <AiFillCheckSquare className='w-5 h-5 cursor-pointer' />
      ) : (
        <AiOutlineCheckSquare className='w-5 h-5 cursor-pointer' />
      )}
    </span>
  );
};

export default EditButton;
