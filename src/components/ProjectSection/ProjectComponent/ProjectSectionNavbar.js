import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProjectSectionNavbar() {
	const location = useLocation();
	return (
		<div>
			<div className='py-3 cursor-pointer gap-4 grid grid-cols-1 md:grid-cols-3  '>
				<Link
					to=''
					className={`px-3 py-2 w-full hover:bg-rose-500 hover:text-white ${
						location.pathname === "/" ? "bg-rose-500" : "bg-rose-300"
					}`}
				>
					<div
						style={{ textDecoration: "none" }}
						className='text-gray-800 text-base font-semibold  '
					>
						CV Summary
					</div>
				</Link>
				<Link
					to='/video'
					className={`px-3 py-2 w-full  hover:bg-rose-500 hover:text-white ${
						location.pathname === "/video" ? "bg-rose-500" : "bg-rose-300"
					}`}
				>
					<div
						style={{ textDecoration: "none" }}
						className='text-gray-800 text-base font-semibold '
					>
						Videos
					</div>
				</Link>
				<Link
					to='lectures'
					className={`px-3 py-2 w-full  hover:bg-rose-500 hover:text-white ${
						location.pathname === "/lectures" ? "bg-rose-500" : "bg-rose-300"
					}`}
				>
					<div
						style={{ textDecoration: "none" }}
						className='text-gray-800 text-base font-semibold '
					>
						Lectures
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProjectSectionNavbar;
