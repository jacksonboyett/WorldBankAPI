import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';
import { InputContext } from '../context/InputContext';
import { Snackbar, Alert } from '@mui/material';
import { DataContext } from '../context/DataContext';
import { useContext, useState } from 'react';
import axios from 'axios';
import { indicatorsCodesJson } from '../data/indicators-with-codes';
import { countriesCodesJson } from '../data/countries-with-codes';

function Main() {
  const [inputContext] = useContext(InputContext);
  const [dataContext, setDataContext] = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function submit() {
    if (
      inputContext.countries.length < 1 ||
      inputContext.indicator < 1 ||
      inputContext.from === 0 ||
      inputContext.to === 0
    ) {
      setErrorMessage('Please complete all of the inputs!');
      setOpen(true);
      return;
    }
    let countries = processCountriesInput(inputContext.countries);
    let indicator = processIndicatorInput(inputContext.indicator);
    let from = inputContext.from;
    let to = inputContext.to;
    const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?&format=json&date=${from}:${to}&per_page=2000`;
    // const url = `http://api.worldbank.org/v2/country/PE;US;DE/indicator/FP.CPI.TOTL.ZG?&format=json&date=2020:2022&per_page=2000`;
    try {
      const res = await axios.get(url);
      let newData = makeDataArr(res.data[1], inputContext.countries.length);
      console.log(res);
      setDataContext({
        haveData: true,
        values: newData,
        res: res.data[1],
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      submit();
    }
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      onKeyDown={(e) => handleEnter(e)}
      tabIndex={0}
      className='bg-bg h-screen flex'
    >
      <Sidebar submit={submit} />
      <ChartContainer />
      {open ? (
        <Snackbar autoHideDuration={6000} onClose={handleClose} open={open}>
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

function processIndicatorInput(indicator: string) {
  const indicatorCode = indicatorsCodesJson[indicator];
  return indicatorCode;
}

function processCountriesInput(countries: Array<string>) {
  let countriesString = '';
  for (let i = 0; i < countries.length; i++) {
    if (i != countries.length - 1) {
      countriesString = countriesString
        .concat(getCountryCodeByValue(countries[i]))
        .concat(';');
    } else {
      countriesString = countriesString.concat(
        getCountryCodeByValue(countries[i])
      );
    }
  }
  return countriesString;
}

function getCountryCodeByValue(country: string): string {
  let countryCode = '';
  if (
    typeof Object.keys(countriesCodesJson).find(
      (key) => countriesCodesJson[key] === country
    ) != undefined
  ) {
    countryCode = Object.keys(countriesCodesJson).find(
      (key) => countriesCodesJson[key] === country
    )!;
  }
  return countryCode;
}

function makeDataArr(resArr: any, numberOfCountries: number) {
  let count = 0;
  let dataArr = [];
  let allData = [];
  for (let j = 0; j < numberOfCountries; j++) {
    for (let i = 0; i < resArr.length / numberOfCountries; i++) {
      dataArr.push(resArr[count].value);
      count++;
    }
    dataArr = dataArr.reverse();
    allData.push(dataArr);
    dataArr = [];
  }
  return allData;
}

export default Main;
