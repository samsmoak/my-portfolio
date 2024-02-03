import React from "react";

function BarnerSection() {
	return (
		<div className='h-small2 w-full relative'>
			<img
				src='https://cdn.pixabay.com/photo/2018/03/10/18/03/laptop-3214756_1280.png'
				alt=''
				className='w-full h-full'
			/>
			<div className='absolute top-0 right-0 left-0 bottom-0 text-white backdrop-brightness-50'>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='flex flex-col items-center space-y-2'>
						<div className='text-sm lg:text-4xl font-semibold '>
							interested in collaborating with me?
						</div>
						<div className='py-2 px-3 bg-yellow-400 text-xl font-medium text-black'>
							Email !
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BarnerSection;
