import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';
import { InputContext } from '../context/InputContext';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import axios from 'axios';
import { indicatorsCodesJson } from '../data/indicators-with-codes';
import { countriesCodesJson } from '../data/countries-with-codes';

function Main() {
  const [inputContext] = useContext(InputContext);
  const [dataContext, setDataContext] = useContext(DataContext);

  async function submit() {
    // const { countries, indicator, from, to } = dataContext;
    let countries = processCountriesInput(inputContext.countries);
    let indicator = processIndicatorInput(inputContext.indicator);
    let from = inputContext.from;
    let to = inputContext.to;
    const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?&format=json&date=${from}:${to}`;
    // const url = `http://api.worldbank.org/v2/country/PE/indicator/FP.CPI.TOTL.ZG?&format=json&date=2015:2022`;
    try {
      const res = await axios.get(url);
      setDataContext(res.data[1]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-bg h-screen flex'>
      <Sidebar submit={submit} />
      <ChartContainer />
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
