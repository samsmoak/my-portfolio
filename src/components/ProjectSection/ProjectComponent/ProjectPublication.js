import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import prof from "../../../images/prof.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectPublication() {
	const path = require(`../../../images/prof.png`);
	const navigate = useNavigate();
	const handleClick = (event) => {
		navigate("/activity/publications");
	};
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const casinoData = [
		{
			id: 1,
			image:
				"https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg",
			text: "Participated in Building An Ecommerce Platform",
		},

		{
			id: 4,
			image:
				"https://cdn.pixabay.com/photo/2020/05/25/08/40/food-delivery-5217579_1280.png",
			text: `Worked On a food delivery Application`,
		},
		{
			id: 5,
			image:
				"https://cdn.pixabay.com/photo/2012/04/13/15/04/research-32747_1280.png",
			text: `PARTICIPATED ON A PUBLISHED A PAPER UNDER DR. MUKESH KUMAR`,
		},
		{
			id: 6,
			image:
				"https://cdn.pixabay.com/photo/2019/05/04/16/54/gambling-4178457_1280.jpg",
			text: `Worked on building a betting platform`,
		},
	];
	return (
		<div className='flex w-full  justify-center'>
			<div className='  grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-2 md:gap-4 xl:px-40 xl:grid-cols-3 '>
				{casinoData.map((v, i) => {
					return (
						<div
							data-aos='fade-up'
							data-aos-once='true'
							// data-aos-offset='200'
							// data-aos-delay='400'
							data-aos-duration='1500'
							data-aos-easing='ease-out-back'
							onClick={() => handleClick()}
						>
							<div className=' overflow-hidden w-fit h-fit cursor-pointer'>
								<div
									className={`w-full relative md:w-96    hover:scale-110  duration-300 bg-cover  `}
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

export default ProjectPublication;
