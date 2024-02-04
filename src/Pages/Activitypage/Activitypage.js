import React from "react";
import ActivityNavbar from "./Components/ActivityNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Activitypage() {
	return (
		<div className='mt-12 py-8 w-screen h-screen flex flex-col  bg-neutral-900 overflow-scroll '>
			<ActivityNavbar />
			<Outlet />
		</div>
	);
}

export default Activitypage;
