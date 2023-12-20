import Chart from './Chart';

interface ChartContainerProps {
  countriesArrState: Array<string>,
  haveDataState: boolean;
  valuesState: Array<number>;
  responseState: any, 
  unitState: string;
  magnitudeState: number;
}

function ChartContainer(props: ChartContainerProps) {
  return (
    <div className='h-[calc(100vh-1rem)] w-full relative flex flex-col text-center justify-between text-white rounded-xl my-auto mx-2 p-6 pt-0 w-96 bg-gradient-to-b from-lightGrayBg to-darkGrayBg'>
      <Chart
        countriesArrState={props.countriesArrState}
        haveDataState={props.haveDataState}
        valuesState={props.valuesState}
        responseState={props.responseState}
        unitState={props.unitState}
        magnitudeState={props.magnitudeState}
      />
    </div>
  );
}

export default ChartContainer;
