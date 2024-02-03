import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Activitypage from "./Pages/Activitypage/Activitypage";
import Publications from "./Pages/Activitypage/subpages/Publications";
import Lectures from "./Pages/Activitypage/subpages/Lectures";
import Videos from "./Pages/Activitypage/subpages/Videos";
import ProjectPublication from "./components/ProjectSection/ProjectSectionComponents/ProjectPublication";
import ProjectVideo from "./components/ProjectSection/ProjectSectionComponents/ProjectVideo";
import ProjectLectures from "./components/ProjectSection/ProjectSectionComponents/ProjectLectures";

function Routess() {
	const routes = useRoutes([
		{
			path: "/",
			element: <Homepage />,
			children: [
				{
					path: "",
					element: <ProjectVideo />,
				},
				{
					path: "Publications",
					element: <ProjectPublication />,
				},
				{
					path: "lectures",
					element: <ProjectLectures />,
				},
			],
		},
		{
			path: "/activity",
			element: <Activitypage />,
			children: [
				{
					path: "publications",
					element: <Publications />,
				},
				{
					path: "lectures",
					element: <Lectures />,
				},
				{
					path: "videos",
					element: <Videos />,
				},
				{
					path: "timetable",
					element: <Videos />,
				},
			],
		},
	]);
	return routes;
}

export default Routess;
