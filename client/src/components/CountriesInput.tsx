import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faEarthAmerica
} from '@fortawesome/free-solid-svg-icons';

export default function CountriesInput() {

  const [countrySelection, setCountrySelection] = useState<Array<string>>()

  function selectCountry(countrySelction: string){
    setCountrySelection([countrySelction])
    console.log(`Country selection: ${countrySelction}`)
  }

  return (
      <Menu as="div" className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between mb-4'>
          <Menu.Button className="w-full mx-4 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        <FontAwesomeIcon icon={faEarthAmerica} />
            <div className='mr-auto ml-4'>Countries</div>
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
                    onClick={(e) => selectCountry(e.currentTarget.innerHTML)}
                  >
                    Peru
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => selectCountry(e.currentTarget.innerHTML)}
                  >
                    United States
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => selectCountry(e.currentTarget.innerHTML)}
                  >
                    Germany
                  </button>
                )}
              </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}