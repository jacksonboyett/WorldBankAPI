import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';
import { DataContext } from '../components/DataContext';
import { useContext } from 'react';
import axios from 'axios';

function Main() {

  const [ data, setData ] = useContext(DataContext);

  async function submit() {
    // const { countries, indicator, from, to } = data;
    const url = `http://api.worldbank.org/v2/country/PE/indicator/FP.CPI.TOTL.ZG?&format=json&date=2000:2022`
    try {
      const res = await axios.get(url)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-bg h-screen flex'>
      <Sidebar submit={submit} />
      <ChartContainer />
    </div>
  );
}

export default Main;
