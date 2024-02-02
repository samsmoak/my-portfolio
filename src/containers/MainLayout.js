import React from "react";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import SummarySection from "../components/SummarySection/SummarySection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Routess from "../Routess";
function MainLayout() {
	return (
		<div className='w-full'>
			<Routess />
		</div>
	);
}

export default MainLayout;
