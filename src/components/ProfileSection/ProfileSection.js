import React from "react";
import Description from "./ProfileSectioncomponents/Description";
import ImageSection from "./ProfileSectioncomponents/ImageSection";

function ProfileSection() {
	return (
		<div className='h-bigx bg-yellow-300 px-40 flex w-full justify-between items-center'>
			<Description />
			<ImageSection />
		</div>
	);
}

export default ProfileSection;
