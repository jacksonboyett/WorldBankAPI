import React from 'react';
import Indicators from './Indicators';
import Countries from './Countries';
import axios from 'axios';

function Sidebar() {

  let url = 'http://api.worldbank.org/v2/country/PER/indicator/FP.CPI.TOTL.ZG?&format=json'

  async function getData() {
    try {
      const response = await axios.get(url);
      console.clear
      console.log(response.data[1][0].country.value)
      console.log(response.data[1][0].date)
      console.log(response.data[1][0].value)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className='fixed top-0 h-[95vh] w-64 flex items-center justify-between
			flex-col bg-componentbg rounded-lg text-white shadow-white m-4'
    >
      <h1 className='m-2 text-2xl'>World Bank Data</h1>
      <Indicators/>
      <Countries/>
      <button className= 'hover:text-green-500 focus:text-purple-500' onClick={getData}>Go</button>
    </div>
  );
}

export default Sidebar;
