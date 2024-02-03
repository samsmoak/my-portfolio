import React from "react";
import { Link, Outlet } from "react-router-dom";

function ProjectSection() {
	return (
		<div className='w-full'>
			<div className='w-full flex flex-col justify-center items-center space-y-4'>
				<div className='px-2 bg-yellow-300'>Portfolio</div>
				<div className='w-full text-center capitalize text-4xl font-semibold capitalize'>
					some of my recent projects
				</div>
			</div>
			<div className='flex w-full justify-center items-center'>
				<div className='w-full flex justify-center'>
					<div className='py-3 space-x-4 grid grid-cols-1 md:grid-cols-3  '>
						<Link
							to='Publications'
							style={{ textDecoration: "none" }}
							className='text-black text-base '
						>
							Publication
						</Link>
						<Link
							to=''
							style={{ textDecoration: "none" }}
							className='text-black text-base '
						>
							Videos
						</Link>
						<Link
							to='lectures'
							style={{ textDecoration: "none" }}
							className='text-black text-base '
						>
							Lectures
						</Link>
					</div>
				</div>
			</div>
			<div className='w-full px-4 md:px-0'>
				<Outlet />
			</div>
		</div>
	);
}

export default ProjectSection;
