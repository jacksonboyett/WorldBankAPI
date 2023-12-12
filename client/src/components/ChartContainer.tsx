import Chart from './Chart';

function ChartContainer() {
  return (
    <div className='h-[calc(100vh-1rem)] w-full relative flex flex-col text-center justify-between text-white rounded-xl my-auto mx-2 p-6 pt-0 w-96 bg-gradient-to-b from-lightGrayBg to-darkGrayBg'>
      <Chart />
    </div>
  );
}

export default ChartContainer;
