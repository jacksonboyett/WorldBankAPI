import { faChevronDown, faEarthAmerica, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Countries() {
	return ( 
		<div className="bg-gradient-to-r from-darkBlueBg to-lightBlueBg h-12 flex items-center rounded-lg px-4 justify-between mb-4">
			<FontAwesomeIcon icon={faEarthAmerica}/>
			<div className='mr-auto ml-4'>Countries</div>
			<FontAwesomeIcon icon={faChevronDown}/>
			
		</div>
	 );
}

export default Countries;