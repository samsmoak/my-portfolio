import React from "react";
import bulb from "../../images/bulb4.png";

function QuestionIcon() {
	return (
		<div className='w-3/5 lg:w-96 lg:h-96'>
			<img src={bulb} alt='' className='w-full h-full object-contain' />
		</div>
	);
}

export default QuestionIcon;
