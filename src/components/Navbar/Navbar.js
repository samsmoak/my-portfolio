"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";

function Navbar() {
	const [navbar, setnavbar] = useState(false);
	const navbarhandler = () => {
		if (window.scrollY >= 100) {
			setnavbar(true);
		} else {
			setnavbar(false);
		}
	};
	window.addEventListener("scroll", navbarhandler);
	return (
		<div
			className={`fixed z-10  top-0 w-full py-3 flex justify-between px-40 duration-300  ${
				navbar ? "bg-white" : "bg-yellow-300"
			}`}
		>
			<div className='font-extrabold text-xl'>Jeff</div>
			<div className='flex'>
				<div>(062) 446 434 444</div>
				<MenuButton />
			</div>
		</div>
	);
}

export default Navbar;
