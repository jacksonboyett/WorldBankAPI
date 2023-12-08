import { useState, useEffect, useContext } from 'react';
import {
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DataContext } from './DataContext';

function DatesInput() {
	const [data, setData] = useContext(DataContext)
  const [fromYear, setFromYear] = useState<number>();
  const [toYear, setToYear] = useState<number>();

  function handleFromInput(e: any) {
		let from = e.target.value;
    setFromYear(from);
		let newContext = data; 
		newContext.from = from;
		setData(newContext)
  }

	function handleToInput(e: any) {
		let to = e.target.value;
    setToYear(to);
		let newContext = data; 
		newContext.to = to;
		setData(newContext)
  }

  return (
    <div className='text-start w-full'>
      <div className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between w-full mb-4'>
        <input
          type='number'
          id='floating_outlined'
          className='px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=''
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleFromInput(e);
          }}
        />
        <label
          htmlFor='floating_outlined'
          className='absolute text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
        >
          From:
        </label>
        <FontAwesomeIcon icon={faCalendarDays} className='mx-4' />
      </div>
			<div className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between w-full mb-4'>
        <input
          type='number'
          id='floating_outlined'
          className='px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=''
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleToInput(e);
          }}
        />
        <label
          htmlFor='floating_outlined'
          className='absolute text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
        >
          To:
        </label>
        <FontAwesomeIcon icon={faCalendarDays} className='mx-4' />
      </div>
    </div>
  );
}

export default DatesInput;
