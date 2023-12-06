import React from 'react';
// import { Chart } from './ChartExample';
import Chart from './Chart';

function ChartContainer() {
  return (
    <div
      className='top-0 h-[95vh] w-[60vw] flex 
			flex-col bg-componentbg rounded-lg text-white shadow-white m-4 ml-72'
    >
      <Chart/>
    </div>
  );
}

export default ChartContainer;
