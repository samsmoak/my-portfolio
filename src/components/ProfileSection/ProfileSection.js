import React from "react";
import Description from "./ProfileSectioncomponents/Description";
import ImageSection from "./ProfileSectioncomponents/ImageSection";

function ProfileSection() {
	return (
		<div className='lg:py-52 lg:px-40 md:px-10  py-2 w-full md:flex   items-center bg-yellow-300 space-y-8 '>
			<Description />
			<ImageSection />
		</div>
	);
}

export default ProfileSection;
