import { Menu, Transition } from '@headlessui/react';
import { Snackbar, Alert } from '@mui/material';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEarthAmerica,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import uniqid from 'uniqid';
import { countriesCodesJson } from '../data/countries-with-codes';

interface CountriesInputProps {
  updateCountriesArr: (country: Array<string>) => void;
  countriesArrState: Array<string>;
}

export default function CountriesInput(props: CountriesInputProps) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [countriesArr, setCountriesArr] = useState<Array<string>>([]);

  function makeCountriesInput() {
    let codesArr = Object.keys(countriesCodesJson);
    let countryNamesArr = codesArr.map((code) => countriesCodesJson[code]);
    countryNamesArr.sort((a, b) => a.localeCompare(b));
    setCountriesArr(countryNamesArr);
  }

  useEffect(() => {
    makeCountriesInput();
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  function selectCountry(country: string) {
    let unorderedCountries: Array<string> = [
      ...props.countriesArrState,
      country,
    ];
    let orderedCountries: Array<string> = unorderedCountries.sort((a, b) =>
      a.localeCompare(b)
    );
    if (hasDuplicates(orderedCountries)) {
      setErrorMessage('You can only pick a country once!');
      setOpen(true);
      return;
    }
    if (orderedCountries.length > 3) {
      if (typeof orderedCountries === undefined) return;
      orderedCountries.shift();
      props.updateCountriesArr(orderedCountries);
      return;
    }
    props.updateCountriesArr(orderedCountries);
  }

  function hasDuplicates(array: Array<string>) {
    return new Set(array).size !== array.length;
  }

  return (
    <div className='relative'>
      <Menu
        as='div'
        className='relative bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg justify-between mb-4'
      >
        <Menu.Button
          role='countryDropdownBtn'
          className='w-full mx-4 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'
        >
          <FontAwesomeIcon icon={faEarthAmerica} />
          <div className='mr-auto ml-4'>Countries</div>
          <FontAwesomeIcon icon={faChevronDown} />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute top-12 h-80 overflow-auto w-full mt-2 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50'>
            {countriesArr.map((country: string) => {
              return (
                <Menu.Item key={uniqid()}>
                  {({ active }) => (
                    <button
                      role={country}
                      className={`${
                        active ? 'bg-lightBlueBg text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={(e) => selectCountry(e.currentTarget.innerHTML)}
                    >
                      {country}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
      {props.countriesArrState.map((country: string, index: number) => {
        return (
          <div
            key={uniqid()}
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              top: `calc(60px + ${index * 32}px)`,
            }}
          >
            <FontAwesomeIcon className='mx-4' icon={faFlag} />
            <div>{country}</div>
          </div>
        );
      })}
      {open ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            className='m-0 ml-halfScreenWidth'
            severity='error'
            sx={{ width: '100%' }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      ) : (
        <div></div>
      )}
    </div>
  );
}
