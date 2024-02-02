import React from "react";
import jeff from "../../../images/jeff-photo.jpg";

function ImageSection() {
	return (
		<div className='h-small2 w-small2 rounded-full bg-white overflow-hidden p-4'>
			<img
				src={jeff}
				alt=''
				className='h-full w-full object-cover rounded-full'
			/>
		</div>
	);
}

export default ImageSection;
