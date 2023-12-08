import { faCalendarCheck, faCalendarDay, faCalendarDays, faChevronDown, faEarthAmerica, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DatesInput() {
	return ( 
		<div className='text-start'>
			<h1>From</h1>
		<div className="bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg px-4 justify-between mb-4">
			<FontAwesomeIcon icon={faCalendarDays}/>
			<div className='mr-auto ml-4'>2000</div>
			<FontAwesomeIcon icon={faChevronDown}/>
		</div>
		<h1>To</h1>
		<div className="bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg px-4 justify-between">
			<FontAwesomeIcon icon={faCalendarDays}/>
			<div className='mr-auto ml-4'>2006</div>
			<FontAwesomeIcon icon={faChevronDown}/>
		</div>
		</div>
	 );
}

export default DatesInput;