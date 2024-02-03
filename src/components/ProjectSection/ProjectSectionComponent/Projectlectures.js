import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import prof from "../../../images/prof.png";

function ProjectLectures() {
	const path = require(`../../../images/prof.png`);

	const handleClick = () => {
		// Navigate to a different route
		window.location.replace("/activity/lectures");
	};
	const [casinoData, setCasinoData] = useState([
		{
			id: 1,
			image:
				"https://cdn.pixabay.com/photo/2022/07/06/03/18/mathematics-7304235_1280.png",
			text: "introduction to machine learning",
		},

		{
			id: 4,
			image:
				"https://cdn.pixabay.com/photo/2023/05/24/22/48/geometric-8015996_1280.png",
			text: "Complexity Theory",
		},
		{
			id: 5,
			image:
				"https://cdn.pixabay.com/photo/2013/07/13/14/07/spiral-162177_1280.png",
			text: "Generalisation of Models",
		},
		{
			id: 6,
			image:
				"https://cdn.pixabay.com/photo/2022/05/24/19/26/flourish-7219164_1280.png",
			text: "Mathematics in machine Learning",
		},
	]);
	return (
		<div className='flex w-full justify-center'>
			<div className='  grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-2 md:gap-4 xl:px-40 xl:grid-cols-3 '>
				{casinoData.map((v, i) => {
					return (
						<div onClick={() => handleClick()}>
							<div className='overflow-hidden w-fit h-fit  cursor-pointer'>
								<div
									className={`w-full md:w-96 relative    hover:scale-110  duration-300 bg-cover  `}
								>
									<img src={v.image} alt='' className='w-full h-full' />
									<div className='absolute text-white opacity-0 delay-75 hover:duration-500 hover:backdrop-brightness-50 hover:opacity-100 hover:bg-opacity-40 top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
										<div className='w-2/4 font-semibold text-2xl text-gray-200  hover:opacity-100 '>
											<div>{v.text}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProjectLectures;
