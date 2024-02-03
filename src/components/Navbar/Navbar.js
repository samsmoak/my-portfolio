import React, { useState } from "react";
import { Link } from "react-router-dom";
import SIdeMenu from "./SideMenu";
import SideMenu from "./SideMenu";

function Navbar() {
	const [sidemenu, setSidemenu] = useState(false);
	const [navbar, setnavbar] = useState(false);
	const navbarhandler = () => {
		if (window.scrollY >= 100) {
			setnavbar(true);
		} else {
			setnavbar(false);
		}
	};
	const sidemenuhandler = () => {
		setSidemenu((sidemenu) => !sidemenu);
	};
	const handlelogout = () => {};

	window.addEventListener("scroll", navbarhandler);
	return (
		<div
			className={`fixed z-10 px-4   top-0 w-full py-2  duration-300  ${
				navbar ? "bg-white" : "bg-yellow-300"
			}`}
		>
			<div className='w-full relative lg:px-40 flex justify-between '>
				<div className='font-extrabold text-xl'>
					<Link to='/'>Jeff</Link>
				</div>
				<div className=''>
					<div
						className='z-50  cursor-pointer relative '
						onClick={sidemenuhandler}
					>
						{!sidemenu ? (
							<div className=' rounded-lg mr-3  text-black  font-extrabold'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-8 h-8'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
							</div>
						) : (
							<div className=' rounded-lg mr-3 text-black  font-bold'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-8 w-8'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									stroke-width='2'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</div>
						)}
					</div>
				</div>
			</div>
			<SideMenu sidemenu={sidemenu} />
		</div>
	);
}

export default Navbar;
