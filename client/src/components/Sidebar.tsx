import React from 'react';
import Indicators from './Indicators';
import Countries from './Countries';

interface SidebarProps {
	getIndicator: (indicator: string) => void,
	getCountry: (country: string) => void,
}

function Sidebar(props: SidebarProps) {
  return (
    <div
      className='fixed top-0 h-[95vh] w-64 flex items-center justify-between
			flex-col bg-componentbg rounded-lg text-white shadow-white m-4'
    >
      <h1 className='m-2 text-2xl'>World Bank Data</h1>
      <Indicators getIndicator={props.getIndicator}/>
      <Countries getCountry={props.getCountry}/>
    </div>
  );
}

export default Sidebar;
