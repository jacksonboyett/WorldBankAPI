import React from 'react';

interface IndicatorsProps {
	getIndicator: (indicator: string) => void,
}

function Indicators(props: IndicatorsProps) {

  return <div className='text-center'>
		<h2 className='underline'>Indicators</h2>
		<button onClick={() => props.getIndicator('FP.CPI.TOTL.ZG')}>Pick Indicator</button>
	</div>;
}

export default Indicators;
