import { faChevronDown, faEarthAmerica, faGlobe, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IndicatorInput() {
	return ( 
		<div className="bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg px-4 mb-4 justify-between">
			<FontAwesomeIcon icon={faScaleBalanced}/>
			<div className='mr-auto ml-4'>Indicator</div>
			<FontAwesomeIcon icon={faChevronDown}/>
		</div>
	 );
}

export default IndicatorInput;