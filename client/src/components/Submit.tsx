interface SubmitProps {
	submit: () => void, 
}

function Submit(props: SubmitProps) {

	return ( 
		<div className='relative bg-white text-black text-xl font-bold h-10 w-24 ml-auto flex justify-center items-center rounded-lg mb-4' onClick={props.submit}>
			GO
		</div>
	 );
}

export default Submit;