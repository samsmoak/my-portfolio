import React from "react";

function Publications() {
	const publica = [
		{
			id: 1,
			title: "Video 1",
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			description: `loremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-uploremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-up`,
		},
		{
			id: 2,

			title: "Video 1",
			image:
				"https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977960_1280.jpg",

			description: `loremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-uploremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-up`,
		},
		{
			id: 3,
			title: "Video 1",
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			description: `loremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-uploremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-up`,
		},
		{
			id: 4,
			title: "Video 1",
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			description: `loremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-uploremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-up`,
		},
		{
			id: 5,
			title: "Video 1",
			image:
				"https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg",
			description: `loremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-uploremI enjoy discussing new projects and design challenges.
				 Please share as much info, as possible so we can get the 
				 most out of our first catch-up`,
		},
	];
	return (
		<div>
			<div className='w-full flex justify-center  font-semibold text-2xl text-neutral-700'>
				<div className='w-3/5 text-gray-400'>Publications</div>
			</div>
			<div className='w-full  flex justify-center '>
				<div className='w-3/5 space-y-6 py-6'>
					{publica.map((p, k) => {
						return (
							<div className=' py-4  w-full bg-neutral-200 rounded-sm px-4'>
								<div className='font-bold'>{p.title}</div>
								<div className='flex h-fit font-medium  items-center '>
									<div className='w-96  '>
										<img
											src={p.image}
											alt=''
											className=' w-full h-full object-contain '
										/>
									</div>
									<div className='px-4 text-neutral-700'>{p.description}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Publications;
