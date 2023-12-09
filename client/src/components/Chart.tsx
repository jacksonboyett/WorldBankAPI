import * as React from 'react';
import { useContext, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataContext } from '../context/DataContext';
import { InputContext } from '../context/InputContext';
import '../assets/Chart.css';

export default function MUIChart() {
  const [dataContext, setDataContext] = useContext(DataContext);
  const [inputContext, setInputContext] = useContext(InputContext);

  const { countries, indicator, from, to } = inputContext;

  let xLabels = [];
  let uData: any = [[]];

  if (dataContext) {
    xLabels = makeXLabelsArr(dataContext);
    uData = makeDataArr(dataContext, inputContext.countries.length);
    console.log(
      uData.map((arr: Array<number>, index: number) => {
        return {
          data: arr,
          label: 'jackson',
        };
      })
    );
  }

  return dataContext ? (
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
          filter:
            'invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(107%) contrast(102%)',
          transform: 'scale(1)',
        },
      }}
      series={
        uData.map( (arr: Array<number>, index: number) => {
          return (
            {
              data: arr,
              label: `${inputContext.countries[index]}`
            }
          )
        })
      }
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
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

function makeDataArr(resArr: any, numberOfCountries: number) {
  let count = 0;
  let dataArr = [];
  let allData = [];
  for (let j = 0; j < numberOfCountries; j++) {
    for (let i = 0; i < resArr.length / numberOfCountries; i++) {
      dataArr.push(resArr[count].value);
      count++;
    }
    dataArr = dataArr.reverse();
    allData.push(dataArr);
    dataArr = [];
  }
  return allData;
}
