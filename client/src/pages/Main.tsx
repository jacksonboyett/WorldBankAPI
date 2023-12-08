import Sidebar from '../components/Sidebar';
import ChartContainer from '../components/ChartContainer';

function Main() {
  return (
    <div className='bg-bg h-screen flex'>
      <Sidebar />
      <ChartContainer />
    </div>
  );
}

export default Main;
