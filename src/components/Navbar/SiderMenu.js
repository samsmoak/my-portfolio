import React from "react";
import { Link } from "react-router-dom";
import prof from "../../images/prot.jpg";

function SiderMenu({ sidemenu }) {
	return (
		<div
			className={`z-50 h-small1 w-52  lg:w-small2 bg-neutral-700 absolute top-14 -right-1 transform duration-500 flex justify-center ${
				sidemenu ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div
				className='text-white flex flex-col space-y-4 text-xl py-10 w-3/4'
				style={{ textDecoration: "none" }}
			>
				<div className='w-full justify-center flex'>
					<Link
						to='/'
						style={{ textDecoration: "none" }}
						className='text-white '
					>
						<div className='h-16 w-16 overflow-hidden rounded-full '>
							<img src={prof} alt='' className='w-full h-full object-cover' />
						</div>
					</Link>
				</div>
				<div>
					<Link
						to='/'
						style={{ textDecoration: "none" }}
						className='text-white text-base '
					>
						Home
					</Link>
				</div>
				<div>
					<Link
						to='/activity/publications'
						style={{ textDecoration: "none" }}
						className='text-white text-base '
					>
						Projects
					</Link>
				</div>
				<div>
					<Link
						to='/activity/lectures'
						style={{ textDecoration: "none" }}
						className='text-white text-base'
					>
						Lectures
					</Link>
				</div>
				<div>
					<Link
						to='/activity/videos'
						style={{ textDecoration: "none" }}
						className='text-white text-base '
					>
						Videos
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SiderMenu;
