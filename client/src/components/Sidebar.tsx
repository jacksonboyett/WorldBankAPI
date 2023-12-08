import CountriesInput from './CountriesInput';
import IndicatorInput from './IndicatorInput';
import DatesInput from './DatesInput';
import Submit from './Submit';

interface SidebarProps {
  submit: () => void
}

function Sidebar(props: SidebarProps) {
  return (
    <div className='h-[calc(100vh-1rem)] flex flex-col text-center justify-between text-white rounded-xl my-auto ml-2 p-6 pt-0 w-96 bg-gradient-to-b from-lightGrayBg to-darkGrayBg'>
      <div className='topSidebarContainer'>
        <h1 className='m-6 text-2xl'>World Bank Data Visualizer</h1>
        <div className='bg-gradient-to-r from-lightBg via-[#6B6B70] to-lightGrayBg h-[1px] mb-4'></div>
        <CountriesInput />
      </div>
      <IndicatorInput />
      <DatesInput />
      <Submit submit={props.submit}t/>
    </div>
  );
}

export default Sidebar;
