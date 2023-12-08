import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
	faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DataContext } from './DataContext';

export default function IndicatorInput() {

  const [data, setData] = useContext(DataContext);
  const [indicatorSelection, setIndicatorSelection] = useState<Array<string>>()

  function selectIndicator(indicator: string){
    let newContext = data;
    newContext.indicator = indicator; 
    setData(newContext);
    console.log(data)
  }

  return (
      <Menu as="div" className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between mb-4'>
          <Menu.Button role='indicatorDropdownBtn' className="w-full mx-4 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        <FontAwesomeIcon icon={faScaleBalanced} />
            <div className='mr-auto ml-4'>Indicators</div>
            <FontAwesomeIcon icon={faChevronDown} />
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-12 w-full mt-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => selectIndicator(e.currentTarget.innerHTML)}
                  >
                    Inflation
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => selectIndicator(e.currentTarget.innerHTML)}
                  >
                    GDP
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => selectIndicator(e.currentTarget.innerHTML)}
                  >
                    Population
                  </button>
                )}
              </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}