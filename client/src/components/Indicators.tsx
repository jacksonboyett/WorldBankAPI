import React from 'react';

interface IndicatorsProps {
	pull_data: any
}

function Indicators(props: IndicatorsProps) {
	
// props.pull_data('Jackson')

  return <div className='text-center'>
		<h2 className='underline'>Indicators</h2>
		<p>Inflation</p>
	</div>;
}

export default Indicators;
