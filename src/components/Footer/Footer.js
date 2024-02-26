import React from "react";

function Footer() {
	return (
		<div className='md:h-72 py-14 flex items-center w-screen bg-neutral-900 text-white'>
			<div className='w-full grid grid-cols-1 lg:grid-cols-2 capitalize'>
				<div className=' text-lg text-center'>
					copyright © 2024{" "}
					<span className=' font-bold text-yellow-200'>sam</span> . All Rights
					Reserved.
				</div>
				<div className=' text-lg text-center'>
					{" "}
					designed by <span className=' font-bold text-yellow-200'>sam</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
