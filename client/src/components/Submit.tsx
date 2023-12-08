import { DataContext } from "./DataContext";
import { useContext } from "react";

interface SubmitProps {
	submit: () => void, 
}

function Submit(props: SubmitProps) {

	return ( 
		<div onClick={props.submit}>
			GO!!!!!!!!!
		</div>
	 );
}

export default Submit;