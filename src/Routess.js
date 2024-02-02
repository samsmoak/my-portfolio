import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import ProjectSectionAll from "./components/ProjectSection/ProjectSectionComponent/ProjectSectionAll";

function Routess() {
	const routes = useRoutes([
		{
			path: "/",
			element: <Homepage />,
			children: [
				{
					path: "",
					element: <ProjectSectionAll />,
				},
				{
					path: "lectures",
					element: <ProjectSectionAll />,
				},
				{
					path: "videos",
					element: <ProjectSectionAll />,
				},
			],
		},
	]);
	return routes;
}

export default Routess;
