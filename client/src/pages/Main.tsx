import axios from 'axios'

import Sidebar from '../components/Sidebar'
import Chart from '../components/Chart'

function Main() {
  const url = 'http://localhost:3001/testServer'

  async function callServer() {
    try {
      const response = await axios.get(url);
      console.clear
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-bg h-screen flex font-jakarta'>
      <Sidebar/>
      <Chart/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={callServer}>Test Server</button>
      <a className='App-link' href='https://reactjs.org'>Learn React</a>
    </div>
  )
}

export default Main