import React from "react";
import { Outlet } from "react-router-dom";

function ProjectSection() {
	return (
		<div className='w-full'>
			<div className='w-full flex flex-col justify-center items-center space-y-4'>
				<div className='px-2 bg-yellow-300'>Portfolio</div>
				<div className='text-4xl font-medium capitalize'>
					some of my recent projects
				</div>
			</div>
			<div className='flex w-full justify-center items-center'>
				<div className='space-x-4 flex '>
					<div>lecture</div>
					<div>publications</div>
					<div>video</div>
					<div>slide</div>
				</div>
			</div>

			<Outlet />
		</div>
	);
}

export default ProjectSection;
