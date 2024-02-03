import React from "react";
import { TypeAnimation } from "react-type-animation";
function Description() {
	const scrollToSection = (sectionproj) => {
		const targetElement = document.getElementById(sectionproj);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className='space-y-4 px-4   text-neutral-700 w-full flex flex-col items-center   lg:items-start '>
			<div className=' space-y-8 md:w-full flex flex-col justify-center  md:justify-start '>
				<div className='text-sm md:text-2xl capitalize '>
					Hi, I'm <span className='font-semibold '>jeff edmonds</span> A
				</div>
				<div className='text-xl md:text-4xl font-extrabold uppercase'>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							"computer scientist",
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							"mathematician",
							1000,
							"Lecturer",
							1000,
							"Mentor",
							1000,
						]}
						wrapper='span'
						speed={50}
						style={{ fontSize: "", display: "" }}
						repeat={Infinity}
					/>
				</div>

				<div className='w-full'>based in canada</div>
			</div>

			<div className='flex items-center space-x-4'>
				<div
					className='px-4 py-2 bg-neutral-700 text-white cursor-pointer'
					onClick={() => scrollToSection(`sectionproj`)}
				>
					view my works
				</div>
				<div className='flex space-x-1 text-sm'>
					<div
						className='cursor-pointer'
						onClick={() => scrollToSection(`sectioncont`)}
					>
						contact me
					</div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-5 h-5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Description;
