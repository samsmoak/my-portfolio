import React from "react";
import { Link, Outlet } from "react-router-dom";

function ActivityNavbar() {
	return (
		<div className='w-full flex justify-center'>
			<div className='py-2 space-x-4 flex  '>
				<Link
					to='Publications'
					style={{ textDecoration: "none" }}
					className='text-white text-base '
				>
					Publication
				</Link>
				<Link
					to='videos'
					style={{ textDecoration: "none" }}
					className='text-white text-base '
				>
					Videos
				</Link>
				<Link
					to='lectures'
					style={{ textDecoration: "none" }}
					className='text-white text-base '
				>
					Lectures
				</Link>

				{/* <Link
					to='timetable'
					style={{ textDecoration: "none" }}
					className='text-white text-base '
				>
					Timetable
				</Link> */}
			</div>
		</div>
	);
}

export default ActivityNavbar;
