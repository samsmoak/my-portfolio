import React, { Suspense, useState } from "react";

import prof from "../../../images/prof.png";

function ProjectVideo() {
	const [componentAVisible, setComponentAVisible] = useState(false);
	const [linkData, setLinkData] = useState(null);
	const handleClick = (event) => {
		event.preventDefault();
		window.location.replace("/activity/videos");
	};
	const path = require(`../../../images/prof.png`);
	const casinoData = [
		{
			id: 1,
			image:
				"https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977960_1280.jpg",
			text: "introduction to machine learning",
		},

		{
			id: 4,
			image:
				"https://cdn.pixabay.com/photo/2021/07/04/20/16/woman-6387541_1280.jpg",
			text: "Complexity Theory",
		},
		{
			id: 5,
			image:
				"https://cdn.pixabay.com/photo/2018/12/06/10/44/algorithm-3859537_1280.jpg",
			text: "Generalisation of Models",
		},
		{
			id: 6,
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/JeffEdmondsbyJake.jpg/440px-JeffEdmondsbyJake.jpg",
			text: "Mathematics in machine Learning",
		},
		{
			id: 7,
			image:
				"https://cdn.pixabay.com/photo/2014/09/24/09/28/steelwool-458842_1280.jpg",
			text: "Advanced Algorithms",
		},
	];
	return (
		<Suspense>
			<div className=' flex w-full  justify-center'>
				<div className='  grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-2 md:gap-4 xl:px-40 xl:grid-cols-3 '>
					{casinoData?.map((v, i) => {
						return (
							<div className=' overflow-hidden w-full cursor-pointer   '>
								<div
									onClick={(e) => handleClick(e)}
									className={`w-full md:w-96 relative     hover:scale-110  duration-300   `}
								>
									<img
										src={v.image && v.image}
										alt=''
										className='w-full h-full'
									/>
									<div className='absolute text-white opacity-0 delay-75 hover:duration-500 hover:backdrop-brightness-50 hover:opacity-100 hover:bg-opacity-40 top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
										{
											<div className='  w-2/4 text-2xl font-semibold text-gray-200  hover:opacity-100 '>
												<div>{v.text}</div>
											</div>
										}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Suspense>
	);
}

export default ProjectVideo;
