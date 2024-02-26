import React, { useEffect } from "react";
import jeff from "../../../images/profileer.png";
import AOS from "aos";
import "aos/dist/aos.css";
function ImageSection() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className='w-full  flex justify-center'>
			<div
				data-aos='zoom-in'
				data-aos-once='true'
				// data-aos-offset='200'
				// data-aos-delay='400'
				data-aos-duration='1500'
				data-aos-easing='ease-out-back'
				className='bg-neutral-700  w-56 h-56 sm:w-96 sm:h-96   md:h-small3 md:w-small3 rounded-full  overflow-hidden p-6'
			>
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
