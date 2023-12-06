import React from 'react';
import Indicators from './Indicators';
import Countries from './Countries';
import axios from 'axios';
import { useState } from 'react';

function Sidebar() {

  const [data, setData] = useState<number>()
  const [indicator, setIndicator] = useState<string>();
  const [country, setCountry] = useState<string>();

  async function getData() {
    let url = createUrl();
    try {
      const response = await axios.get(url);
      console.log(response.data[1][0].value)
      setData(response.data[1][0].value)
    } catch (error) {
      console.log(error)
    }
  }

  function getIndicator( indicator: string) {
    setIndicator(indicator)
  }
  
  function getCountry( country: string ) {
    setCountry(country)
  }

  function createUrl() {
    const url = `http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?&format=json&date=2022`
    return url 
  }

  return (
    <div
      className='fixed top-0 h-[95vh] w-64 flex items-center justify-between
			flex-col bg-componentbg rounded-lg text-white shadow-white m-4'
    >
      <h1 className='m-2 text-2xl'>World Bank Data</h1>
      <Indicators getIndicator={getIndicator}/>
      <Countries getCountry={getCountry}/>
      <button role='getDataButton' className= 'hover:text-green-500 focus:text-purple-500' onClick={getData}>Go</button>
      <p role='dataDisplay'>{data}</p>
    </div>
  );
}

export default Sidebar;
