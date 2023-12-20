import CountriesInput from './CountriesInput';
import IndicatorInput from './IndicatorInput';
import DatesInput from './DatesInput';
import Submit from './Submit';

interface SidebarProps {
  submit: () => void,
  updateCountriesArr: (country: Array<string>) => void,
  countriesArrState: Array<string>,
  updateIndicator: (indicator: string) => void,
  indicatorState: string,
  updateFromYear: (fromYear: string) => void,
  fromYearState: number,
  updateToYear: (toYear: string) => void,
  toYearState: number,
}

function Sidebar(props: SidebarProps) {
  return (
    <div className='h-[calc(100vh-1rem)] flex flex-col text-center justify-between text-white rounded-xl my-auto ml-2 px-6 w-96 bg-gradient-to-b from-lightGrayBg to-darkGrayBg'>
      <div className='topSidebarContainer'>
        <h1 className='m-6 text-2xl'>World Bank Data Visualizer</h1>
        <div className='bg-gradient-to-r from-lightBg via-[#6B6B70] to-lightGrayBg h-[1px] mb-4'></div>
        <CountriesInput updateCountriesArr={props.updateCountriesArr} countriesArrState={props.countriesArrState}/>
      </div>
      <IndicatorInput updateIndicator={props.updateIndicator} indicatorState={props.indicatorState}/>
      <div className='topSidebarContainer'>
      <DatesInput updateFromYear={props.updateFromYear} fromYearState={props.fromYearState} updateToYear={props.updateToYear} toYearState={props.toYearState} />
      <Submit submit={props.submit}/>
      </div>
    </div>
  );
}

export default Sidebar;
