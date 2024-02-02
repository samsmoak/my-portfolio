import React, { useState } from "react";

function ProjectPublication() {
	const [casinoData, setCasinoData] = useState([
		{
			id: 1,
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			text: "heyay",
		},
		{
			id: 2,
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			text: "heyay",
		},
		{
			id: 3,
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			text: "heyay",
		},
		{
			id: 4,
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			text: "heyay",
		},
	]);
	return (
		<div className='px-40 h-big grid grid-cols-3 '>
			{casinoData.map((v, i) => {
				return (
					<div className='overflow-hidden w-fit h-fit bg-rose-400 cursor-pointer'>
						<div className={`w-96    hover:scale-110  duration-300 bg-cover  `}>
							<img src={v.image} alt='' className='w-full h-full' />
							<div className='absolute text-white opacity-0 delay-75 hover:duration-500 hover:backdrop-brightness-50 hover:opacity-100 hover:bg-opacity-40 top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
								<div className='w-2/4  hover:opacity-100 '>
									<div className='z-40'>
										<button className=' py-2 w-full bg-orange-500 rounded-2xl'>
											signup
										</button>
									</div>
									<div className='w-full text-center '>or</div>
									<div>
										<button className='w-full py-2 bg-green-400 rounded-2xl'>
											login
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectPublication;
