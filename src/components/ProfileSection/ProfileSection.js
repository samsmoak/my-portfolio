import React from "react";
import Description from "./ProfileSectioncomponents/Description";
import ImageSection from "./ProfileSectioncomponents/ImageSection";

function ProfileSection() {
	const scrollToSection = (sectionproj) => {
		const targetElement = document.getElementById(sectionproj);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className='w-full'>
			<div className='w-full z-40  lg:py-48 lg:px-40 md:px-10   py-2 md:flex   items-center bg-yellow-300 space-y-8 '>
				<Description />
				<ImageSection />
			</div>
			<div className='w-full bg-yellow-300 flex justify-center'>
				<div
					className='cursor-pointer'
					onClick={() => scrollToSection(`sectionsum`)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-8 h-8 animate-bounce'
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
	);
}

export default ProfileSection;
