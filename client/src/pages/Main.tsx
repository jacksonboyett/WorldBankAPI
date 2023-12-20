import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';
import { Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { indicatorsCodesJson } from '../data/indicators-with-codes';
import { countriesCodesJson } from '../data/countries-with-codes';

function Main() {
  // Indicator states
  const [countriesArrState, setCountriesArr] = useState<Array<string>>([]);
  const [indicatorState, setIndicator] = useState<string>('');
  const [fromYearState, setFromYear] = useState<number>(0);
  const [toYearState, setToYear] = useState<number>(0);

  // Data response states
  const [haveDataState, setHaveData] = useState<boolean>(false);
  const [valuesState, setValues] = useState<Array<Array<number>>>([[]]);
  const [responseState, setResponse] = useState<any>([]);
  const [unitState, setUnit] = useState<string>('');
  const [magnitudeState, setMagnitude] = useState<number>(0);

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function makeCountryValuesArr(responseArr: any, numberOfCountries: number) {
    let count = 0;
    let countryValuesArr: Array<number> = [];
    let allCountriesValuesArr: Array<Array<number>> = [];
    let maxValues: Array<number> = [];
    for (let j = 0; j < numberOfCountries; j++) {
      for (let i = 0; i < responseArr.length / numberOfCountries; i++) {
        countryValuesArr.push(responseArr[count].value);
        count++;
      }
      countryValuesArr = countryValuesArr.reverse();
      let max = Math.max.apply(Math, countryValuesArr);
      maxValues.push(max);
      allCountriesValuesArr.push(countryValuesArr);
      countryValuesArr = [];
    }
    let adjustedArr: Array<Array<number>> = adjustForMagnitude(
      allCountriesValuesArr,
      maxValues
    );
    return adjustedArr;
  }

  function adjustForMagnitude(
    allCountriesValuesArr: Array<Array<number>>,
    maxValues: Array<number>
  ) {
    let max = Math.max.apply(Math, maxValues);
    let mag = getMagnitude(max);
    setMagnitude(mag);
    if (max > 999999) {
      allCountriesValuesArr = divideEachValueByMagnitude(
        allCountriesValuesArr,
        mag
      );
    }
    return allCountriesValuesArr;
  }

  function divideEachValueByMagnitude(
    unadjustedArr: Array<Array<number>>,
    mag: number
  ) {
    let adjustedArr = unadjustedArr.map((arr) =>
      arr.map((value) => value / mag)
    );
    return adjustedArr;
  }

  function getMagnitude(n: number) {
    var order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);
    return Math.pow(10, order);
  }

  function handleEnter(e: any) {
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

  async function submit() {
    if (
      countriesArrState.length < 1 ||
      indicatorState === '' ||
      fromYearState === 0 ||
      toYearState === 0
    ) {
      setErrorMessage('Please complete all of the inputs!');
      setOpen(true);
      return;
    }
    let countries = processCountriesInput(countriesArrState);
    let indicator = processIndicatorInput(indicatorState);
    let from = fromYearState;
    let to = toYearState;
    const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?&format=json&date=${from}:${to}&per_page=2000`;
    try {
      const res = await axios.get(url);
      console.log(res);
      let newData = makeCountryValuesArr(res.data[1], countriesArrState.length);
      setHaveData(true);
      setValues(newData);
      setResponse(res.data[1]);
      setUnit(res.data[1][0].indicator.value);
    } catch (error) {
      console.log(error);
    }
  }

  function updateCountriesArr(country: string) {
    setCountriesArr((countriesArr) => [...countriesArr, country]);
  }

  function updateIndicator(indicator: string) {
    setIndicator(indicator);
  }

  function updateFromYear(fromYear: string) {
    setFromYear(+fromYear);
  }

  function updateToYear(toYear: string) {
    setToYear(+toYear);
  }

  return (
    <div
      onKeyDown={(e) => handleEnter(e)}
      tabIndex={0}
      className='bg-bg h-screen flex'
    >
      <Sidebar
        submit={submit}
        updateCountriesArr={updateCountriesArr}
        countriesArrState={countriesArrState}
        updateIndicator={updateIndicator}
        indicatorState={indicatorState}
        updateFromYear={updateFromYear}
        fromYearState={fromYearState}
        updateToYear={updateToYear}
        toYearState={toYearState}
      />
      <div role='dataTest' className='hidden'>{valuesState[0][0]}</div>
      <ChartContainer
        countriesArrState={countriesArrState}
        haveDataState={haveDataState}
        valuesState={valuesState}
        responseState={responseState}
        unitState={unitState}
        magnitudeState={magnitudeState}
      />
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

export default Main;
