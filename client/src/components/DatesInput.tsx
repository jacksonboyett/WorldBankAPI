import { useContext } from 'react';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputContext } from '../context/InputContext';

interface DatesInputProps {
  updateFromYear: (fromYear: string) => void;
  fromYearState: number;
  updateToYear: (toYear: string) => void;
  toYearState: number;
}

function DatesInput(props: DatesInputProps) {
  const [inputContext, setInputContext] = useContext(InputContext);

  // function handleFromChange(e: any) {
  //   let from = e.target.value;
  //   setInputContext({
  //     countries: inputContext.countries,
  //     indicator: inputContext.indicator,
  //     from: from,
  //     to: inputContext.to,
  //   });
  // }

  // function handleToChange(e: any) {
  //   let to = e.target.value;
  //   setInputContext({
  //     countries: inputContext.countries,
  //     indicator: inputContext.indicator,
  //     from: inputContext.from,
  //     to: to,
  //   });
  // }

  return (
    <div className='text-start w-full'>
      <div className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between w-full mb-4'>
        <input
          role='fromInput'
          type='number'
          id='floating_outlined'
          className='px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=''
          onChange={(e) => props.updateFromYear(e.target.value)}
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
          role='toInput'
          type='number'
          id='floating_outlined'
          className='px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=''
          onChange={(e) => props.updateToYear(e.target.value)}
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
