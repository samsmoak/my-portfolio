import React from "react";
import jeff from "../../../images/jeff-photo.jpg";

function ImageSection() {
	return (
		<div className='w-full  flex justify-center'>
			<div className='  w-56 h-56 sm:w-96 sm:h-96   md:h-small3 md:w-small3 rounded-full bg-white overflow-hidden p-4'>
				<img
					src={jeff}
					alt=''
					className='h-full w-full object-cover rounded-full'
				/>
			</div>
		</div>
	);
}

export default ImageSection;
