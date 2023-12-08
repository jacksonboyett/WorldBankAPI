import * as React from 'react';
import { useContext, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataContext } from './DataContext';
import '../assets/Chart.css';

export default function MUIChart() {
  const [dataContext, setDataContext] = useContext(DataContext);

  useEffect(() => {
    console.log(typeof dataContext)
  }, []);

  const xLabels = makeXLabelsArr(dataContext);
  const uData = makeDataArr(dataContext);

  // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  // const xLabels = [
  //   'Page A',
  //   'Page B',
  //   'Page C',
  //   'Page D',
  //   'Page E',
  //   'Page F',
  //   'Page G',
  // ];

  return (
    dataContext ?
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
        // Label Styles
        '& .MuiChartsLegend-series>text': {
          filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(107%) contrast(102%)',
          transform: 'scale(1.5)',
        }
      }}
      series={[
        // { data: pData, label: 'pv' },
        { data: uData, label: 'Peru inflation from 2015-2022' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    :
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

function makeDataArr(resArr: any) {
  let dataArr = [];
  for (let i = 0; i < resArr.length; i++) {
    dataArr.push(resArr[i].value);
  }
  dataArr = dataArr.reverse();
  return dataArr;
}
