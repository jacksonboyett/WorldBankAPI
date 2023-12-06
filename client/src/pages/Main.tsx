import axios from 'axios'
import Sidebar from '../components/Sidebar'
import Chart from '../components/ChartContainer'
import ChartContainer from '../components/ChartContainer'
import { useState } from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Main() {
  // const url = 'http://localhost:3001/testServer'

  // async function callServer() {
  //   try {
  //     const response = await axios.get(url);
  //     console.clear
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
    <div className='bg-bg h-screen flex font-jakarta'>
      <Sidebar getIndicator={getIndicator} getCountry={getCountry}/>
      <ChartContainer/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' role='getDataButton' onClick={getData}>Get Data</button>
      {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Test Server</button> */}
      <p role='dataDisplay'>{data}</p>
    </div>
  )
}

export default Main