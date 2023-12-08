import { useContext } from 'react';
import { DataContext } from '../components/DataContext';

function useDataFetch() {
	const [ data, setData ] = useContext(DataContext);
	console.log(data)
	// return (  );
}

export default useDataFetch;