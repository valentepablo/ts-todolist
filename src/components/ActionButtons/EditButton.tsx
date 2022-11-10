import { useState } from 'react';
import { AiFillEdit, AiOutlineEdit } from 'react-icons/ai';

const EditButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <span onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isHover ? (
        <AiFillEdit className='w-5 h-5 cursor-pointer' />
      ) : (
        <AiOutlineEdit className='w-5 h-5 cursor-pointer' />
      )}
    </span>
  );
};

export default EditButton;
