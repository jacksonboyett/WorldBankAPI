import Countries from "./Countries";
import Indicator from "./Indicators";
import Dates from "./Dates";

function Sidebar() {
	return ( 
		<div className="h-[calc(100vh-1rem)] flex flex-col text-center text-white rounded-xl my-auto ml-2 p-6 pt-0 w-96 bg-gradient-to-b from-lightGrayBg to-darkGrayBg">
			<h1 className="m-6 text-2xl">World Bank Data Visualizer</h1>
			<div className="bg-gradient-to-r from-lightBg via-[#6B6B70] to-lightGrayBg h-[1px] mb-4"></div>
			<Countries/>
			<Indicator/>
			<Dates/>
		</div>
	 );
}

export default Sidebar;