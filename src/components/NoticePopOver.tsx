import { CheckCircleIcon } from '@heroicons/react/solid';
import { useAppSelector } from '../hooks';

export const NoticePopOver = () => {
  const { isOpen, isAdding } = useAppSelector(state => state.noticePopOver);

  return (
    <div
      className={`${
        isOpen
          ? 'fixed z-30 flex items-center justify-between px-3 py-2 ml-4 text-gray-100 rounded top-5 right-10 w-80'
          : 'hidden'
      }  
        ${isAdding ? 'bg-green-600' : 'bg-red-600'}`}
    >
      <span> {isAdding ? 'Movie added to your list' : 'Movie removed from your list'} </span>
      <CheckCircleIcon className="w-5 h-5" />
    </div>
  );
};
