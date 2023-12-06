import React from 'react';

interface CountriesProps {
	getCountry: (country: string) => void,
}

function Countries(props: CountriesProps) {
  return <div className='text-center'>
		<h2 className='underline'>Countries</h2>
		<button onClick={() => props.getCountry('PER')}>Pick Country</button>
	</div>;
}

export default Countries;
