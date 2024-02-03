import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProjectSectionNavbar from "./ProjectSectionComponent/ProjectSectionNavbar";

function ProjectSection() {
	const location = useLocation();
	return (
		<div className='w-full py-20 ' id='sectionproj'>
			<div className='w-full py-10 flex flex-col justify-center items-center space-y-4'>
				<div className='px-2 bg-yellow-400 font-semibold'>Portfolio</div>
				<div className='w-full text-center  text-4xl font-semibold capitalize'>
					some of my recent projects
				</div>
			</div>
			<div className='flex w-full justify-center items-center py-10'>
				<div className='w-full flex justify-center'>
					<div className='w-3/5'>
						<ProjectSectionNavbar />
					</div>
				</div>
			</div>
			<div className='w-full h-fit px-4 md:px-0'>
				<Outlet />
			</div>
		</div>
	);
}

export default ProjectSection;
