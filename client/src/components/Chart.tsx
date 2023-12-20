import { LineChart } from '@mui/x-charts/LineChart';

interface ChartProps {
  countriesArrState: Array<string>,
  haveDataState: boolean;
  valuesState: Array<Array<number>>;
  responseState: any,
  unitState: string;
  magnitudeState: number;
}

export default function Chart(props: ChartProps) {

  let xLabels = [];
  let uData: any = [[]];

  xLabels = makeXLabelsArr(props.responseState);
  uData = props.valuesState;
  
  return props.haveDataState ? (
    <div role='chart'className='h-full'>
      <LineChart
        sx={{
          //change left yAxis label styles
          '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
            strokeWidth: '0.4',
            fill: '#FFFFFF',
          },
          // change all labels fontFamily shown on both xAxis and yAxis
          '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel': {
            fontFamily: 'Roboto',
          },
          // change bottom label styles
          '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
            strokeWidth: '0.5',
            fill: '#FFFFFF',
          },
          // bottomAxis Line Styles
          '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
            stroke: '#FFFFFF',
            strokeWidth: 0.4,
          },
          // leftAxis Line Styles
          '& .MuiChartsAxis-left .MuiChartsAxis-line': {
            stroke: '#FFFFFF',
            strokeWidth: 0.4,
          },
          // Legend Styles
          '& .MuiChartsLegend-series>text': {
            filter:
              'invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(107%) contrast(102%)',
            transform: 'scale(1)',
          },
          '& .MuiChartsAxis-label': {
            filter:
              'invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(107%) contrast(102%)',
            transform: 'translate(-10px)',
          },
        }}
        series={uData.map((arr: Array<number>, index: number) => {
          return {
            data: arr,
            label: `${props.countriesArrState[index]}`,
          };
        })}
        xAxis={[{ scaleType: 'point', data: xLabels, label: 'Year' }]}
        yAxis={[{ label: `${props.unitState} (x${props.magnitudeState.toExponential()})` }]}
      />
    </div>
  ) : (
    <div></div>
  );
}

function makeXLabelsArr(resArr: any) {
  let xLabelsArr = [];
  for (let i = 0; i < resArr.length; i++) {
    xLabelsArr.push(resArr[i].date);
  }
  xLabelsArr = xLabelsArr.reverse();
  return xLabelsArr;
}
